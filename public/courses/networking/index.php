<?php

require_once('../layout.php');

Course::$title = 'Networking Course';

Course::$description = '';

Course::$backgroundUrl = "https://www.toptal.com/designers/subtlepatterns/uploads/fancy-cushion.png";

Course::$chapters = [
    'home' => 'Introduction',
    'basics' => 'The Basics',
    'addressing' => 'IP addressing',
    'ethernet' => 'Ethernet Technology',
    'vlan' => 'Virtual networks (VLAN)',
    'ipv6' => 'IPv6',
    'routing' => 'Routing',
    'tcp' => 'TCP/UDP',
    'dns' => 'Domain Name Services',
    'firewall' => 'Firewalls',
    'vpn' => 'Virtual Private Networks (VPN)',
    'application' => 'Application protocols',
    'wireless' => 'Wireless networking',
    'optics' => 'Last Mile, Optics'
];

$layout = new Layout();