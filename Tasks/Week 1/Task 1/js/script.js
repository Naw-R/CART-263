/**
 * TASK 1
 * --------------------------------
 * INSTRUCTIONS : 
 * - Create three ellipses
 * Each ellipse must have a different color, size and position
 * Only use variables for the x, y, width, height and color (r,g,b) for each ellipse.
 * REUSE THE SAME variables for each ellipse
 * DO NOT USE: objects, arrays, loops, animation, custom self created functions or the random function
 * --------------------------------
 * CREATED BY : Rowan Nasser
 */

"use strict";

let x, y, w, h;
let r, g, b;



function setup() {
    console.log("go")
    createCanvas(innerWidth, innerHeight);

}

function draw() {
    background(0);

    push();
    // No line around the shape
    noStroke();

    // Ellipse 1
    x = 50;
    y = 50;
    h = 100;
    w = 100;
    r = 255;
    g = 0;
    b = 0;
    // Make it red (RGB)
    fill(r, g, b);
    // Draw a 100x100 circle
    ellipse(h, w, x, y);

    // Ellipse 2
    x = 80;
    y = 80;
    h = 170;
    w = 170;
    r = 255;
    g = 144;
    b = 144;
    //Make it pink
    fill(r, g, b);
    ellipse(h, w, x, y);

    // Ellipse 3
    x = 100;
    y = 100;
    h = 250;
    w = 250;
    r = 255;
    g = 177;
    b = 177;
    //Make it pinker
    fill(255, 177, 177);
    ellipse(250, 250, 100, 100);


    pop();

}