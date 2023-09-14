<?php

require_once('../layout.php');

Course::$title = '.NET Course';

Course::$description = '';

Course::$backgroundUrl = "https://www.toptal.com/designers/subtlepatterns/uploads/fancy-cushion.png";

Course::$chapters = [
    'home' => 'Introduction',
    /*
     * C#, background
     */
    'basics' => 'The Basics',
    'syntax' => 'Basic syntax',
    /*
     * Operator overloading
     * Exceptions
     */
    'oop' => 'OOP',
    'wpf' => 'WPF',
    /*
     * components, delegates
     * events, generics
     * indexers, lambda, functors
     */
    'constructs' => 'Constructs',
    'files' => 'Files',
    /*
     * DataReader
     * Transactions
     * DataSet, DataTable, ...
     * DataBinding
     * LINQ
     * Entity Framework
     */
    'db' => 'Database',
    'di' => 'Dependency Injection',
    'asynchronous' => 'Asynchronous Programming',
    /*
     * MVC, WebAPI, RazorPages, Blazor
     */
    'web' => 'Web Applications',
    /*
     * Visual Studio
     * ASP.NET core
     * SignalR, OpenAPI, OAuth, Swagger
     * Azure, Cloud programming
     */
    'advanced' => 'Advanced .NET',
    'golang' => 'Golang',
    'kotlin' => 'Kotlin',
    'scala' => 'Scala'
];

$layout = new Layout();