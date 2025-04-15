import {useEffect} from "react";
import '../scss/index.scss';
import Background from "../components/Background";
import SkillsSection from "./parts/SkillsSection";
import Navigation from "./parts/Navigation";

const Header = () => {
    return (
        <header>
            <div className="container px-4 text-center">
                <h1 className="center">The journey to</h1>
                <h1 className="center highlight">Web Engineering</h1>
                <p className="lead">Learn to think like an architect. Build like an engineer. Solve problems like a scientist.</p>
            </div>
        </header>
    );
}

const TheThreePillars = () => {
    return (
        <section className="pillar-section container">
            <h2 className="center">The Three Pillars</h2>
            <div className="d-flex justify-content-around">
                <div className="pillar-component">
                    <span>Software Engineering</span>
                    <p>The ability to analyze, design and write testable, maintainable and readable code for large
                        architecture of complex systems.</p>
                    <div className="corners top"></div>
                    <div className="corners bottom"></div>
                </div>
                <div className="pillar-component">
                    <span>FullStack Development</span>
                    <p>Understanding wide range of technologies, from FE to BE, databases, optimization, HTTP, system
                        integration, communication protocols, infrastructure, performance and availability,
                        clouds, DevOps, security.</p>
                    <div className="corners top"></div>
                    <div className="corners bottom"></div>
                </div>
                <div className="pillar-component">
                    <span>Web and Data Analysis</span>
                    <p>Expertise in data and information retrieval, extraction and interpretation. Approximate
                        searching, natural language processing, social network analysis, multimedia analysis and
                        knowledge description.</p>
                    <div className="corners top"></div>
                    <div className="corners bottom"></div>
                </div>
            </div>
        </section>
    );
}


function HomePage() {
    useEffect(() => {
        document.title = 'My Journey to Web Engineering';
    }, []);

    return (
        <>
            <Background/>
            <Header/>
            {/* <Navigation/> */}
            <TheThreePillars/>
            <SkillsSection/>
        </>
    );
}

export default HomePage;
