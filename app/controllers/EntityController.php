<?php

class EntityController extends ControllerBase
{

    // this var is used in the member level method
    private var $role = null;

    public function entityAction()
    {
        $app = new Phalcon\Mvc\Micro();
        $app->setDI($this->di);
        $app->get('/entity/entity', function ($id = null) use ($app) {
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
        });
        $app->get('/entity/entity/{id}', function ($id = null) {
            $entity = EntityList::findFirst(['id' => $id]);
            $entity->postType = 'entity';
            $entity->membershipStatus = $this->membershipStatus($entity, $this->currentUser->id);
            // autoRender specifies that if the membership status can be rendered automatically or not
            $entity->autoRender = !in_array($entity->membershipStatus, ['canJoin', 'applied', 'nowAllowed', 'canceled']);
            $entity->image = ($entity->image != null) ? File::getHashName($entity->image) : false;
            jsonResponse($entity);
        });
        $app->patch('/entity/entity/{id}', function ($id = null) {
            $entity = EntityList::findFirst(['id' => $id]);
            $request = $this->request->getJsonRawBody();
            if (!$this->canJoin($entity, $this->currentUser->id) || !isset($request->submit))
                return jsonResponse(false);// we don't want the rest of the function to run, so we return
            $entity->postType = 'entity';
            $entity->image = ($entity->image != null) ? File::getHashName($entity->image) : false;
            $em = new EntityMember();
            $em->user = $this->currentUser->id;
            $em->entity = $id;
            $em->role = 'applied';
            $em->save();
            $entity->membershipStatus = 'applied';
            jsonResponse($entity);
        });
        $app->notFound(function () use ($app) {
            $app->response->setStatusCode(404, "Not Found")->sendHeaders();
            echo 'This is crazy, but this page was not found!';
        });
        $app->handle();
    }

//    function membershipStatus($entity, $userId)
//    {
//        $record = EntityMember::findFirst(['conditions' => 'user=?0 AND entity=?1', 'bind' => [$userId, $entity->id]]);
//        if ($record && count($record)) { // if the user has applied already, we should not let him/her apply again.
//            return $record->role;
//        } else {
//            return $this->inAudience($userId, $entity->audience) ? "canJoin" : "notAllowed";
//        }
//    }
//
//    function canJoin($entity, $userId)
//    {
//        return $this->membershipStatus($entity, $userId) == 'canJoin';
//    }
//
//    function isMember($entity, $userId)
//    {
//        return in_array($this->membershipStatus($entity, $userId), ['member', 'active']);
//    }
//

    private function acceptsMembers($entity){
        return $entity->subscription == 1;
    }

    // levels: "member","active","applied","notApplied"
    private function memberLevel($user,$entity){
        if(!$this->role) {
            $em = EntityMember::findFirst([
                'conditions' => 'user=?0 AND entity=?1',
                'bind' => [$user->id, $entity->id]
            ]);
            if (!$em) {
                $this->role = 'notApplied';
            } else {
                $this->role = $em->role;
            }
        }
        return $this->role;
    }

    private function isMember($user,$entity){
        return in_array($this->memberLevel($user,$entity),['member','active','applied']);
    }

    private function hasPosition($user,$entity){
        $cm = CouncilMember::findFirst('user=?0 AND council=?1',[$user->id,$entity->council]);
        if(!$cm)
            return false;
        return $cm->role;
    }

    // function that takes care of all the issue related to the user membership status
    private function handleMembership($user,$entity){
        if(!$this->inAudience($user->id,$entity->audience)){
            return 'you\'re not audience';
        } else {
            if(!$this->acceptsMembers($entity)){ // does not accept members
                return 'you\'re one of the audience';
            } else { // accepts members
                $level = $this->memberLevel($user,$entity); // levels: "member","active","applied","notApplied"
                if($this->isMember($user,$entity)){ // status of the user is either "member", "active" or "applied"
                    if($position = $this->hasPosition($user,$entity)){ // user has a position in the entity
                        return 'you\'re ' . $position . ' of the entity';
                    } else { // user does not have a position in the entity
                        return 'you\'re member of entity | ' . $level;
                    }
                } else { // user is not member of the entity, but can apply
                    return 'you can apply for the entity';
                }
            }
        }
    }

    public function membershipAction()
    {
        $app = new Phalcon\Mvc\Micro();
        $app->setDI($this->di);
        $app->get('/api/membership', function ($id = null) use ($app) {
            $data = $this->di['db']->fetchAll('SELECT * FROM entityList', Phalcon\Db::FETCH_ASSOC);
            jsonResponse($data);
        });
        $app->get('/api/membership/{id}', function ($id = null) {
            $data = $this->di['db']->fetchOne('SELECT * FROM entityList WHERE id=:id', Phalcon\Db::FETCH_ASSOC, ['id' => $id]);
            jsonResponse($data);
        });
        $app->notFound(function () use ($app) {
            $app->response->setStatusCode(404, "Not Found")->sendHeaders();
            echo 'This is crazy, but this page was not found!';
        });
        $app->handle();
    }

}