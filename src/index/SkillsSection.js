const skillList = [
    {
        title: "Programming Fundamentals",
        small: "(How to code)",
        url: "courses/programming",
        description: "Knowing how computers work, how to code and how to solve algorithmic and computational problems.",
        topics: [
            "Computer science basics",
            "Numeric representations",
            "Memory allocation",
            "Graph Theory",
            "Data structures",
            "Algorithms",
            "C/C++",
            "OOP",
        ]
    },
    {
        title: "Math Fundamentals",
        small: "(Analytical thinking)",
        url: "courses/math",
        description: "The basic mathematical knowledge for computer science and analysis. The pillar of analytical thinking.",
        topics: [
            "Mathematical prerequisites",
            "Mathematical analysis",
            "Number theory",
            "Linear algebra",
            "Probability theory",
            "Statistics",
        ]
    },
    {
        title: "Databases",
        small: "(All the data)",
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
            "Database server administration"
        ]
    },
    {
        title: "PHP",
        small: "(80% of all websites)",
        url: "courses/php",
        description: "Backend scripting with PHP, the language that carries over 70% of all the websites.",
        topics: [
            "The language",
            "Persistence",
            "REST API",
            "Scraping and Crawling",
            "Symfony framework",
            "Nette framework",
            "PHP security",
        ]
    },
    {
        title: "JavaScript",
        small: "(The Web)",
        url: "courses/js",
        description: "Frontend scripting with JS, understanding web technologies and the web browser.",
        topics: [
            "GUI/UX design",
            "HTML/CSS",
            "JavaScript",
            "React",
            "Next.js",
            "Node.js",
            "Web browsers",
            "FrontEnd security",
            "WebSockets",
            "TypeScript"
        ]
    },
    {
        title: "Basic Networking",
        small: "(The Internet)",
        url: "courses/networking",
        description: "Basic computer networking and communication.",
        topics: [
            "IP address",
            "Networking models",
            "Ethernet",
            "Virtual networks",
            "Switching and Routing",
            "TCP and UDP",
            "DNS",
            "Network security, Firewalls",
            "VPN",
            "Application protocols (HTTP, SSH, FTP, ...)",
            "Wireless"
        ]
    },
    {
        title: "Software Engineering",
        url: "courses/java",
        small: "(Design large architectures)",
        description: "Actual software engineering with Java technology.",
        topics: [
            "Software design and analysis",
            "UML",
            "Git",
            "Java Enterprise",
            "Design patterns",
            "Best practices",
            "Software architectures",
            "Testing",
            "Microservices",
            "Spring, Hibernate",
            "System integration"
        ]
    },
    {
        title: "Modern backend - .NET, Golang, Kotlin, Scala",
        small: "(Modern Backend)",
        url: "courses/dotnet",
        description: "Modern programming with alternatives to Java.",
        topics: [
            ".NET C#",
            "LINQ",
            "Entity framework",
            "Asynchronous programming",
            "Golang",
            "Kotlin",
            "Scala"
        ]
    },
    {
        title: "DevOps",
        small: "(The infrastructure)",
        url: "courses/devops",
        description: "Administrating the web infrastructure, deployment and pipelines.",
        topics: [
            "Shell scripting",
            "Hosting",
            "Web Server administration",
            "Cloud",
            "Virtualization",
            "Docker",
            "Kubernetes",
            "IaaS",
            "Load balancing",
            "CI/CD",
            "Jenkins"
        ]
    },
    {
        title: "Combinatorial Optimization",
        small: "(Solving the largest problems)",
        url: "courses/cop",
        description: "Solving massive instances using heuristics and approximation.",
        topics: [
            "P vs. NP",
            "Heuristics",
            "Simulated annealing",
            "Simulated evolution",
            "Genetic algorithms"
        ]
    },
    {
        title: "Distributed Systems",
        small: "(High performance computing)",
        url: "courses/distributed",
        description: "Solving massive instances using high performance parallel and distributed computing systems.",
        topics: [
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
        title: "Web Analysis",
        small: "(Analyze the internet)",
        url: "courses/analysis",
        description: "Information retrieval, Similarity search, Multimedia, Web mining, Python, Social network analysis, Recommender systems, Web semantics",
        topics: [
            "Python",
            "Information retrieval",
            "Text mining",
            "NLP",
            "Similarity search",
            "Multimedia",
            "Web mining",
            "Social network analysis",
            "Recommender systems",
            "Data stream mining",
            "Web semantics",
            "Knowledge graphs"
        ]
    },
    {
        title: "Web Security",
        small: "(Protect the Web)",
        url: "courses/security",
        description: "Understanding the steps behind the most frequent attacks on web, being able to replicate them and to defend against them.",
        topics: [
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
        title: "Cloud Services",
        small: "(Moving to Clouds)",
        description: "Deploying and working with cloud services such as AWS and Azure.",
        topics: [
            "AWS security",
            "AWS identity",
            "IAM",
            "AWS lambda",
            "AWS databases",
            "Azure analytics",
            "Azure computing services",
            "Azure storage",
            "Azure networking"
        ]
    },
]

const SignUpButton = () => {
    return (
        <button className='glowing-btn'><span className='glowing-txt'>Become Web Engineer</span></button>
    )
}

const SkillsSection = () => {
    const skillsHTML = [];
    let i = 0;
    skillList.forEach(skill => {
        const link = skill.hasOwnProperty("url") ? <a href={skill.url}>Learn more</a> : null;
        if (i % 2 === 0) {
            skillsHTML.push(<div className="timeline-empty"></div>)
            skillsHTML.push(<div className="timeline-middle">
                <div className="timeline-circle"></div>
            </div>)
            skillsHTML.push(
                <div className="timeline-component timeline-content">
                    <h3>{skill.title}</h3>
                    <p>{skill.description}</p>
                    <ul>
                        {skill.topics.map(skill => {
                            return <li>{skill}</li>
                        })}
                    </ul>
                    {link}
                </div>
            )
        } else {
            skillsHTML.push(
                <div className="timeline-component timeline-content">
                    <h3>{skill.title}</h3>
                    <p>{skill.description}</p>
                    <ul>
                        {skill.topics.map(skill => {
                            return <li>{skill}</li>
                        })}
                    </ul>
                    {link}
                </div>
            )
            skillsHTML.push(<div className="timeline-middle">
                <div className="timeline-circle"></div>
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
