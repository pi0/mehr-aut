<?php

class EntityController extends ControllerBase
{
    function membershipStatus($entity, $userId)
    {
        $record = EntityMember::findFirst(['conditions' => 'user=?0 AND entity=?1', 'bind' => [$userId, $entity->id]]);
        if ($record && count($record)) { // if the user has applied already, we should not let him/her apply again.
            return $record->role;
        } else {
            return $this->inAudience($userId, $entity->audience) ? "canJoin" : "notAllowed";
        }
    }

    function canJoin($entity, $userId)
    {
        return $this->membershipStatus($entity, $userId) == 'canJoin';
    }

    function isMember($entity, $userId)
    {
        return in_array($this->membershipStatus($entity, $userId), ['member', 'active']);
    }

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