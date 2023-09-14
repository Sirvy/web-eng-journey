<?php

require_once('../layout.php');

Course::$title = 'PHP Course';

Course::$description = '';

Course::$backgroundUrl = "https://www.toptal.com/designers/subtlepatterns/uploads/fancy-cushion.png";

Course::$chapters = [
    /*
     * What is Backend, why PHP
     */
    'home' => 'Introduction',
    /*
     * The backend vs. frontend
     * HTML inside
     * Apache, Nginx
     */
    'basics' => 'The Basics',
    'syntax' => 'Basic syntax',
    'fastcgi' => 'FastCGI',
    'functions' => 'Basic Functions',
    'oop' => 'OOP',
    'autoloading' => 'Autoloading',
    'composer' => 'Composer',
    /*
     * Persistence, MySQL, MariaDB
     * PDO
     * Active Record
     */
    'database' => 'Database',
    'testing' => 'Testing',
    'rest' => 'REST API',
    'crawling' => 'Crawling',
    'cmd' => 'Command Line',
    'debugging' => 'Debugging',
    'security' => 'Security',
    /*
     * MVC, MVP, Symfony, Nette, Laravel, Lumen, Slim
     */
    'framework' => 'Frameworks'
];

$layout = new Layout();