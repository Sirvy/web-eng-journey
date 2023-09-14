<?php

require_once('../layout.php');

Course::$title = 'Distributed Systems Course';

Course::$description = '';

Course::$backgroundUrl = "https://www.toptal.com/designers/subtlepatterns/uploads/fancy-cushion.png";

Course::$chapters = [
    'home' => 'Introduction',
    /*
     * Processes, Threads
     * Time-dependent errors, Critical area
     */
    'multithreading' => 'Multithreading',
    /*
     * Synchronization problems
     * Deadlock, Livelock, Starvation
     * Thread planning
     */
    'thread_synchronization' => 'Thread Synchronization',
    /*
     * Computing model
     * Metrics
     * OpenMP
     * Searching, Sorting
     */
    'computing' => 'Parallel Computing',
    'distributed_systems' => 'Distributed Systems',
    /*
     * Topologies
     * Embeddings
     */
    'interconnection' => 'Interconnection',
    /*
     * MPI
     * Collective communication algorithms
     * Distributed reduction
     * Distributed IO
     * Distributed algorithms
     */
    'distributed_computing' => 'Distributed Computing'
];

$layout = new Layout();