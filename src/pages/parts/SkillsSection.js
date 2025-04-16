import {Link} from "react-router-dom"

const skillList = [
    {
        title: "Programming Fundamentals",
        small: "Learn to code. Learn to think.",
        url: "courses/programming",
        description: "Understand how computers work. Learn to code, think algorithmically, and develop systematic problem-solving skills.",
        topics: [
            "How Computers Work",
                // Computer science basics
                // Memory, binary, numeric representations, architecture
                // Automata, Turing machines, finite state machines, Computation
            "How to code",
                // Programming Languages
                // Program flows, loops, conditions
                // C/C++
                // Debugging
            "Data Structures",
            "Algorithms",
                // Searching, sorting, recursion
                // Complexity, Big O notation
                // Divide and conquer, dynamic programming
            "Graph Theory",
            "OOP",
            "Computational Thinking",
                // Problem solving
                // Problem decomposition and abstraction
        ]
    },

    {
        title: "Mathematics for Engineers",
        small: "The Engineer's Mind. Math, Logic and Models.",
        url: "courses/math",
        description: "Speak the language of logic, probability and statistics. Build strong analytical thinking skills.",
        topics: [
            "Mathematical Prerequisites",
                // The basics
                // Logic
                // Set theory
                // Functions, logarithms, relations
                // Mathematical induction
            "Discrete Mathematics and Number Theory",
                // The secret weapon in algorithms
                // Combinatorics
                // Graph theory
                // Number theory
                // Cryptography
            "Mathematical Analysis",
                // For Precision and limitations
                // Limits, continuity, derivatives
                // Integrals
            "Linear Algebra",
                // For graphics, ML and complex models
                // Matrices, determinants, eigenvalues
                // Vector spaces
            "Probability Theory",
                // Think in patterns, risks and uncertainty
                // Random variables, distributions
                // Expectation, variance
            "Statistics",
                // For data analysis and real world applications
                // {title: "Statistics", url: "math/statistics/statistics.md"},
        ]
    },

    {
        title: "The Internet",
        small: "Understand the Web",
        url: "courses/internet",
        description: "Understand the web and the technologies behind the internet — the network that changed the world.",
        topics: [
            "The Internet",
                // History, structure, protocols
                // TCP/IP, OSI model
                // TCP, UDP
                // IP address, Domains, URLs, Routing, CDNs
                // DNS, HTTP, HTTPS
                // MIME types, headers, cookies, caching
            "Web technologies",
                // HTML, CSS, JavaScript
                // Web servers, web browsers
            "Web servers",
                // Apache, Nginx
                // Web server administration
            "Web browsers",
                // Chrome, Firefox
                // JS, V8 engine, Rendering, DOM
                // Web APIs
                // WebAssembly
                // Web browser security
            "HTTP",
                // HTTP/1.1, HTTP/2, HTTP/3
                // REST API
                // WebSockets
            "Network security, Firewalls",
            "VPN",
            "Application protocols",
                // HTTP, HTTPS
                // FTP, SFTP
                // SSH...
            "Web3",
                // Blockchain
                // Bitcoin
                // Ethereum
                // Smart contracts
                // Ethereum Virtual Machine
                // Wake framework
                // Proof of Stake
        ]
    },

    {
        title: "Frontend Development",
        small: "The visible part that feels great.",
        url: "courses/frontend",
        description: "The visible part of the web — the aesthetics, the interfaces, the experience. Learn how websites and apps communicate with users through design, interaction, and the browser itself.",
        topics: [
            "GUI/UX design",
                // Accessibility
                // Usability
                // User experience
            "HTML/CSS",
                // Flexbox, Grid, Responsive design
                // CSS frameworks
            "JavaScript",
            "React",
                // Hooks, ...
                // Router, ...
                // APIs, mockups
            "FrontEnd security",
            "FrontEnd performance",
            "WebSockets",
            "TypeScript",
            "Creative coding",
            "Game development",
        ]
    },

    {
        title: "Backend Development",
        small: "The invisible part that works.",
        url: "courses/backend",
        description: "The invisible part that makes everything work — handling logic, data, security, and communication behind the scenes.",
        topics: [
            "Backend development",
                // The basics
                // REST API
                // Microservices
                // SOA, DDD
                // Integration and communication
                // Persistence
                // Authentication and authorization
                    // JWT, OAuth2, OpenID
                // Asynchronous programming
                // MVC, cookies, tokens
            "PHP",
                // The language
                // Symfony framework
                // Nette framework
                // REST API
                // PHP security
                // PHP performance
            "Node.js",
                // The language
                // Express.js
                // REST API
                // Node.js security
                // Node.js performance
            "Java",
                // The language
                // Java Enterprise
                // Spring MVC
                // Spring Boot
                // Hibernate
                // REST API
                // Java security
                // Java performance
            "Kotlin",
                // The language
            ".NET C#",
                // LINQ
                // Entity framework
                // Asynchronous programming
        ]
    },

    {
        title: "Databases",
        small: "All the data",
        url: "courses/databases",
        description: "Learn how to design and use database systems for storing, managing, and accessing all kinds of data — efficiently and at scale.",
        topics: [
            "Database design",
            "SQL",
            "Optimizations",
            "Indexes",
            "Transactions",
            "Scalability",
            "NoSQL",
            "Teradata",
            "BigData",
            "Database models",
            "Database server administration",
        ]
    },

    {
        title: "Software Engineering",
        small: "Design large architectures",
        url: "courses/software-engineering",
        description: "The skill of designing large, real-world systems that are reliable, maintainable, testable, and built to last.",
        topics: [
            "Software design and analysis",
                // UML
            "Versioning",
                // Git
            "Architectural patterns",
                // MVC, MVVM, MVP
            "Design patterns",
                // Singleton, Factory, Observer...
            "Clean Code",
                // Best practices
                // SOLID
                // Code reviews
                // Code quality tools
                // Code quality metrics
                // Code quality standards
            "Software architectures",
                // Microservices
                // SOA, DDD
                // Integration and communication
                // Event-driven architecture
                // Message brokers, RabbitMQ, Kafka
                // Load balancing
                // Performance,
                // Sharding and partitioning,
                // Caching, CDN,
                // Streaming, Messaging, Pub/Sub,
                // Edge computing,
            "Testing",
                // Unit testing
                // Integration testing
                // System testing
                // Performance testing
                // Load testing
                // Security testing
                // Test-driven development
                // Mocking
                // End-to-end testing
                // Regression testing
            "System integration",
            "Project management",
                // Changelogs, Documentation
                // Configuration management
                // Agile, Scrum
        ]
    },

    {
        title: "Security and Hacking",
        small: "Protect the Web",
        url: "courses/security",
        description: "Understand how web attacks happen, how to defend against them, and how to secure systems and data by thinking like an attacker.",
        topics: [
            "Web security principles",
            "Secure coding practices",
            "OWASP",
            "Encryption",
            "Server-side attacks",
            "SQL injection",
            "File uploads",
            "Client-side attacks",
            "XSS",
            "Clickjacking",
            "CSRF",
            "JWT",
            "OAuth",
            "HTTP/HTTPS",
            "Certificates, CAs"
        ]
    }, 

    
    {
        title: "Cloud and DevOps",
        small: "The Infrastructure and Automation",
        url: "courses/devops",
        description: "Master the tools and practices behind cloud infrastructure, automation, and scalable deployments across AWS and Azure.",
        topics: [
            "Linux and Shell scripting",
            "Hosting",
                // Web Server administration
            "Containerization and Orchestration",
                // Docker, Kubernetes
            "CI/CD and Automation",
                // Jenkins
                // GitHub Actions
            "Infrastructure as code",
            "Logging and monitoring",
                // ELK stack
                // Prometheus, Grafana
            "Cloud Computing",
            "AWS Core Services",
                // AWS security
                // AWS identity
                // IAM
                // AWS lambda
                // AWS databases
                // EC2, S3, RDS, DynamoDB, CloudFront, CloudWatch
            "Azure Core Services",
                // Azure analytics
                // Azure computing services
                // Azure storage
                // Azure networking
        ]
    },
    
    {
        title: "Web Analysis",
        small: "Make Systems Smart",
        url: "courses/analysis",
        description: "Learn how to extract, analyze, and enrich web data. Build intelligent systems with recommender engines, social network insights, and modern natural language tools.",
        topics: [
            "Python",
            "Web Data Intelligence",
                // Web scraping
                // Web crawling
                // Information retrieval
                // Text mining
                // NLP
                // Similarity search
                // Multimedia
            "Social network analysis",
            "Recommender systems",
            "Data stream mining",
            "Knowledge graphs and Web Semantics"
                // RDF, OWL, SPARQL
        ]
    },

    {
        title: "Distributed Systems",
        small: "High performance computing",
        url: "courses/distributed",
        description: "Solve massive instances using heuristics, high performance parallel and distributed computing systems.",
        topics: [
            "Heuristics and optimization",
                // P vs. NP
                // Simulated annealing
                // Simulated evolution
                // Genetic algorithms
            "Concurrency",
                // Multithreading
                // Multiprocessing
                // Concurrency
                // Forking
                // Synchronization
                // Task parallelism
                // Data parallelism
            "OpenMP",
            "Parallel algorithms",
            "MPI",
            "Combinatorial topologies",
                // Network topologies
                // Routing strategy
                // Fault tolerance
            "Distributed computing",
            "Distributed algorithms",
            "Distributed systems",
                // CAP theorem
        ]
    },

    {
        title: "The Real World Engineer",
        small: "Final Chapter",
        url: "courses/final",
        description: "You have walked your path. Now walk into battle.",
        topics: [
            "Real world projects",
            "Mock Interviews",
            "Case studies",
                // Real world problems
                // Real world solutions
                // Netflix architecture
                // Twitter architecture
                // Analysis of large systems problems from practice
            "Portfolio-ready builds",
            "Monetize your SaaS",
            "Utilize AI as an Engineer",
                // ChatGPT, Copilot
                // AI tools
        ]
    }
]

const SignUpButton = () => {
    return (
        <button className='glowing-btn'><span className='glowing-txt'>Become Web Engineer</span></button>
    )
    // return (<div>
    //     <button className='glowing-btn'><span className='glowing-txt'>Your Badge: Web Engineer</span></button>
    //     <p>
    //         This isn't a certificate.<br/>
    //         It's a mindset. A skillset. A career. A future-proof weapon.
    //     </p>
    // </div>)
}

const SkillsSection = () => {
    const skillsHTML = [];
    let i = 0;
    skillList.forEach(skill => {
        //const link = skill.hasOwnProperty("url") ? <a href={skill.url}>Learn more</a> : null;
        const link = null;
        if (i % 2 === 0) {
            skillsHTML.push(<div className="timeline-empty"></div>)
            skillsHTML.push(<div className="timeline-middle">
                <div className="timeline-circle">{i + 1}</div>
            </div>)
            skillsHTML.push(
                <div className="timeline-component timeline-content">
                    <h3 className="highlight">{skill.title}</h3>
                    <p>{skill.description}</p>
                    <ul>
                        {skill.topics.map(s => {
                            if (typeof s === 'string') {
                                return <li>{s}</li>
                            } else {
                                return <li><Link to="/test">{s.title}</Link></li>
                            }
                        })}
                    </ul>
                    {link}
                </div>
            )
        } else {
            skillsHTML.push(
                <div className="timeline-component timeline-content">
                    <h3 className="highlight">{skill.title}</h3>
                    <p>{skill.description}</p>
                    <ul>
                        {skill.topics.map(s => {
                            if (typeof s === 'string') {
                                return <li>{s}</li>
                            } else {
                                return <li><Link to="/test">{s.title}</Link></li>
                            }
                        })}
                    </ul>
                    {link}
                </div>
            )
            skillsHTML.push(<div className="timeline-middle">
                <div className="timeline-circle">{i + 1}</div>
            </div>)
            skillsHTML.push(<div className="timeline-empty"></div>)
        }
        i++;
    })

    return (
        <section className="design-section">
            <h2 className="center">The Fundamental Skills</h2>
            <div className="timeline">
                {skillsHTML}
            </div>
            <SignUpButton/>
        </section>
    );
}

export default SkillsSection;
