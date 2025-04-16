import {Link} from "react-router-dom"

const skillList = [
    {
        title: "Programming Fundamentals and Problem Solving",
        small: "Learn to code. Learn to think.",
        url: "courses/programming",
        description: "Understand the machine and use it to solve problems. Learn to think algorithmically.",
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
        description: "The basic mathematical knowledge for computer science and analysis. The pillar of analytical thinking.",
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
        description: "Understanding the web and the technologies behind it.",
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
            "Application protocols (HTTP, SSH, FTP, ...)",
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
        description: "Frontend development with HTML, CSS and JavaScript. GUI/UX design.",
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
        description: "Backend development with PHP, Java and JavaScript. REST API.",
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
        description: "Database systems for storing and efficient working with all kinds of data.",
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
        description: "Real-world software engineering with Java technology.",
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
        description: "Understanding the steps behind the most frequent attacks on web, being able to replicate them and to defend against them.",
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
        description: "Master modern infrastructure management, automated deployments, and scalable cloud operations across AWS and Azure platforms.",
        topics: [
            "Linux and Shell scripting",
            "Hosting",
                // Web Server administration
            "Containerization and Orchestration",
                // Docker, Kubernetes
            "CI/CD and Automation",
                // Jenkins
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
        description: "Solving massive instances using heuristics, high performance parallel and distributed computing systems.",
        topics: [
            "P vs. NP",
            "Heuristics",
            "Simulated annealing",
            "Simulated evolution",
            "Genetic algorithms",
            "Parallel programming",
            "OpenMP",
            "Combinatorial searching",
            "Parallel algorithms",
            "Parallel computing",
            "MPI",
            "Combinatorial topologies",
            "Distributed computing",
            "Distributed algorithms"
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
