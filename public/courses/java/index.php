<?php

/*

# Java

## Introduction

- What is Java, background
- History, editions, versions
- main method
- Setup, command line, compilation, running Java program
+ Java9-12, Java14 features
+ Programming languages
+ IT Fields, Java usage

## Basic syntax

- Operators, priority, expression evaluation
- keywords, conditions, loops, functions
- toString, equals, hashCode

## OOP

- OOP Purpose, concept
- Classes, objects, methods, properties, override, interface
- Static
- Abstraction, Inheritence, Polymorfism, Encapsulation
- Composition, OO design
- Exception handling
- Generics

## Utils

- Collections (Set, List, Map)
- FileSystem
- Input/Output streams
- Object serialization, Data compression
- StreamAPI

## Concurrency

- Threads
- Fork&Join
- Synchronization, time-dependent errors, planning, deadlocks
- Advanced paralelism
    - ProcessBuilder, ConcurrentHashMap, FutureTask, ...

## Networking

- Networking basics
- Java Networking library
- Client-Server

## GUI - JavaFX

- Quick Introduction to GUI

## Database

- DB basics
- Connection - Statement, PreparedStatement, CallableStatement, DAO
- Hibernate

## Building Project

- ANT, Maven, Gradle
- ClassLoader

## JVM

- JVM
- ByteCode
- Garbage Collector

## Testing

- JUnit, JMock

## Modular architecture

- API/SPI
- OSGi
- Jigsaw

## Advanced

- Reflection
- Annotation
- Generics
- NIO (advanced I/O)
- Security - JAAS, JavaSecurity, JavaCrypto

## Large projects

- n-tier architecture
- Building, dependencies
- Spring, Spring Boot
- JDBC, ORM
- HTTP, REST
- Testing
- Authentication, Authorization in REST
- Microservices
- Enterprise Java

## Enterprise Java

- Introduction to JEE
- Maven
- Microservices, MicroProfile
- Servlet API
- Web Services - REST
- Beans
- Reactive architecture
- JPA, JNDI, EJB, JSF
- Jakarta Security, JWT
- MicroProfile monitoring
    - MicroProfile Health Check, Fault tolerance, Metrics, OpenTelemetry
- Docker and Kubernetes
- Message Oriented Middleware - Apache Camel
- GraphQL

## Advanced Architectures

- IS Architectures
- Service-Oriented architectures
- Communication protocols
- Application Server Architecture
- REST, HATEOAS
- Caching, Concurrency
- High Availability, High Performance
- Messaging Systems

## Programming principles

- SOLID
- Clean Code
- DRY, YAGNI, KISS
- TDD, DDD
- GoF design patterns
- Architectural Patterns

# System integration

- REST API
- RabbitMQ
- Kafka
- Akka
- ElasticSearch, Kibana
- GraphQL
- MapStruct, Moeaba
- MiddleWare
- ESB
- WSDL, SOAP
- JNDI, RMI (JAVA object dsitribution)

*/


$chapters = [
    'home' => 'Course Overview',
    'introduction' => 'Introduction',
    'basics' => 'Java Basics',
    'oop' => 'OOP',
    'utils' => 'Utils',
    'system' => 'System package',
    'stream' => 'Stream API',
    'concurrency' => 'Concurrency', // Advanced paralelism
    'networking' => 'Networking',
    'javafx' => 'JavaFX',
    'database' => 'Database',
    'testing' => 'Testing',
    'depth' => 'Java in-depth', // JVM, ByteCode, GC, Classloader, 
    'building' => 'Building tools', // Maven, ANT, Gradle
    'advanced' => 'Advanced Java', // Modular architecture, Reflection, Annotations, Generics, NIO, Security
    'principles' => 'Programming principles',
    'patterns' => 'Design patterns',
    'large' => 'Building large projects', // Dependencies, JDBC, ORM, REST, Testing, Authentication, Authorization, Microservices
    'spring' => 'Spring, Spring Boot',
    'jee' => 'Enterprise Java', // JPA, JNDI, EJB, JSF, Beans, Servlet, ...
    'am1' => 'Advanced architectures', // REST, HATEOAS, Service-oriented, Application Server Architecture, Caching, Concurrency, High availability, high performance, messaging
    'devops' => 'CI/CD, DevOPS, Clouds', // docker, kubernetes, clouds
    'integration' => 'System integration',
    'new' => 'New Java versions features',
];

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

function getContent($getChapter) { 
    ob_start();
    require_once('chapters/' . $getChapter . '.php');
    return ob_get_clean(); 
}
?>
<html lang="en">
    <head>
        <title><?= $chapters[$getChapter] ?> | Java Course</title>
        <link rel="stylesheet" href="/style.css" type="text/css">
        <link rel="stylesheet" type="text/css" href="https://sigma.noponfix.com/styles/prism-ok.css?v=1">
        <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" >
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
            * {
                box-sizing: border-box;
            }
            
            html, body {
                margin: 0;
                padding: 0;
            }
            
            body {
                font-family: Helvetica, sans-serif;
            }
            
            /* Style the header */
            .header {
                background: url("https://www.toptal.com/designers/subtlepatterns/uploads/fancy-cushion.png");
                color: #fff;
                text-shadow: 0 0 5px #303030;
                padding: 20px;
                text-align: center;
                font-size: 20px;
            }
            
            /* Container for flexboxes */
            .row {
                display: -webkit-flex;
                display: flex;
                align-items: stretch;
            }
            
            /* Create three unequal columns that sits next to each other */
            .column {
                padding: 20px;
                padding-right: 0;
            }
            
            /* Left and right column */
            .column.side {
                -webkit-flex: 2;
                -ms-flex: 2;
                flex: 2;
                background-color: #000;
                color: #d0f0ff;
            }
            
            /* Middle column */
            .column.middle {
                -webkit-flex: 7;
                -ms-flex: 7;
                flex: 7;
                padding-right: 10px;
            }
            
            ul li {
                text-align: right;
                display: block;
                padding-top: 10px;
                padding-bottom: 10px;
                padding-left: 10px;
                padding-right: 10px;
            }
            
            ul li a {
                color: #d0f0ff;
            }
            
            ul li.active {
                background: #fff;
                color: #000;
            }
            
            /* Responsive layout - makes the three columns stack on top of each other instead of next to each other */
            @media (max-width: 800px) {
                .row {
                    -webkit-flex-direction: column;
                    flex-direction: column;
                }
                .column.side {
                    max-width: 100%;
                }
            }
            a.link {
                color: #fff;
                text-decoration: none;
            }
            a.link:hover {
                text-decoration: underline;
            }
        </style>
        <meta charset="utf-8">
    </head>
    <body>
        <div class="header">
            <h1>Java Course | <a href="/" class="link">Web Engineering Journey</a></h1>
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
