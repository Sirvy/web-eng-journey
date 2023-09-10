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

$useCode = false;
$useMath = false;

?>
<html lang="en">
<head>
    <title><?= $chapters[$getChapter] ?> | <?= $title ?></title>
    <link rel="stylesheet" type="text/css" href="https://sigma.noponfix.com/styles/prism-ok.css?v=1">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400">
    <link rel="stylesheet" href="/courses/style.css?v=<?= date("dmYHis") ?>" type="text/css">
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="<?= $description ?>">
    <meta charset="utf-8">
</head>
<body>
<div class="header">
    <h1><?= $title ?> | <a href="/" class="link highlight">Web Engineering</a></h1>
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

<?php if (useCode): ?><script src="https://sigma.noponfix.com/scripts/prism-ok.js?v=1"></script><?php endif ?>
<?php if (useMath): ?>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
<?php endif ?>
</body>
</html>
