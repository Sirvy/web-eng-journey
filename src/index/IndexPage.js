import SkillsSection from "./SkillsSection";
import {useEffect} from "react";
import '../scss/index.scss';

const Header = () => {
    return (
        <header>
            <div className="container px-4 text-center">
                <h1 className="center">My journey to</h1>
                <h1 className="center highlight">Web Engineering</h1>
                <p className="lead">Tracking all the skills and knowledge I gain on my way to my dream.</p>
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
                        integration, communication protocols, infrastructure, securing performance and availability,
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


const Background = () => {
    useEffect(() => {
        const init = (elemid) => {
            let canvas = document.getElementById(elemid),
                c = canvas.getContext("2d"),
                w = (canvas.width = window.innerWidth),
                h = (canvas.height = window.innerHeight);
            c.fillStyle = "rgba(30,30,30,1)";
            c.fillRect(0, 0, w, h);
            return c;
        }

        let c = init("fireflies");
        let w = window.innerWidth;
        let h = window.innerHeight;

        class Firefly {
            constructor() {
                let w = window.innerWidth;
                let h = window.innerHeight;
                this.x = Math.random() * w;
                this.y = Math.random() * h;
                this.s = Math.random();
                this.ang = Math.random() * 2 * Math.PI;
                this.v = this.s * this.s / 4;
            }

            move() {
                this.x += this.v * Math.cos(this.ang);
                this.y += this.v * Math.sin(this.ang);
                this.ang += Math.random() * 20 * Math.PI / 180 - 10 * Math.PI / 180;
            }

            show() {
                c.beginPath();
                c.arc(this.x, this.y, this.s, 0, 2 * Math.PI);
                c.fillStyle = "#fddba3";
                c.fill();
            }
        }

        let f = [];

        const draw = () => {
            if (f.length < 250) {
                for (let j = 0; j < 10; j++) {
                    f.push(new Firefly());
                }
            }
            //animation
            for (let i = 0; i < f.length; i++) {
                f[i].move();
                f[i].show();
                if (f[i].x < 0 || f[i].x > w || f[i].y < 0 || f[i].y > h) {
                    f.splice(i, 1);
                }
            }
        }

        window.requestAnimFrame = callback => {
            return (
                window.requestAnimationFrame ||
                function (callback) {
                    window.setTimeout(callback);
                }
            );
        }

        function loop() {
            window.requestAnimFrame(loop);
            c.clearRect(0, 0, w, h);
            draw();
        }

        loop();
        setInterval(loop, 100);
    }, []);
    return (
        <canvas id={"fireflies"}></canvas>
    )
}

function IndexPage() {
    useEffect(() => {
        document.title = 'My Journey to Web Engineering';
    }, []);

    return (
        <>
            <Background/>
            <Header/>
            <TheThreePillars/>
            <SkillsSection/>
        </>
    );
}

export default IndexPage;
