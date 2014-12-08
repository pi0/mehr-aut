<?php
/**
 * The FactoryDefault Dependency Injector automatically register the right services providing a full stack framework
 */
$di = new \Phalcon\DI\FactoryDefault();

//Read the configuration
$configFile = (php_uname('s') == 'Windows NT') ? 'dev.php' : 'pro.php';

$config = new Phalcon\Config(include_once __DIR__ . '/' . $configFile);
$loader = new \Phalcon\Loader();



//Start the session the first time when some component request the session service
$di->setShared('session', function() {
    $session = new Phalcon\Session\Adapter\Files();
    $session->start();
    return $session;
});

$di->setShared('user', function () use ($di) {
    if(isset($di->session['auth']))
        return User::findFirst($di->session->auth);
    else
        return false;
});

/**
 * We register the events manager
 */
$di->set('dispatcher', function () use ($di) {

    $eventsManager = $di->getShared('eventsManager');

    $security = new Security($di);

    /**
     * We listen for events in the dispatcher using the Security plugin
     */
    $eventsManager->attach('dispatch', $security);

    $dispatcher = new Phalcon\Mvc\Dispatcher();
    $dispatcher->setEventsManager($eventsManager);

    return $dispatcher;
});

/**
 * The URL component is used to generate all kind of urls in the application
 */
$di->set('url', function () use ($config) {
    $url = new \Phalcon\Mvc\Url();
    $url->setBaseUri($config->phalcon->baseUri);
    return $url;
});


$di->set('view', function () use ($config) {
    $view = new \Phalcon\Mvc\View();
    $view->setViewsDir(__DIR__ . $config->phalcon->viewsDir);
    return $view;
});

/**
 * Database connection is created based in the parameters defined in the configuration file
 */
$di->set('db', function () use ($config) {
    return new \Phalcon\Db\Adapter\Pdo\Mysql(array(
        "host" => $config->database->host,
        "username" => $config->database->username,
        "password" => $config->database->password,
        "dbname" => $config->database->name,
        'charset' => 'utf8', // UTF8 charset
        'options' => [PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC, PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, PDO::ATTR_PERSISTENT => TRUE,],
    ));
});

$di->set('pdo', function () use ($config) {
    try {
        $dbh = new PDO('mysql:dbname=' . $config->database->name . ';host=' . $config->database->host,
            $config->database->username,
            $config->database->password,
            [PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC, PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, PDO::ATTR_PERSISTENT => TRUE,]
        );
    } catch (PDOException $e) {
        echo 'Connection failed: ' . $e->getMessage();
    }
    return $dbh;
});

//$di['db']->query("SET NAMES 'utf8'");

/**
 * If the configuration specify the use of metadata adapter use it or use memory otherwise
 */
$di->set('modelsMetadata', function () use ($config) {
    if (isset($config->models->metadata)) {
        $metaDataConfig = $config->models->metadata;
        $metadataAdapter = 'Phalcon\Mvc\Model\Metadata\\' . $metaDataConfig->adapter;
        return new $metadataAdapter();
    } else {
        return new Phalcon\Mvc\Model\Metadata\Memory();
    }
});


//Register the flash service with custom CSS classes
$di->set('flash', function () {
    $flash = new Phalcon\Flash\Direct(array(
        'error' => 'alert alert-error',
        'success' => 'alert alert-success',
        'notice' => 'alert alert-info',
    ));
    return $flash;
});

//Register a user component
$di->set('elements', function () {
    return new Elements();
});

//MongoDB
$di->set('mongo', function () use ($config) {
//    $mongo = new MongoClient("mongodb://{$config->mongodb->user}:{$config->mongodb->password}@localhost");
    $mongo = new MongoClient("mongodb://localhost");
    return $mongo->selectDb($config->mongodb->db);
}, true);

//Register a collection manager
$di->set('collectionManager', function () {
    return new Phalcon\Mvc\Collection\Manager();
});

//Register global config
$di->set('config', function () use ($config) {
    return $config;
});

///**
// * Router
// */
$di->set('router', function () {
    return include_once "../app/config/routes.php";
}, true);


