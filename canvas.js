var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var paintBrush = canvas.getContext("2d");
paintBrush.fillStyle = "red";
paintBrush.fillRect(20, 20, 80, 80);
paintBrush.fillStyle = "green";
paintBrush.fillRect(420, 100, 80, 80);
paintBrush.fillStyle = "blue";
paintBrush.fillRect(620, 300, 80, 80);

var xValue = Math.random() * canvas.innerWidth;
var yValue = Math.random() * canvas.innerHeight;
var xVelocity = 6;
var yVelocity = 3;
var radius = 40;
function animate() {
  requestAnimationFrame(animate);

  paintBrush.beginPath();
  paintBrush.arc(xValue, yValue, radius, 0, Math.PI * 2, false);
  paintBrush.strokeStyle = "purple";
  paintBrush.stroke();

  if (xValue + radius > canvas.width || xValue - radius < 0) {
    xVelocity = -xVelocity;
  }

  if (yValue + radius > canvas.height || yValue - radius < 0) {
    yVelocity = -yVelocity;
  }

  yValue += yVelocity;
  xValue += xVelocity;
}

animate();
