/**
 * TASK 2
 * --------------------------------
 * INSTRUCTIONS : 
 * REDO Task 1 but create and use a custom function with the following signature:
 * function drawEllipse(x,y,w,h,r,g,b){ //body}
 * Then: in the setup() make three calls to drawEllipse(...)
 * --------------------------------
 * CREATED BY : Rowan Nasser
 */

"use strict";

// Not useful
// let x, y, w, h;
// let r, g, b;



function setup() {
    console.log("go")
    createCanvas(innerWidth, innerHeight);
    background(0);

    //drawEllipse(x = 80, y = 80, w = 50, h = 50, r = 255, g = 0, b = 0);
    //drawEllipse(x = 150, y = 150, w = 100, h = 100, r = 255, g = 144, b = 144);
    //drawEllipse(x = 250, y = 250, w = 150, h = 150, r = 255, g = 177, b = 177);

    drawEllipse(80, 80, 50, 50, 255, 0, 0);
    drawEllipse(150, 150, 100, 100, 255, 144, 144);
    drawEllipse(250, 250, 150, 150, 255, 177, 177);
}

function draw() {
    //Empty
}


function drawEllipse(x, y, w, h, r, g, b) {
    push();
    // No line around the shape
    noStroke();
    //Draw ellipse according to variables
    fill(r, g, b);
    ellipse(x, y, w, h);
    pop();
}