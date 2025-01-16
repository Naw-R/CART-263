/**
 * TASK 4
 * --------------------------------
 * INSTRUCTIONS : 
 * AGAIN USE VARIABLES/CONSTS WHENEVER POSSIBLE
 * Create three rectangles: each one is the height of the canvas and 1/3 of the width of the canvas
 * Position the first rectangle in the first third, the second in the second third and the third at the end of the canvas (three columns)
 * Each rectangle should be a different blue color
 * Then, IF/WHEN the mouse is over the 1st rectangle change the colour of the first rectangle to white
 * Apply the same mouse behaviour to the other two rectangles
 * Also: Implement the following; when/if the mouse is NOT over a given rectangle make sure that those rectangles go back to their original color
 * For ALL parts: DO NOT USE ARRAYS
 * You may use OBJECTS - but only for the color of the rectangles
 * --------------------------------
 * CREATED BY : Rowan Nasser
 */

"use strict";

let rect1X, rect1Y, rect1W, rect1H;
let rect2X, rect2Y, rect2W, rect2H;
let rect3X, rect3Y, rect3W, rect3H;

let rect1Color, rect2Color, rect3Color;


function setup() {
    console.log("go")

    createCanvas(innerWidth, innerHeight);

    // Define positions and sizes for each rectangle
    rect1W = width / 3; rect1H = height; rect1X = 0; rect1Y = 0;
    rect2W = width / 3; rect2H = height; rect2X = width / 3; rect2Y = 0;
    rect3W = width / 3; rect3H = height; rect3X = (2 * width) / 3; rect3Y = 0;

    // Initial colors for rectangles (different shades of blue)
    rect1Color = { r: 0, g: 0, b: 255 };
    rect2Color = { r: 0, g: 100, b: 255 };
    rect3Color = { r: 0, g: 150, b: 255 };


}

function draw() {
    background(0);
    noStroke();

    // Check if the mouse is over the first rectangle
    if (mouseX >= rect1X && mouseX < rect1X + rect1W) {
        fill(255); // White
    } else {
        fill(rect1Color.r, rect1Color.g, rect1Color.b);
    }
    rect(rect1X, rect1Y, rect1W, rect1H);

    // Check if the mouse is over the second rectangle
    if (mouseX >= rect2X && mouseX < rect2X + rect2W) {
        fill(255); // White
    } else {
        fill(rect2Color.r, rect2Color.g, rect2Color.b);
    }
    rect(rect2X, rect2Y, rect2W, rect2H);

    // Check if the mouse is over the third rectangle
    if (mouseX >= rect3X && mouseX < rect3X + rect3W) {
        fill(255); // White
    } else {
        fill(rect3Color.r, rect3Color.g, rect3Color.b);
    }
    rect(rect3X, rect3Y, rect3W, rect3H);
}