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

// var xValue = Math.random() * canvas.width;
// var yValue = Math.random() * canvas.height;
// var xVelocity = (Math.random() - 0.5) * 16;
// var yVelocity = (Math.random() - 0.5) * 16;
// var radius = 40;

function Circle(xValue, yValue, xVelocity, yVelocity, radius) {
  this.xValue = xValue;
  this.yValue = yValue;
  this.xVelocity = xVelocity;
  this.yVelocity = yVelocity;
  this.radius = radius;

  this.draw = function () {
    paintBrush.beginPath();
    paintBrush.arc(
      this.xValue,
      this.yValue,
      this.radius,
      0,
      Math.PI * 2,
      false
    );
    paintBrush.strokeStyle = "purple";
    paintBrush.stroke();
  };

  this.update = function () {
    if (
      this.xValue + this.radius > canvas.width ||
      this.xValue - this.radius < 0
    ) {
      this.xVelocity = -this.xVelocity;
    }

    if (
      this.yValue + this.radius > canvas.height ||
      this.yValue - this.radius < 0
    ) {
      this.yVelocity = -this.yVelocity;
    }

    this.yValue += this.yVelocity;
    this.xValue += this.xVelocity;

    this.draw();
  };
}

var circleObject = new Circle(200, 200, 3, 3, 30);

function animate() {
  requestAnimationFrame(animate);
  circleObject.update();
}

animate();
