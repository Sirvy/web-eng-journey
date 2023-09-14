<?php

require_once('../layout.php');

Course::$title = 'Security Course';

Course::$description = '';

Course::$backgroundUrl = "https://www.toptal.com/designers/subtlepatterns/uploads/fancy-cushion.png";

Course::$chapters = [
    'home' => 'Introduction',
    /*
     * Symmetric X Asymmetric
     * Blocks - AES
     * Hashes
     * RSA
     * Common key generation
     */
    'encryption' => 'Encryption Basics',
    /*
     * RSA, factorization, public key, El Gammal
     * Randomness, key generation, distribution
     * Public key infrastructure, X.509, Certificate tree, digital signing, CA
     */
    'public_key' => 'Public Key',
    /*
     * SQLi
     * Authentication
     * Directory traversal
     * Command injection
     * Business Logic Vulnerabilities
     * Information Disclosure
     * Access Control
     * File Upload
     * Race conditions
     * Server-side Request Forgery SSRF
     * XXE injection
     */
    'server' => 'Server-side attacks',
    /*
     * XSS
     * CSRF
     * CORS
     * Clickjacking
     * DOM-based
     * WebSockets
     */
    'client' => 'Client-side attacks',
    /*
     * Deserialization
     * GraphQL API
     * Server-side template injection
     * Web cache poisoning
     * HTTP host header attack
     * HTTP request smnuggling
     * OAuth authentication
     * JWT attacks
     * Prototype pollution
     */
    'advanced' => 'Advanced attacks',
    /*
     * Full Path Disclosure
     * Remote execution
     * Session Hijacking
     * Session Fixation
     * Response Splitting
     * Denial of Service
     * XML Bomb
     * Randomness
     * Insecure Direct Object Reference
     */
    'php' => 'PHP attacks',
    /*
     * Password hashing and storing
     * Password rehashing
     * Forgot your password
     * Sensitive data storing
     * Secure communication
     * Server settings
     * PHP settings
     * HTTP headers
     */
    'tips' => 'Web Security Tips'
];

$layout = new Layout();