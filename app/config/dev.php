<?php
$config = array(
    'stage' =>
    [
        'production' => false,
    ],
    'database' =>
    [
        'host' => 'localhost',
        'username' => 'root',
        'password' => '',
        'name' => 'mehr2',
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
        'baseUri' => '/',
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