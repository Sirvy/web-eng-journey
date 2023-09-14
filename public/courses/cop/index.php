<?php

require_once('../layout.php');

Course::$title = 'Combinatorial Optimization Course';

Course::$description = '';

Course::$backgroundUrl = "https://www.toptal.com/designers/subtlepatterns/uploads/fancy-cushion.png";

Course::$chapters = [
    'home' => 'Introduction',
    /*
     * Automata, grammars
     * Turing machine, Turing complete
     * P vs. NP
     */
    'computation' => 'Computation',
    /*
     * NPH
     * NPC, NPI, NP, P, coNP
     * NPO, APX, PTAS, FPTAS, PO
     * PSPACE, EXPTIME, EXPSPACE
     */
    'classes' => 'Problem classes',
    'state' => 'State Space',
    'heuristics' => 'Heuristics',
    'annealing' => 'Simulated Annealing',
    'evolution' => 'Simulated Evolution',
    'global_methods' => 'Global Methods'
];

$layout = new Layout();