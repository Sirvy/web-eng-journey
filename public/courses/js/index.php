<?php

require_once('../layout.php');

Course::$title = 'JavaScript Course';

Course::$description = '';

Course::$backgroundUrl = "https://www.toptal.com/designers/subtlepatterns/uploads/fancy-cushion.png";

Course::$chapters = [
    /*
     * The frontend
     */
    'home' => 'Introduction',
    /*
     * Interaction design
     * User interface design, GUI, UI design patterns
     * Usability testing
     * Form usability
     * Accessibility
     * Responsive design
     */
    'gui' => 'GUI design',
    'html' => 'HTML',
    'css' => 'CSS',
    /*
     * JS background
     * ECMAScript
     */
    'js' => 'JavaScript',
    /*
     * Basic syntax and constructs
     * Closures
     * Callbacks
     */
    'basics' => 'The Basics',
    /*
     * DOM manipulation
     */
    'dom' => 'The DOM',
    /*
     * Promise
     * Async, Await
     * FetchAPI
     */
    'asynchronous' => 'Asynchronous JS',
    /*
     * JS runtime
     * Event Loop
     * Web Workers
     */
    'runtime' => 'Runtime',
    /*
     * Node.js event loop
     * Express.js
     * MongoDB
     */
    'nodejs' => 'Node.js',
    /*
     * Philosophy
     * JSX
     * Rendering, Interactivity
     * Effects, Hooks
     * Server-side rendering
     * Next.js
     */
    'react' => 'React',
    /*
     * Structure, components
     * Security
     * XHR
     */
    'browser' => 'The Browser',
    /*
     * Authentication header
     * TLS
     * JWT
     * OAuth 2.0
     * OpenID
     */
    'security' => 'Security',
    /*
     * HTTP, Polling, Pushing, SSE
     * WebSockets
     */
    'realtime' => 'Realtime Web',
    'http2' => 'HTTP/2',
    'typescript' => 'TypeScript',
    /*
     * Games in general, history
     * Game engines
     * Assets
     * Components
     * Patterns
     * Audio
     * Space
     * Physics
     * Graphics
     * AI
     * Multiplayer
     * Game design
     */
    'game' => 'Game development',

    /*
     * Algorithmic Visuals
     **
    'creative' => 'Creative coding',
];

$layout = new Layout();
