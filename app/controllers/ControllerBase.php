<?php

class ControllerBase extends Phalcon\Mvc\Controller
{

    protected function initialize()
    {
        if ($this->session->has('auth')) {
            $this->user = User::findFirst($this->session->auth);
        }
//        var_dump($this->session);
        $this->jr = $this->request->getJsonRawBody();
//        die();
        $this->view->setVar('BASE', $this->url->getBaseUri());
//        Phalcon\Tag::prependTitle('Vajje.com | ');
    }

    protected function forward($uri)
    {
        $uriParts = explode('/', $uri);
        return $this->dispatcher->forward(
            array(
                'controller' => $uriParts[0],
                'action' => $uriParts[1]
            )
        );
    }

    public function extFilter($table, $filters = [])
    {
        $query = $this->modelsManager->createBuilder()->from($table);
        foreach ($filters as $filter) {
            switch ($filter['data']['type']) {
                case 'string' :
                    $query->where($filter['field'] . ' like ?', '%' . $filter['data']['value'] . "%");
//                    $qs .= " AND " . $filters[$i]['field'] . " LIKE '%" . $filters[$i]['data']['value'] . "%'";
                    Break;
//                case 'list' :
//                    if (strstr($filters[$i]['data']['value'], ',')) {
//                        $fi = explode(',', $filters[$i]['data']['value']);
//                        for ($q = 0; $q < count($fi); $q++) {
//                            $fi[$q] = "'" . $fi[$q] . "'";
//                        }
//                        $filters[$i]['data']['value'] = implode(',', $fi);
//                        $qs .= " AND " . $filters[$i]['field'] . " IN (" . $filters[$i]['data']['value'] . ")";
//                    } else {
//                        $qs .= " AND " . $filters[$i]['field'] . " = '" . $filters[$i]['data']['value'] . "'";
//                    }
//                    Break;
//                case 'boolean' :
//                    $qs .= " AND " . $filters[$i]['field'] . " = " . ($filters[$i]['data']['value']);
//                    Break;
//                case 'numeric' :
//                    switch ($filters[$i]['data']['comparison']) {
//                        case 'eq' :
//                            $qs .= " AND " . $filters[$i]['field'] . " = " . $filters[$i]['data']['value'];
//                            Break;
//                        case 'lt' :
//                            $qs .= " AND " . $filters[$i]['field'] . " < " . $filters[$i]['data']['value'];
//                            Break;
//                        case 'gt' :
//                            $qs .= " AND " . $filters[$i]['field'] . " > " . $filters[$i]['data']['value'];
//                            Break;
//                    }
//                    Break;
//                case 'date' :
//                    switch ($filters[$i]['data']['comparison']) {
//                        case 'eq' :
//                            $qs .= " AND " . $filters[$i]['field'] . " = '" . date('Y-m-d', strtotime($filters[$i]['data']['value'])) . "'";
//                            Break;
//                        case 'lt' :
//                            $qs .= " AND " . $filters[$i]['field'] . " < '" . date('Y-m-d', strtotime($filters[$i]['data']['value'])) . "'";
//                            Break;
//                        case 'gt' :
//                            $qs .= " AND " . $filters[$i]['field'] . " > '" . date('Y-m-d', strtotime($filters[$i]['data']['value'])) . "'";
//                            Break;
//                    }
//                    Break;
            }
        }

        return $query->getQuery()->execute()->toArray();

    }
}
