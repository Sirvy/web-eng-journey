<?php

require_once('../layout.php');

Course::$title = 'DevOps Course';

Course::$description = '';

Course::$backgroundUrl = "https://www.toptal.com/designers/subtlepatterns/uploads/fancy-cushion.png";

Course::$chapters = [
    'home' => 'Introduction',
    'os' => 'Operating Systems',
    'unix' => 'Unix Basics',
    'scripting' => 'Shell Scripting',
    'hosting' => 'Hosting',
    'virtualization' => 'Virtualization',
    'cloud' => 'Cloud',
    /*
     * OpenStack
     * Load Balancing
     */
    'iaas' => 'IaaS',
    'network' => 'Network virtualization',
    'containers' => 'Containers',
    'orchestration' => 'Orchestration',
    'storage' => 'Storage',
    /*
     * Jenkins
     * TeamCity
     * Github Actions
     */
    'cicd' => 'CI/CD'
];

$layout = new Layout();