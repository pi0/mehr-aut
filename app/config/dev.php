<?php
$config = array(
//    'stage' => 'production',
    'stage' => 'development',
    'setting' => [
        'path' => __DIR__ . '/setting.json'
    ],
    'database' =>
        [
            'host' => '127.0.0.1',
            'username' => 'root',
            'password' => '',
            'name' => 'mehr',
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
    'licensee' =>
        [
            'name' => 'دمو',
        ],
    'bank' => [
        'brand' => 'mellat',
        'terminalId' => 1581085,
        'username' => 'ahura773',
        'password' => 23060009,
        'callbackUrl' => 'http://192.69.208.194/mehr/credit/verify'
    ]
);

return $config;