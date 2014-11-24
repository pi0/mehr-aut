<?php

date_default_timezone_set('Asia/Tehran');
//error_reporting(E_ALL);
error_reporting(E_ALL ^ E_DEPRECATED);

//require_once 'FB/fb.php';
//require_once 'firelogger.php';
//require_once '../vendor/jdf.php';
require_once '../vendor/IntlDateTime/IntlDateTime.php';
require_once '../app/util.php';

spl_autoload_register(function($className) {
    if (strpos($className, 'App\Models') !== false) {
        eval("class $className extends \App\Models\BaseModel { };");
    }
});

try {



    /**
     * We're a registering a set of directories taken from the configuration file
     */
    $loader->registerDirs(
        array(
            __DIR__ . $config->phalcon->controllersDir,
            __DIR__ . $config->phalcon->pluginsDir,
            __DIR__ . $config->phalcon->libraryDir,
            __DIR__ . $config->phalcon->modelsDir,
            __DIR__ . $config->phalcon->apiDir,
        )
    )->register();

//    $loader->registerNamespaces(array(
////        'Phalcon' => 'D:\www\server\php_include_path\incubator-master\Library\Phalcon'
//    ));


//    require __DIR__ . "/../app/config/services.php";

    $application = new \Phalcon\Mvc\Application();
    $application->setDI($di);
    echo $application->handle()->getContent();

} catch (Phalcon\Exception $e) {
    echo $e->getMessage();
} catch (PDOException $e) {
    echo $e->getMessage();
}


//print_r( (new ProgramApi())->read());