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

paintBrush.arc(200, 200, 40, 0, Math.PI * 2, false);
paintBrush.strokeStyle = "purple";
paintBrush.stroke();

for (var current = 0; current < 1000; current++) {
  paintBrush.beginPath();
  randomX = Math.random() * window.innerWidth;
  randomY = Math.random() * window.innerHeight;
  paintBrush.arc(randomX, randomY, 40, 0, Math.PI * 2, false);
  paintBrush.strokeStyle = "purple";
  paintBrush.stroke();
}

function animate() {
  requestAnimationFrame(animate);
  console.log("working");
}

animate();
