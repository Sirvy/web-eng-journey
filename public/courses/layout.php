<?php
    
class Course
{
    public static string $title = '';
    public static string $description = '';
    public static string $backgroundUrl = '';

    public static array $chapters = [];
    public static bool $useMath = false;
    public static bool $useCode = false;
}

class Layout
{
    private array $params = [];

    private string $currentChapter = '';

    public function __construct()
    {
        $this->parseUrlParams();
        $this->setCurrentChapter();
        $this->render();
    }

    private function parseUrlParams(): void
    {
        if (isset($_GET['page']) and !empty($_GET['page'])) {
            $getPage = htmlspecialchars($_GET['page']);
            $this->params = explode('/', $getPage);
        }
    }

    public function setCurrentChapter(string $homeChapter = 'home'): void
    {
        if (!isset($this->params[0])) {
            $this->currentChapter = $homeChapter;
            return;
        }
        $this->currentChapter = $this->params[0];
    }

    public function validateCurrentChapter(): void
    {
        if (!isset(Course::$chapters[$this->currentChapter]) || !file_exists('chapters/' . $this->currentChapter . '.php')) {
            header("HTTP/1.0 404 Not Found");
            die();
        }
    }

    public function getCurrentChapterContent(): string
    {
        $this->validateCurrentChapter();
        ob_start();
        require_once('chapters/' . $this->currentChapter . '.php');
        return ob_get_clean();
    }

    public function render(): void
    {
        ?>
        <html lang="en">
        <head>
            <title><?= Course::$chapters[$this->currentChapter] ?> | <?= Course::$title ?></title>
            <link rel="stylesheet" type="text/css" href="https://sigma.noponfix.com/styles/prism-ok.css?v=1">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400">
            <link rel="stylesheet" href="/courses/style.css?v=<?= date("dmYHis") ?>" type="text/css">
            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <meta name="description" content="<?= Course::$description ?>">
            <meta charset="utf-8">
        </head>
        <body>
        <div class="header">
            <h1><?= Course::$title ?> | <a href="/" class="link highlight">Web Engineering</a></h1>
        </div>

        <div class="row">
            <div class="column side">
                <h2 style="text-align: center;">Contents</h2>
                <ul>
                    <?php foreach (Course::$chapters as $key => $chapter): ?>
                        <?php if ($this->currentChapter == $key): ?>
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
            <div class="column middle"><?= $this->getCurrentChapterContent() ?></div>
        </div>

        <?php if (Course::$useCode): ?>
            <script src="https://sigma.noponfix.com/scripts/prism-ok.js?v=1"></script><?php endif ?>
        <?php if (Course::$useMath): ?>
            <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
            <script id="MathJax-script" async
                    src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
        <?php endif ?>
        </body>
        </html>

        <?php
    }
}

?>
