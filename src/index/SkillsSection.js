const skillList = [
    {
        title: "Programming Fundamentals",
        small: "(How to code)",
        description: "Number representation, Memory allocation, Data structures, Algorithms, C/C++"
    },
    {
        title: "Math Fundamentals",
        small: "(Analytical thinking)",
        description: "Mathematical analysis, Number theory, Linear algebra, Probability theory and Statistics"
    },
    {
        title: "Databases",
        small: "(All the data)",
        description: "SQL, DB design, Optimization, Indexes, Transactions, Scalability, NoSQL, Teradata, BigData, Graph databases"
    },
    {
        title: "PHP",
        small: "(80% of all websites)",
        description: "Backend scripting, Persistence, REST API, Scraping/Crawling, Symfony, Nette, BE Security"
    },
    {
        title: "JavaScript",
        small: "(The Web)",
        description: "Frontend scripting, Node.js, React, Next.js, Web browsers, FE Security, WebSockets, TypeScript"
    },
    {
        title: "Software Engineering",
        url: "courses/java",
        small: "(Design large architectures)",
        description: "Java Enterprise, JVM, Programming principles, Design patterns, UML, Architectures, Testing, Microservices, Spring, System integration"
    },
    {
        title: ".NET, Go, Kotlin, Scala",
        small: "(Modern Backend)",
        description: "Modern programming, alternatives to Java, C#, LINQ, Entity Framework, MVC, Asynchronous programming"
    },
    {
        title: "DevOps",
        small: "(The infrastructure)",
        description: "Hosting, Cloud, Virtualization, Docker, Kubernetes, IaaS, Load Balancing, CI/CD, Jenkins"
    },
    {
        title: "Combinatorial Optimization",
        small: "(Solving the largest problems)",
        description: "P vs. NP, Solving problems using heuristics, Simulated annealing, Simulated evolution, Genetic algorithms"
    },
    {
        title: "Distributed Systems",
        small: "(High performance computing)",
        description: "Parallel programming, Parallel computing, Distributed computing and algorithms"
    },
    {
        title: "Web Analysis",
        small: "(Analyze the internet)",
        description: "Information retrieval, Similarity search, Multimedia, Web mining, Python, Social network analysis, Recommender systems, Web semantics"
    },
    {
        title: "Web Security",
        small: "(Protect the Web)",
        description: "Encryption, Server-side, SQL injection, File upload, Client-side, XSS, Clickjacking, CSRF, JWT, OAuth, HTTP"
    },
    {
        title: "Cloud Services",
        small: "(Moving to Clouds)",
        description: "AWS security, AWS identity, IAM, AWS Lambda, databases, Azure analytics and computing services, Azure storage and networking"
    },
]

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
                    <p className="small">{skill.small}</p>
                    <p>{skill.description}</p>
                    {link}
                </div>
            )
        } else {
            skillsHTML.push(
                <div className="timeline-component timeline-content">
                    <h3>{skill.title}</h3>
                    <p className="small">{skill.small}</p>
                    <p>{skill.description}</p>
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
        </section>
    );
}

export default SkillsSection;