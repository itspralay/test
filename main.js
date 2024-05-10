let cvs = document.getElementById("myCanvas");
let ctx = cvs.getContext("2d");




let i = 0;
let j=0;


function draw() {
    ctx.clearRect(0, 0, 300, 150)
    i += 10;
    if (i > 300) {
        i = 0;
    }
    j += 10;
    if (j> 150){
        j = 0;
    }

    ctx.fillStyle = "red";
    ctx.fillRect(i, 50, 50, 50);

    ctx.fillStyle = "green"
    ctx.fillRect(i, j, 50, 50);

    ctx.fillStyle = "blue"
    ctx.beginPath();
    ctx.arc(100, 100, 25, 0, Math.PI*2, false);
    ctx.fill()
    ctx.closePath();
}


function loop() {
    draw();


  requestAnimationFrame(loop);  
}
loop();

