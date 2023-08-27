<?php

$params = [];
if (isset($_GET['page']) and !empty($_GET['page'])) {
    $getPage = htmlspecialchars($_GET['page']);
    $params = explode('/', $getPage);
}
$getChapter = $params[0];

if (empty($getChapter)) {
    $getChapter = 'home';
}


if (!isset($chapters[$getChapter]) || !file_exists('chapters/' . $getChapter . '.php')) {
    header("HTTP/1.0 404 Not Found");
    die();
}

function getContent($getChapter)
{
    ob_start();
    require_once('chapters/' . $getChapter . '.php');
    return ob_get_clean();
}

?>
<html lang="en">
<head>
    <title><?= $chapters[$getChapter] ?> | <?= $title ?></title>
    <link rel="stylesheet" href="/courses/style.css" type="text/css">
    <link rel="stylesheet" type="text/css" href="https://sigma.noponfix.com/styles/prism-ok.css?v=1">
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="<?= $description ?>">
    <style>
        .header {
            background: url("<?= $backgroundUrl ?>");
        }
    </style>
    <meta charset="utf-8">
</head>
<body>
<div class="header">
    <h1><?= $title ?> | <a href="/" class="link">Web Engineering Journey</a></h1>
</div>

<div class="row">
    <div class="column side">
        <h2 style="text-align: center;">Contents</h2>
        <ul>
            <?php foreach ($chapters as $key => $chapter): ?>
                <?php if ($getChapter == $key): ?>
                    <li class="active"><?= $chapter ?></li>
                <?php else: ?>
                    <?php if (file_exists('chapters/' . $key . '.php')): ?>
                        <li><a href="./<?= $key ?>"><?= $chapter ?></a></li>
                    <?php else: ?>
                        <li><?= $chapter ?></li>
                    <?php endif ?>
                <?php endif ?>
            <?php endforeach ?>
        </ul>
    </div>
    <div class="column middle"><?= getContent($getChapter); ?></div>
</div>

<script src="https://sigma.noponfix.com/scripts/prism-ok.js?v=1"></script>
</body>
</html>
