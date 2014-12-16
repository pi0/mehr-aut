<?php

class ProgramController extends ControllerBase
{
    public function readAction()
    {
        $program = ProgramList::findFirstById($this->dispatcher->getParam('id'));
        $uid = $this->di['session']['auth'];
        $programArray = $this->programEnrollmentStatus($program, $uid);
        jsonResponse($programArray);
    }

    public function readAllAction()
    {
        $query = $this->modelsManager->createBuilder()
            ->orderBy('cDate desc')
            ->from('ProgramList');
        if (isset($filter['text']) && $filter['text'] != null)
            $query->andWhere('details like :s: OR name like :t:',
                ['s' => '%' . $filter['text'] . '%', 't' => '%' . $filter['text'] . '%']);
        if (isset($filter['subject']) && $filter['subject'] != null) {
            $query->andWhere('subject = :s:', ['s' => $filter['subject']]);
        }
        if (isset($filter['type']) && $filter['type'] != null) {
            $query->andWhere('type = :type:', ['type' => $filter['type']]);
        }
        $data = $query->getQuery()->execute()->toArray();
        foreach ($data as $k => $v) {
            $data[$k]['details'] = ellipsis(strip_tags($v['details']));
            $data[$k]['postType'] = 'program';
        }
        jsonResponse($data);
    }

    public function op()
    {
        $request = $this->request->getJsonRawBody();
        $program = ProgramList::findFirstById($this->dispatcher->getParam('id'));
        $uid = $this->di['session']['auth'];
        $programArray = $this->programEnrollmentStatus($program, $uid);
        $userEnrollmentStatus = $programArray['userEnrollmentStatus'];
        if (isset($request->unenroll) && $userEnrollmentStatus == 'enrolled') {
            $enroller = Enroller::findFirst(['conditions' => 'user=?0 and program=?1', 'bind' => [$uid, $program->id]]);
            $enroller->delete();
            $programArray['userEnrollmentStatus'] = $this->programEnrollmentStatus($program, $uid);
            jsonResponse($programArray);
        } elseif (isset($request->enroll) && in_array($userEnrollmentStatus, ['ok', 'pay'])) {
            $enroller = new Enroller();
            $enroller->user = $uid;
            $enroller->program = $program;
            $enroller->status = 'final';
            if ($enroller->save()) {
                $credit = new Credit();
                $credit->assign([
                    'amount' => -(int)$program->registerFee,
                    'user' => $this->uid,
                    'details' => 'ثبت‌نام در برنامه' . $program->id
                ]);
                if ($credit->save()) {
                    $programArray['userEnrollmentStatus'] = $this->programEnrollmentStatus($program, $uid)['userEnrollmentStatus'];
                    $programArray['enroller'] = $enroller->toArray();
                    jsonResponse($programArray);

                } else {
                    $enroller->delete();
                    jsonResponse($credit->getMessages());
                    var_dump($credit->getMessages());
                    die();
                };
            } else {
                var_dump($enroller->getMessages());
                jsonResponse($enroller->getMessages());
            }
        }
    }

    protected function programEnrollmentStatus($program, $uid)
    {
        $program = $program->toArray();
        $status = null;
        if ($program['executionStatus'] == 'p') {
            $status = 'executed';
        } elseif ($program['enrollmentStatus'] == 'f') {
            $status = 'enrollmentInFuture';
        } elseif ($program['enrollmentStatus'] == 'c' || ($program['enrollmentStatus'] == 'p' and $program['executionStatus'] == 'f')) {
            if (!isset($this->di['session']['auth'])) {
                $status = 'guest'; // need to log in
            } else {
                $enroller = Enroller::findFirst(['conditions' => 'user=?0 and program=?1', 'bind' => [$uid, $program['id']]]);
                if ($enroller) {
                    $status = 'enrolled';
                    $program['enroller'] = $enroller->toArray();
                    $program['enroller'] = Enroller::findFirst(['conditions' => 'user=?0 and program=?1', 'bind' => [$uid, $program['id']]]);
                    if ($enroller->credit) {
                        $program['amount'] = Credit::findFirst($enroller->credit)->amount;
                    }
                } elseif ($program['enrollerCount'] && $program['maxCapacity'] <= $program['enrollerCount']) {
                    $status = 'full';
                } elseif ($this->inAudience($uid, $program['audience'])) {
                    if ($program['registerFee'] > 0) {
                        $program['neededCredit'] = ($program['registerFee'] - Credit::currentCredit($this->uid));
                        $status = ($program['neededCredit'] > 0) ? 'lowCredit' : 'pay';
                    } else {
                        $status = 'ok';
                    }
                } else {
                    $status = 'notEligible';
                }
            }
        } elseif ($program['enrollmentStatus'] == null) {
            $status = 'unknown';
        }
        $program['userEnrollmentStatus'] = $status;
        return $program;
    }
}