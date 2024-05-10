let cvs = document.getElementById("myCanvas");
let leftBtn = document.getElementById("left");
let rightBtn = document.getElementById("right");
let upBtn = document.getElementById("up");
let downBtn = document.getElementById("down");

let ctx = cvs.getContext("2d");

let maxWidth = innerWidth;
let maxHeight = innerHeight * 0.8;
cvs.width = maxWidth;
cvs.height = maxHeight;


let w = 40;
let h = 40;
let i = 0;
let j = 0;

let x = 1; 
let y = 0;



function draw() {
  ctx.clearRect(0, 0, maxWidth, maxHeight);
  i += x;
  j += y;

  if (i > maxWidth) i = 0;
  if (j > maxHeight) j = 0;
  if (i < 0) i = maxWidth;
  if (j < 0) j = maxHeight;

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

leftBtn.addEventListener("click", function() {
    x = -1;
    y = 0;
})
rightBtn.addEventListener("click", function() {
    x = 1
    y = 0;
})
downBtn.addEventListener("click", function() {
    x = 0;
    y = 1;
})
upBtn.addEventListener("click", function() {
    x = 0;
    y = -1;
})




















function loop() {
  draw();

  requestAnimationFrame(loop);
}
loop();
