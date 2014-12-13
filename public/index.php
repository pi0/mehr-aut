<?php
date_default_timezone_set('Asia/Tehran');
error_reporting(E_ALL ^ E_DEPRECATED);
ini_set("log_errors", 1);
ini_set("error_log", __DIR__."/../log/error.log");

require_once '../vendor/IntlDateTime/IntlDateTime.php';
require_once "../vendor/Ahura/Util.php";
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

    $application = new \Phalcon\Mvc\Application();
    $application->setDI($di);
    echo $application->handle()->getContent();

} catch (Phalcon\Exception $e) {
    echo $e->getMessage();
} catch (PDOException $e) {
    echo $e->getMessage();
}
