<?php
$config = array(
    'stage' =>
        [
            'production' => false,
        ],
    'setting' => [
        'path' => __DIR__ . '/setting.json'
    ],
    'database' =>
        [
            'host' => '127.0.0.1',
            'username' => 'root',
            'password' => '',
            'name' => 'mehr3',
        ],
    'mongodb' =>
        [
            'host' => 'localhost',
            'db' => 'v',
            'user' => 'root',
            'password' => 'burun',
        ],
    'phalcon' =>
        [
            'controllersDir' => '/../app/controllers/',
            'modelsDir' => '/../app/models/',
            'viewsDir' => '/../../app/views/',
            'pluginsDir' => '/../app/plugins/',
            'libraryDir' => '/../app/library/',
            'apiDir' => '/../app/api/',
            'baseUri' => '/aut/',
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