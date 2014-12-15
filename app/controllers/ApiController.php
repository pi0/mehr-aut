<?php

class ApiController extends ControllerBase
{

    protected function initialize()
    {
        $this->view->setVar('BASE', $this->url->getBaseUri());
    }

    public function postAction()
    {
        $posts = [];

        $allIDs = $this->modelsManager->createBuilder()
            ->from('Post')
            ->limit(50)
            ->columns(['id', 'type'])
            ->getQuery()->execute()->toArray();

        foreach (['news', 'program', 'entity'] as $p) {
            $ids = array_filter(array_map(
                function ($val) use ($p) {
                    if ($val['type'] == $p) return $val['id'];
                },
                $allIDs));

            // If not item of a specific type found go for the new type
            if (!sizeof($ids)) continue;

            $tables = [
                'news' => 'News',
                'program' => 'ProgramList',
                'entity' => 'EntityList'
            ];

            $items = $this->modelsManager->createBuilder()
                ->orderBy('cDate desc')
                ->inWhere('id', $ids)
                ->from($tables[$p])
                ->getQuery()
                ->execute()
                ->toArray();
            $items = array_map(function ($v) use ($p) {
                $v['postType'] = $p;
                return $v;
            }, $items);

            $posts = array_merge($posts, $items);
        }

        $tid = 1; // temp id()
        foreach ($posts as &$p) {
            if (isset($p['details']))
                $p['details'] = ellipsis($p['details']);
            $p['tic'] = $tid++;
        }

        usort($posts, function ($v, $w) {
            return strtotime($v['cDate']) < strtotime($w['cDate']);
        });


        jsonResponse($posts);
    }

    public function newsAction()
    {
        $app = new Phalcon\Mvc\Micro();
        $app->setDI($this->di);
        $app->get('/api/news', function ($id = null) use ($app) {
            $query = $this->modelsManager->createBuilder()
                ->orderBy('cDate desc')
                ->from('News');
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
                if (isset($v['image']))
                    $data[$k]['image'] = ($data[$k]['image'] != null) ? ($data[$k]['image'] . '/' . File::getName($data[$k]['image'])) : 0;
                $data[$k]['details'] = ellipsis(strip_tags($v['details']));
                $data[$k]['postType'] = 'news';
            }
            jsonResponse($data);
        });
        $app->get('/api/news/{id}', function ($id = null) {
            $news = News::findFirst($id);
            $news->postType = 'news';
            $news->image = ($news->image != null) ? (File::getHashName($news->image)) : 0;
            jsonResponse($news);
        });
        $app->notFound(function () use ($app) {
            $app->response->setStatusCode(404, "Not Found")->sendHeaders();
            echo 'This is crazy, but this page was not found!';
        });
        $app->handle();
    }

}