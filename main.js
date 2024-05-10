let cvs = document.getElementById("myCanvas");
let ctx = cvs.getContext("2d");

let w = 40;
let h = 40;
let i = 0;
let j = 0;

let x = 1; 
let y = 0;



function draw() {
  ctx.clearRect(0, 0, 300, 150);
  i += x;
  j += y;

  if (i > 300) i = 0;
  if (j > 150) j = 0;
  if (i < 0) i = 300;
  if (j < 0) j = 150;

  ctx.fillStyle = "red";
  ctx.fillRect(i, j, w, h);

}

addEventListener("keydown", function(event) {
    console.log(event.keyCode);
    if (event.keyCode == 40) {
        x = 0;
        y = 1;
    }

    if (event.keyCode == 37) {
        x = -1;
        y = 0;
    }
    if (event.keyCode == 38) {
        x = 0;
        y = -1;
    }
    if (event.keyCode == 39) {
        x = 1
        y = 0;
    }


})



















function loop() {
  draw();

  requestAnimationFrame(loop);
}
loop();
