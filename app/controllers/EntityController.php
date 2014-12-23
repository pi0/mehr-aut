<?php

class EntityController extends ControllerBase
{

    // this var is used in the member level method
    var $role = null;

    public function readAllAction()
    {
        $query = $this->modelsManager->createBuilder()
            ->orderBy('cDate desc')
            ->from('EntityList');
        if (isset($filter['text']) && $filter['text'] != null)
            $query->andWhere('.details like :s: OR name like :t:',
                ['s' => '%' . $filter['text'] . '%', 't' => '%' . $filter['text'] . '%']);
        if (isset($filter['subject']) && $filter['subject'] != null) {
            $query->andWhere('.subject = :s:', ['s' => $filter['subject']]);
        }
        if (isset($filter['type']) && $filter['type'] != null) {
            $query->andWhere('.type = :s:', ['s' => $filter['type']]);
        }
        $data = $query->getQuery()->execute()->toArray();
        foreach ($data as $k => $v) {
            $data[$k]['image'] = ($data[$k]['image'] != null) ? File::getHashName($data[$k]['image']) : false;
            $data[$k]['details'] = ellipsis(strip_tags($v['details']));
            $data[$k]['postType'] = 'entity';
        }
        jsonResponse($data);
    }

    public function readAction()
    {
        $id = $this->dispatcher->getParam('id');
        $entity = EntityList::findFirst(['id' => $id]);
        $entity = $this->entityMembershipStatus($entity, $this->uid);
        $entity['image'] = ($entity['image'] != null) ? File::getHashName($entity['image']) : false;
        $entity['votingStatus'] = true;//TODO this is placed for testing and should be removed later
        jsonResponse($entity);
    }

    public function opAction()
    {
        $id = $this->dispatcher->getParam('id');
        $entity = EntityList::findFirstById($id);
        $request = $this->request->getJsonRawBody();
        $entity->image = ($entity->image != null) ? File::getHashName($entity->image) : false;
        $entityArray = $this->entityMembershipStatus($entity, $this->uid);
        if ($request->apply) {
            if ($entityArray['membership']['status'] == 'canJoin') {
                $em = new EntityMember();
                $em->user = $this->currentUser->id;
                $em->entity = $id;
                $em->role = 'applied';
                if ($em->save()) {
                    jsonResponse($this->entityMembershipStatus($entity, $this->uid));
                } else {
                    jsonResponse($entity->getMessages());
                };
            } else
                jsonResponse($entityArray['userMembershipStatus']);
        }
    }

    // function that takes care of all the issue related to the user membership status
    private function entityMembershipStatus(EntityList $entity, $userId)
    {
        $entity = $entity->toArray();
        $entityId = $entity['id'];
        if ($role = CouncilMember::isInActiveCouncil($entityId, $userId)) {
            $status = 'councillor';
            $entity['membership']['role'] = $role;
        } elseif ($membership = EntityMember::getMembership($entityId, $userId)) {
            $status = 'member';
            $entity['membership'] = $membership->toArray();
        } elseif (!$this->inAudience($userId, $entity['audience'])) {
            $status = 'notEligible'; //'you\'re not audience';
        } elseif (!$entity['subscription']) {
            $status = 'inAudience';//'you\'re one of the audience';
        } else { // accepts members
            $status = 'canJoin'; // 'you can apply for the entity';
        }
        $entity['membership']['status'] = $status;
        return $entity;
    }
}