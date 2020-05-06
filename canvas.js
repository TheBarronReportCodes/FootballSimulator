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

var xValue = 200;
velocity = 4;
function animate() {
  requestAnimationFrame(animate);

  paintBrush.beginPath();
  paintBrush.arc(xValue, 200, 40, 0, Math.PI * 2, false);
  paintBrush.strokeStyle = "purple";
  paintBrush.stroke();

  if (xValue > canvas.width) {
    velocity = -velocity;
  }

  xValue += velocity;
}

animate();
