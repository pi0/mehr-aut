<?php
/**
 * User: Reza
 * Date: 2/7/14
 * Time: 11:17 AM
 */

/*
 *  Configs
 */
$publicPath = 'D:/www/www/mehr-aut/public';
$index = file_get_contents('D:\www\www\mehr-aut\app\views\mehr\index.phtml');
preg_match_all('#<script src="<\?= \$base \?>(.*)">.*</script>#u', $index, $indexFiles);

$indexFiles = array_map(function ($v) use ($publicPath) {
    return $publicPath . '/' . $v;
}, $indexFiles[1]);


$ahuraFiles = getAllFilesRecursively('D:\www\www\mehr-aut\public\ahura');
$mehrFiles = getAllFilesRecursively('D:\www\www\mehr-aut\public\app');
$uxFiles = getAllFilesRecursively('D:\www\www\mehr-aut\public\vendor\ext-ux');

$build = <<<EO
/*!
* @preserve Mehr Management System.
* Copyright 2014 Ahura, Inc.
* http://www.AhuraIT.com
*/

EO;


function getAllFilesRecursively($root)
{

    $iter = new RecursiveIteratorIterator(
        new RecursiveDirectoryIterator($root, RecursiveDirectoryIterator::SKIP_DOTS),
        RecursiveIteratorIterator::SELF_FIRST,
        RecursiveIteratorIterator::CATCH_GET_CHILD // Ignore "Permission denied"
    );

    $paths = array($root);
    foreach ($iter as $path => $dir) {
//        var_dump(preg_match('#\.js$#',$dir->getFilename()));
        if ((boolean)$dir->getFilename() && $dir->isFile() && preg_match('#\.js$#', $dir->getFilename())) {
            $paths[] = $path;
        }
    }
    return $paths;
}


$files = array_merge($indexFiles, $uxFiles, $ahuraFiles, $mehrFiles);
//$files = array_merge($indexFiles);
if (($key = array_search('D:\www\www\mehr-aut\public\app\app.js', $files)) !== false) {
    unset($files[$key]);
}

foreach ($files as $file) {
    echo $file . PHP_EOL;
    echo (int)(filesize($file) / 1024) . PHP_EOL;
    $build .= <<<eos

/********************************************************************************************************************************************
 * $file
 ********************************************************************************************************************************************/

eos;
    $build .= file_get_contents($file);
}

$path = $publicPath . '/ext.merged.js';
echo "FinalSize:" . file_put_contents($path, $build);