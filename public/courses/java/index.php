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


$title = 'Java Course';

$description = '';

$backgroundUrl = "https://www.toptal.com/designers/subtlepatterns/uploads/fancy-cushion.png";

$chapters = [
    'home' => 'Course Overview',
    'introduction' => 'Introduction',
    'basics' => 'Java Basics',
    'oop' => 'OOP',
    'utils' => 'Utils',
    'system' => 'System package',
    'stream' => 'Stream API',
    'concurrency' => 'Concurrency', // Advanced parallelism
    'networking' => 'Networking',
    'javafx' => 'JavaFX',
    'database' => 'Database',
    'testing' => 'Testing',
    'depth' => 'Java in-depth', // JVM, ByteCode, GC, Classloader, 
    'building' => 'Building tools', // Maven, ANT, Gradle
    'advanced' => 'Advanced Java', // Modular architecture, Reflection, Annotations, Generics, NIO, Security
    'principles' => 'Programming principles',
    'patterns' => 'Design patterns',
    'large' => 'Building large projects', // Dependencies, Artifactory, JDBC, ORM, REST, Testing, Authentication, Authorization, Microservices
    'spring' => 'Spring, Spring Boot',
    'jee' => 'Enterprise Java', // JPA, JNDI, EJB, JSF, Beans, Servlet, ...
    'am1' => 'Advanced architectures', // REST, HATEOAS, Service-oriented, Application Server Architecture, Caching, Concurrency, High availability, high performance, messaging
    'devops' => 'CI/CD, DevOPS, Clouds', // docker, kubernetes, clouds
    'integration' => 'System integration',
    'new' => 'New Java versions features',
];

require_once('../layout.php');