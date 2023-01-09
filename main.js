canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

var nasa = ["A.jpg" , "B.jpg" , "C.jpg" , "D.jpg"];
var number = Math.floor(Math.random() * 4)

//Define the width & height of the rover image.
rover_width = 100;
rover_height = 90;
background_image = nasa[number];

rover_image = "rover.png";

rover_x = 30;
rover_y = 30;

//Create "add()" function
function add() {
    //defining a variable with a new image
    v1 = new Image();
    // setting a function, onloading this variable
    v1.onload = Ninjago;
    // load image
    v1.src = background_image;


    //defining a variable with a new image
    v2 = new Image();
    // setting a function, onloading this variable
    v2.onload = Ninja;
    // load image
    v2.src = rover_image;
}


//Create "uploadBackground()" function.
function Ninjago() {
    //Draw image of background
    ctx.drawImage(v1, 0, 0, canvas.width, canvas.height);
}

//Create "uploadrover()" function.
function Ninja() {
    //Draw image of rover
    ctx.drawImage(v2, rover_x, rover_y, rover_width, rover_height);
}


window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    //Write code if keypressed is up. ASCII value of "left" arrow is 38.
    if (keyPressed == "37") {
        left();
        console.log("left arrow key is pressed");
    }

    if (keyPressed == "38") {
        up();
        console.log("up arrow key is pressed");
    }

    if (keyPressed == "39") {
        right();
        console.log("right arrow key is pressed");
    }

    if (keyPressed == "40") {
        down();
        console.log("down arrow key is pressed");
    }
    //Write code if keypressed is down. ASCII value of "up" arrow is 40.





    //Additional Activity
    //Write the code for left and right arrow pressed. 
}

function up() {
    if (rover_y >= 0) {
        rover_y = rover_y - 10;
        console.log("When up arrow is pressed, X= " + rover_x + ", y=" + rover_y);
        Ninja();
        Ninjago();
    }
}
function down() {
    if (rover_y <= 500) {
        rover_y = rover_y + 10;
        console.log("When down arrow is pressed, X= " + rover_x + ", y=" + rover_y);
        Ninja();
        Ninjago();
    }
}
function right() {
    if (rover_x <= 700) {
        rover_x = rover_x + 10;
        console.log("When right arrow is pressed, X= " + rover_x + ", y=" + rover_y);
        Ninja();
        Ninjago();
    }
}
function left() {
    if (rover_x >= 0) {
        rover_x = rover_x - 10;
        console.log("When left arrow is pressed, X= " + rover_x + ", y=" + rover_y);
        Ninja();
        Ninjago();
    }
}



