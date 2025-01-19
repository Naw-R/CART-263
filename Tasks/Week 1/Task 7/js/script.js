/**
 * TASK 7
 * --------------------------------
 * INSTRUCTIONS : 
 * Use a nested for loop to draw a grid of evenly spaced circles .
 * Make the grid work for a circle size that is a multiple of 5 (up to 100) - just by changing one variable.
 * Make ALL circles the SAME random color - only switches on page reload
 * Have this random color CHANGE for ALL CIRCLES when the user presses on space bar
 * On mouse click change CIRCLES the to SQUARES if they were CIRCLES .. AND to CIRCLES if they were SQUARES
 * --------------------------------
 * CREATED BY : Rowan Nasser
 */

"use strict";

let circleSize = 50; // Circle size (must be a multiple of 5, can go up to 100)
let randomColor;
let isCircle = true; // Toggles between circle and square

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();

    // Generate a random color for all shapes
    randomColor = color(random(255), random(255), random(255));
}

function draw() {
    background(0); // Black background
    fill(randomColor); // Set the random color for shapes

    // Calculate rows and columns based on circle size
    let cols = width / circleSize;
    let rows = height / circleSize;

    noStroke();
    
    // draw the grid
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            let x = i * circleSize + circleSize / 2; // Center x position
            let y = j * circleSize + circleSize / 2; // Center y position

            // Draw shapes (circle or square)
            if (isCircle) {
                ellipse(x, y, circleSize);
            } else {
                rectMode(CENTER);
                rect(x, y, circleSize-2, circleSize-2);
            }
        }
    }
}

// Spacebar to change the random color of all shapes
function keyPressed() {
    if (key === " ") {
        randomColor = color(random(255), random(255), random(255)); // Generate a new random color
    }
}

// Mouse click to toggle between circles and squares
function mousePressed() {
    isCircle = !isCircle; // Toggle the shape type
}
