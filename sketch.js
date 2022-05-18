function setup() {
  createCanvas(800, 400);
  collide = false;
  x = 100;
  y = 200;
  a = 700;
  dx = 0;
  da = 0;
  dxp = 0;
  dap = 0;
}

function draw() {
  background(220);
  if (x + 50 >= a - 50) {
    collide = true;
  }
  if (collide) {
    x = x + dxp;
    a = a + dap;
  } else {
    x = x + dx;
    a = a + da;
  }
  circle(x, y, 100);
  circle(a, y, 100);
}
