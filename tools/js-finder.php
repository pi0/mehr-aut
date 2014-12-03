<?php
/**
 * Created by PhpStorm.
 * User: Reza
 * Date: 2/7/14
 * Time: 11:17 AM
 */

$index = file_get_contents('D:/www/www/falak/public/footer.php');
$publicPath = 'D:/www/www/falak/public';
preg_match_all('#<script src="(.*)">.*</script>#u', $index, $scripts);
var_dump($scripts[1]);
$build = '/*!' . PHP_EOL;
$build .= ' * Falak (Developed by Reza Salarmehr).' . PHP_EOL;
$build .= ' * Copyright 2014 AUT-APA, Inc.'.PHP_EOL;
$build .= ' */' . PHP_EOL;
echo $build;
foreach ($scripts[1] as $file) {
    $build .= <<<eos

/********************************************************************************************************************************************
 * $file
 ********************************************************************************************************************************************/

eos;
    $build .= file_get_contents($publicPath . '/' . $file);
}


//file_put_contents($build,$publicPath . '/js/compiler.js');
$path = $publicPath . '/app/app.merged.js';
echo file_put_contents($path, $build);