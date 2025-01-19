/**
 * TASK 8 - BONUS
 * --------------------------------
 * INSTRUCTIONS : 
 * Use a nested for loop to draw a grid of evenly spaced circles .
 * Make the grid work for a circle size that is a multiple of 5 (up to 100) - just by changing one variable.
 * Make ALL circles the SAME random color - only switches on page reload
 * Have this random color CHANGE for ALL CIRCLES when the user presses on space bar
 * On mouse click change CIRCLES the to SQUARES if they were CIRCLES .. AND to CIRCLES if they were SQUARES
 * 
 * BONUS: ON LOAD: make every even row CIRCLES and every odd row SQUARES. 
 * Switch circles/squares on mouse click (odd row SQUARES and even row CIRCLES )..and vice versa
 * --------------------------------
 * CREATED BY : Rowan Nasser
 */

"use strict";

let circleSize = 50; // Circle size
let randomColor;
let isFlipped = false; // Toggles the shape pattern for rows (even/odd flip)

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

    // Nested for loop to draw the grid
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            let x = i * circleSize + circleSize / 2; // Center x position
            let y = j * circleSize + circleSize / 2; // Center y position

            // Determine shape for even/odd rows
            let isEvenRow = j % 2 === 0;
            let drawCircle = isEvenRow ? !isFlipped : isFlipped;

            if (drawCircle) {
                ellipse(x, y, circleSize); // Draw circle
            } else {
                rectMode(CENTER);
                rect(x, y, circleSize-2, circleSize-2); // Draw square
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

// Mouse click to flip the even/odd row pattern
function mousePressed() {
    isFlipped = !isFlipped; // Toggle the row flip state
}
