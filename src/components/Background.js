import {useEffect} from "react";

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
                this.v = this.s * this.s;
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

        [...Array(100)].forEach(e => loop());
        //setInterval(loop, 100);
    }, []);
    return (
        <canvas id={"fireflies"}></canvas>
    )
}

export default Background;