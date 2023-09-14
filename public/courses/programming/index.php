<?php

require_once('../layout.php');

Course::$title = 'Programming Course';

Course::$description = '';

Course::$backgroundUrl = "https://www.toptal.com/designers/subtlepatterns/uploads/fancy-cushion.png";

Course::$chapters = [
    'home' => 'Introduction',
    /*
     * How do computers work, computation, turing machine
     * CPU, Memory, instructions
     * Algorithm, programs
     * Binary, Big/Little endian
     */
    'basics' => 'The Basics',
    /*
     * Number representation
     * Floating point
     * Signed numbers
     * bits
     */
    'numbers' => 'Numbers',
    /*
     * main
     * variables, data types
     * input/output
     * expressions, conditions
     * loops
     * functions, procedures
     */
    'cbasic' => 'C Basics',
    'carray' => 'C Array/String',
    /*
     * function parameters passed by pointer
     * pointer to pointer
     * structures
     */
    'pointers' => 'Pointers',
    'memory' => 'Memory Allocation',
    /*
     * Array, Queue, Stack, Linked List
     * Graph theory
     * Binary heaps, Extendable array, Binomial heaps, Trees
     * Hashing, Disjoint-Set (Union-find)
     */
    'datastructures' => 'Data Structures',
    /*
     * Recursion
     * Divide and conquer
     * Backtracking
     * Searching and Sorting
     * Greedy algorithms
     * Dynamic programming
     * Minimum spanning trees
     * Shortest path
     */
    'algorithms' => 'Algorithms',
    /*
     * C vs. C++
     * OOP
     * Operator Overloading
     * Object copying
     * Smart pointers, STL, Templates, Generics
     * Exceptions
     * ADT, Dynamic binding, Casting, RTTI
     */
    'cpp' => 'C++',
    /*
     * Observable behavior
     * Allocation, padding, placement new
     * move and emplace semantics
     * Small Buffer Optimization
     * Copy and Swap idiom
     * Empty base optimization
     * Exception security
     */
    'cpp2' => 'C++ optimization',
    /*
     * Random tasks
     */
    'problems' => 'Problem solving'
];

$layout = new Layout();