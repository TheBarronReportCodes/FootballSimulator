var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var shapes = canvas.getContext("2d");
shapes.fillRect(300, 300, 200, 100);

console.log(canvas);
