const cvs = document.getElementById("cvs");
const ctx = cvs.getContext("2d");
const pi = Math.PI;
let colours = ["red", "white", "blue", "yellow", "pink", "purple", "orange"];

function draw() {
    canvas();
    line(cvs.width / 2, cvs.height, cvs.height * 0.05, pi / 2);
}

function line(sx, sy, l, a) {
    if (l < 17) {
        return;
    }
    ctx.strokeStyle = colours[Math.floor(Math.random() * colours.length)];
    ctx.beginPath();
    ctx.moveTo(sx, sy);
    ctx.lineTo(sx + l * Math.cos(a), sy - l * Math.sin(a));
    ctx.lineTo(sx + l * Math.cos(a) + l * Math.cos(a + pi / 4), sy - l * Math.sin(a) - l * Math.sin(a + pi / 4));
    ctx.moveTo(sx + l * Math.cos(a), sy - l * Math.sin(a));
    ctx.lineTo(sx + l * Math.cos(a) - l * Math.cos(a + pi / 4), sy - l * Math.sin(a) - l * Math.sin(a + pi / 4));
    // ctx.moveTo(sx, sy - l);
    // ctx.lineTo(sx + l * 0.9, sy - l - l * 0.6);
    ctx.lineWidth = 3.6;
    ctx.stroke();

    line(sx + l * Math.cos(a) - l * Math.cos(a + pi / 4), sy - l * Math.sin(a) - l * Math.sin(a + pi / 4), l * 0.95, a - pi / 10);
    line(sx + l * Math.cos(a) + l * Math.cos(a + pi / 4), sy - l * Math.sin(a) - l * Math.sin(a + pi / 4), l * 0.95, a + pi / 10);
}

function canvas() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cvs.width, cvs.height);
}

setInterval(draw, 1000 / 60);