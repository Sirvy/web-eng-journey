<?php

require_once('../layout.php');

Course::$title = 'Web Analysis Course';

Course::$description = '';

Course::$backgroundUrl = "https://www.toptal.com/designers/subtlepatterns/uploads/fancy-cushion.png";

Course::$chapters = [
    'home' => 'Introduction',
    'python' => 'Python Baiscs',
    'webspace' => 'Web Space',
    /*
     * Boolean
     * Vector
     */
    'inforetrieval' => 'Information Retrieval',
    'link' => 'Link Analysis',
    'seo' => 'SEO',
    /*
     * Platforms
     * Retrieval
     * Bag-Of-Features
     * Similarity Search
     * Global image descriptors
     * Multimedia feature extraction
     * Multimedia indexing
     * Approximate similarity search
     */
    'multimedia' => 'Multimedia Content Analysis',
    /*
     * Crawling
     * Text Mining
     * NLP
     * PageRank, Graph embdeddings
     * Web Usage mining
     * Data streams mining
     */
    'webmining' => 'Web Content Analysis',
    'recommender' => 'Recommender Systems',
    'socialnetwork' => 'Social Network Analysis',
    /*
     * RDF, SPARQL
     * Linked Data
     * Web annotations, Metadata
     * Quality Assurance
     * Knowledge graphs
     */
    'semantics' => 'Web Semantics'
];

$layout = new Layout();