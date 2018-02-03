var c = document.getElementById("slate");
var toggleButton = document.getElementById("toggle");
var clearButton = document.getElementById("clear");
var toggle = true;

var ctx = c.getContext("2d");

var checkerboard = function(){
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0,0,600,600);
    
    ctx.fillStyle = "#000000";
    
    var xcor = 0;
    var ycor = 0;

    for(x = 0; x < 600; x += 20){
	for(y = 0; y < 600; y += 20){
	    //console.log(x);
	    //console.log(y);
	    if((x + y) % 40 == 0){
		ctx.fillRect(xcor + x,ycor + y,20,20);
	    }
	}
    }
}


var drawCircle = function(x, y){
    console.log(x);
    console.log(y);

    ctx.beginPath();

    ctx.arc(x-10, y-10, 10, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();
}

var drawSquare = function(x, y){
    console.log(x);
    console.log(y);

    ctx.fillRect(x-20, y-20, 20, 20);    
}

var draw = function(e){
    ctx.fillStyle = "#000000";
    if (toggle){
	drawSquare(e.x, e.y);
    } else {
	drawCircle(e.x, e.y);
    }
}

var toggleFunc = function(){
    toggle = !(toggle);
}

var clear = function(){
    ctx.clearRect(0, 0, 600, 600);
}

c.addEventListener("click", draw);
toggleButton.addEventListener("click", toggleFunc);
clearButton.addEventListener("click", clear);
