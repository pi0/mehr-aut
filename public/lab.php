<?php
var_dump($_REQUEST);
?>
<!doctype html>
<html lang="en-US">
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<form action="lab.php">
    <dvi class="post-filter-box">
        <input name="a-a" value="d" type=""/>
        <input name="a_a" value="d" type=""/>
        <input name="a.c" value="c" type=""/>
        <input name="a[d]" value="c" type=""/>
        <input name="a[e]" value="c" type=""/>
        <input name="a[1]" value="c" type=""/>
        <input name="a[3]" value="c" type=""/>
        <input type="submit" value=""/>
    </dvi>
</form>
</body>
</html>