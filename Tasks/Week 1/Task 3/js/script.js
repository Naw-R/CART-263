/**
 * TASK 3
 * --------------------------------
 * INSTRUCTIONS : 
 * Create three rectangles (or squares)
 * The color, size, initial positions of the three rectangles do not matter: but USE VARS/CONSTS whenever possible
 * Then: update the position of the 1st rectangle whenever the mouse is clicked on the canvas
 * And: update the position of the 2nd rectangle when spacebar is pressed
 * Finally: update the position of the 3rd rectangle in the draw() (each frame). Only change the y position in one direction. Also: handle the bottom canvas bounds: if the rectangle is at the bottom, set it to the top of the canvas
 * BONUS: every time the mouse moves on the canvas change the color of the 3rd rectangle with a new random color
 * For ALL parts: DO NOT USE OBJECTS or ARRAYS
 * You can use IF STATEMENTS
 * --------------------------------
 * CREATED BY : Rowan Nasser
 */

"use strict";

let x1 = 100, y1 = 100, w1 = 50, h1 = 50; // First rectangle
let x2 = 150, y2 = 150, w2 = 50, h2 = 50; // Second rectangle
let x3 = 200, y3 = 0, w3 = 50, h3 = 50;   // Third rectangle
let r3 = 255, g3 = 144, b3 = 144;         // Color of the third rectangle

function setup() {
    console.log("go");
    createCanvas(innerWidth, innerHeight);
}

function draw() {
    background(0);

    // Draw the first rectangle
    fill(255, 0, 0);
    rect(x1, y1, w1, h1);

    // Draw the second rectangle
    fill(255, 177, 177);
    rect(x2, y2, w2, h2);

    // Draw the third rectangle and move it downward
    fill(r3, g3, b3);
    rect(x3, y3, w3, h3);

    // Update the y position of the third rectangle
    y3++;
    if (y3 > height) {
        y3 = -h3; // Reset to the top if it goes off the bottom
    }
}

function mousePressed() {
    // Update position of the first rectangle when the mouse is clicked
    x1 = x1 + 10;
    y1 = y1 + 10;
}

function keyPressed() {
    if (key === " ") { // Check if the spacebar is pressed
        // Update position of the second rectangle
        x2 = x2 + 10;
        y2 = y3 + 10;
    }
}

function mouseMoved() {
    // Change the color of the third rectangle when the mouse moves
    r3 = random(255);
    g3 = random(255);
    b3 = random(255);
}
