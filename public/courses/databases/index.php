<?php

require_once('../layout.php');

Course::$title = 'Databases Course';

Course::$description = '';

Course::$backgroundUrl = "https://www.toptal.com/designers/subtlepatterns/uploads/fancy-cushion.png";

Course::$chapters = [
    /*
     * What is it good for
     * Data
     * Purpose
     */
    'home' => 'Introduction',
    /*
     * ER diagram
     * Normalization
     */
    'design' => 'Database Design',
    /*
     * SELECT, DML, DDL, DCL, TCL
     * Query evaluation
     * PL/SQL
     * Oracle SQL (triggers, recursion...)
     * SQL optimization
     */
    'sql' => 'SQL',
    'transactions' => 'Transactions',
    'indexes' => 'Indexes',
    'physical' => 'Physical Structure',
    /*
     * Scalability
     */
    'distribution' => 'Data Distribution',
    /*
     * Teradata, Oracle
     */
    'parallel' => 'Parallel architectures',
    /*
     * MySQL
     * PostgreSQL
     * NoSQL, BigData
     * Document DB, MongoDB
     * XML DB
     * Key-value DB
     * Wide-Column DB, Cassandra
     * Graph DB, Neo4j
     */
    'models' => 'DB models',
    /*
     * CAP theorem
     * Clustering
     * Firebase
     * OpenData
     * Hadoop
     * YARN
     * Apache Spark
     * Elasticsearch
     * Redis
     */
    'bigdata' => 'Big Data',
    'administration' => 'DB Server Administration',
];

$layout = new Layout();