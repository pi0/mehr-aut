<?php
require_once __DIR__ . '/../config/services.php';

class NewsApi extends BaseApi
{
    function __construct()
    {
        $this->db = $this->getDI()['db'];
    }

    function read($params)
    {
        $params = (array)$params;
        $id = @$params['id'];
        if ($id) {
            $news = new News();
            $data = $news->findFirst($id)->toArray();
            formPostProcess($data);
            return (['data' => $data, 'success' => true]);
        } else {
            $whitList = [];
            $query = $this->queryBuilder('News');
            if (isset($params['userId'])) {
                $query->join('NewsMember', ' News.id=newsId ')
                    ->where('userId=?0', [$params['userId']]);
            };
            $response = $this->extFilter($query, $params, $whitList);
            return ($response);
        }
    }

    function create()
    {
        $data = $_REQUEST;
//        formPreProcess($data);
        $news = new News();
        if ($news->save($data)) {
            return extJson(true, $news->toArray());
        } else {
            return extJson(false, $news->toArray(), extErrors($news->getMessages()));
        }
    }

    function destroy($params){

    }
}
