var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var paintBrush = canvas.getContext("2d");
paintBrush.strokeRect(300, 300, 200, 100);

paintBrush.arc(400, 400, 30, 0, Math.PI * 2, false);
paintBrush.strokeStyle = "purple";
paintBrush.stroke();

console.log(arc);
