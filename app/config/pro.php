<?php
$config = array(
    'stage' =>
    [
        'production' => true,
    ],
    'database' =>
    [
        'host' => 'localhost',
        'username' => 'root',
        'password' => '',
        'name' => 'vajje',
    ],
    'mongodb' =>
    [
        'host' => 'localhost',
        'db' => 'newvajje',
        'user' => 'myroot',
        'password' => 'burun2',
    ],
    'phalcon' =>
    [
        'controllersDir' => '/../app/controllers/',
        'modelsDir' => '/../app/models/',
        'viewsDir' => '/../../app/views/',
        'pluginsDir' => '/../app/plugins/',
        'libraryDir' => '/../app/library/',
        'baseUri' => '/vajje/',
    ],
    'metadata' =>
    [
        'adapter' => 'Apc',
        'timezone' => 'IR/Asia',
        'debug' => '1',
        'metadata' =>
        [
            'adapter' => 'Apc',
            'path' => '/app/var/metadata/',
            'suffix' => 'my-suffix',
            'lifetime' => '3600',
        ],
    ],
    'locale' =>
    [
        'name' => 'fa_IR',
        'domain' => 'default',
        'path' => '/app/var/locale/',
        'charset' => 'UTF-8',
    ],
    'ddos' =>
    [
        'threshold' => '20',
    ],
);

return $config;