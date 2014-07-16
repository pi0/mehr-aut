<?php

class BaseApi extends Phalcon\DI\Injectable
{
    public function queryBuilder($table)
    {
        return $query = $this->modelsManager->createBuilder()->from($table);
    }

    public function extFilter($query, $params = [], $whitList = [])
    {
        $params = array_merge([
                'start' => 0,
            ]
            , $params);
//        $filters=$params['filters'];
        $filters = isset($params['filter']) ? json_decode($params['filter'], true) : [];
        foreach ($filters as $filter) {
            if (!in_array($filter['field'], $whitList)) {
                echo 'Invalid: ' . $filter['field'];;
                die();
            }
            switch ($filter['type']) {
                case 'string' :
                    $query->where($filter['field'] . ' like ?0', ['%' . $filter['value'] . '%']);
                    Break;
                case 'list' :
                    $query->inWhere($filter['field'], $filter['value']);
                    Break;
                case 'boolean' :
                    $query->where($filter['field'] . ' = ?0', [$filter['value']]);
                    Break;
                case 'numeric' :
                    switch ($filter['comparison']) {
                        case 'eq' :
                            $query->where($filter['field'] . ' = ?0', [$filter['value']]);
                            Break;
                        case 'lt' :
                            $query->where($filter['field'] . ' < ?0', [$filter['value']]);
                            Break;
                        case 'gt' :
                            $query->where($filter['field'] . ' > ?0', [$filter['value']]);
                            Break;
                    }
                    Break;
                case 'date' :
                    $date = date('Y-m-d', strtotime($filter['value']));
                    switch ($filter['comparison']) {
                        case 'eq' :
                            $query->where($filter['field'] . ' = ?0', [$date]);
                            Break;
                        case 'lt' :
                            $query->where($filter['field'] . ' < ?0', [$date]);
                            Break;
                        case 'gt' :
                            $query->where($filter['field'] . ' > ?0', [$date]);
                            Break;
                    }
                    Break;
            }
        }

        $paginator = new Phalcon\Paginator\Adapter\QueryBuilder(array(
            "builder" => $query,
            "limit" => ($params['limit'] <= 100) ? $params['limit'] : 100,
            "page" => $params['page']
        ));

        $page = $paginator->getPaginate();
        if (!$page->total_items) return ['total' => 0];
        return ['data' => $page->items->toArray(), 'total' => $page->total_items];

    }
}