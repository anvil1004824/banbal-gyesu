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
  j1 = 0;
  j2 = 0;
}

function draw() {
  background(220);
  if (x + 50 >= a - 50) {
    collide = true;
  }
  circle(x, y, 100);
  circle(a, y, 100);
  if (collide) {
    x = x + dxp;
    a = a + dap;
    text(`${dxp}m/s\n${j1}kg`, x - 15, y);
    text(`${dap}m/s\n${j2}kg`, a - 15, y);
  } else {
    x = x + dx;
    a = a + da;
    text(`${dx}m/s\n${j1}kg`, x - 15, y);
    text(`${da}m/s\n${j2}kg`, a - 15, y);
  }
}
