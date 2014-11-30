<?php

class BaseApi extends Phalcon\DI\Injectable
{
    public function queryBuilder($table)
    {
        return $query = $this->modelsManager->createBuilder()->from($table);
    }

    static public function extFilter($query, $params = [], $blackList = [], $extraFilter = [])
    {
        $params = array_merge([
                'start' => 0,
            ]
            , (array)$params);

        if (isset($params['sort'])) {
            $query->orderBy($params['sort'][0]->property . ' ' . $params['sort'][0]->direction);
        }

        if (isset($params['filter'])) {
            $extraFilter = array_merge($extraFilter, json_decode($params['filter'], true));
        }

        foreach ($extraFilter as $filter) {
            if (!preg_match('#[a-zA-Z]#u', $filter['field']) or in_array($filter['field'], $blackList)) {
                echo 'Error: Invalid: ' . $filter['field'];;
                die();
            }
            switch ($filter['type']) {
                case 'string' :
                    $query->andWhere($filter['field'] . ' like ?0', ['%' . $filter['value'] . '%']);
                    Break;
                case 'list' :
                    $query->inWhere($filter['field'], $filter['value']);
                    Break;
                case 'boolean' :
                    $query->andWhere($filter['field'] . ' = ?0', [$filter['value']]);
                    Break;
                case 'numeric' :
                    switch ($filter['comparison']) {
                        case 'eq' :
                            $query->andWhere($filter['field'] . ' = ?0', [$filter['value']]);
                            Break;
                        case 'lt' :
                            $query->andWhere($filter['field'] . ' < ?0', [$filter['value']]);
                            Break;
                        case 'gt' :
                            $query->andWhere($filter['field'] . ' > ?0', [$filter['value']]);
                            Break;
                    }
                    Break;
                case 'date' :
                    $date = date('Y-m-d', strtotime($filter['value']));
                    switch ($filter['comparison']) {
                        case 'eq' :
                            $query->andWhere($filter['field'] . ' = ?0', [$date]);
                            Break;
                        case 'lt' :
                            $query->andWhere($filter['field'] . ' < ?0', [$date]);
                            Break;
                        case 'gt' :
                            $query->andWhere($filter['field'] . ' > ?0', [$date]);
                            Break;
                    }
                    Break;
            }
        }

        $paginator = new Phalcon\Paginator\Adapter\QueryBuilder(array(
            "builder" => $query,
            "limit" => (isset($params['limit']) && $params['limit'] <= 100) ? $params['limit'] : 100,
            "page" => isset($params['page']) ? $params['page'] : 1
        ));

        $page = $paginator->getPaginate();
        if (!$page->total_items) return ['total' => 0];
        return ['data' => $page->items->toArray(), 'total' => $page->total_items];

    }
}