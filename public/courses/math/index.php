<?php

require_once('../layout.php');

Course::$title = 'Math Course';

Course::$description = '';

Course::$backgroundUrl = "https://www.toptal.com/designers/subtlepatterns/uploads/fancy-cushion.png";

Course::$chapters = [
    /*
     * Motivation, usage in programming
     */
    'home' => 'Introduction',
    /*
     * High-school math
     * Math logic, Set theory
     * Relations, Binary relations, Equivalence
     * Polynomials
     * Logarithms
     * Basic algebra
     * Functions
     * Sequences
     * Combinatorics
     * Vector algebra
     * Trigonometry, Planimetrics
     * Analytic geometry
     */
    'basics' => 'The basics',
    /*
     * Functions
     * Polynomials
     * Limits
     * Asymptotics
     * Derivatives
     * Integral
     */
    'analysis' => 'Analysis',
    /*
     * Partial derivative, gradient
     * Multivariable integral
     */
    'analysis2' => 'Advanced analysis',
    /*
     * Numbers, relations
     * Recurrence, Master theorem
     * GCD, LCM
     * EEA
     * Modular arithmetics
     * Euler function
     * Chinese remainder theorem
     * Machine numbers
     * Group theory, generators
     */
    'number' => 'Number Theory',
    /*
     * Vector space, Basis, Dimensions, ...
     * Matrices
     * Linear variety
     * Linear transformations
     * Determinant
     * Eigenvalues, Eigenvectors
     */
    'lin' => 'Linear Algebra',
    /*
     * Randomness, Random number generators
     * Combinatorics
     * Probability Theory
     * Random variables
     * Random vectors
     * Limit Theorems
     */
    'probability' => 'Probability',
    /*
     * Parameter point estimators
     * Interval estimation of parameters
     * Hypotheses testing
     * Linear regression
     */
    'statistics' => 'Statistics',
    /*
     * Entropy and coding
     * Information theory
     * Markov chains
     * Queuing systems
     * Poisson process
     * General random processes
     */
    'statistics2' => 'Advanced statistics',
];

$layout = new Layout();