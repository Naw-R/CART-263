/**
 * TASK 5
 * --------------------------------
 * INSTRUCTIONS : 
 * TASK 5:
 * USE VARIABLES/CONSTS WHENEVER POSSIBLE
 * FOR THIS EXERCISE DO NOT USE A FOR LOOP - ONLY WHILE LOOP(S)
 * Create a variable that will hold a number i.e. counter, set its value to 0
 * Create an orange square (width, size and position do not matter)
 * Use an object to hold the square's properties (w,h,x and y and color)
 * Create a function called displaySquare() and in the body of the function implement the code to render the orange square. Call this function in the draw()
 * Whenever the mouse is clicked inside the orange square increment the counter variable by 1
 * Whenever the mouse is over the orange square: highlight the square to be lighter orange
 * Create a helper function to check if the mouse is inside the square (i.e. checkCollisionWithSquare()), and have it return true if it is and false otherwise. USE this function for the mouse click/over functionalities.
 * Create an ellipse and draw it with its center at the center of the screen
 * make a variable called radius to hold the size of the ellipse
 * Set the color of the ellipse to be white
 * Create a variable called ellipseAlpha to hold the alpha value of the ellipse.
 * Practise showing the ellipse at different sizes - change the radius (always with the same x and y)
 * USE A SINGLE WHILE LOOP in the draw() to draw the same number of ellipse as that of the counter (if the counter is 1 - 1 ellipse, if the counter is 2: 2 ellipse etc...)
 * Also in the while loop: each new circle should be slightly larger and make the alpha value larger (start the alpha small)
 * Do not draw anything if the counter is greater than 10 or less than 1
 * BONUS: make the logic for drawing a single circle into a custom function (i.e. drawCircle(x,y,radius,alpha))
 * BONUS II : make another square (red) that when clicked will decrement the counter by 1 ... AND - when hovered over will be lighter red ... (make custom functions and objects as required)
 * BONUS III: INSTEAD OF USING A WHILE LOOP FOR THE ELLIPSE(S) - USE A FOR LOOP...
 * --------------------------------
 * CREATED BY : Rowan Nasser
 */
"use strict";

let counter = 0;

// Orange square properties
let orangeSquare = {
    x: 50,
    y: 50,
    w: 50,
    h: 50,
    color: { r: 255, g: 165, b: 0 } // Orange color
};

// Red square properties
let redSquare = {
    x: 120,
    y: 50,
    w: 50,
    h: 50,
    color: { r: 255, g: 0, b: 0 } // Red color
};

// Ellipse properties
let radius = 100; // Increased starting radius
let ellipseAlpha = 100; // Initial alpha value

function setup() {
    console.log("go");
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(0); // Make background black

    // Display the orange and red squares
    displaySquare(orangeSquare);
    displaySquare(redSquare);

    // Check counter limits and draw ellipses
    if (counter >= 1 && counter <= 10) {
        let i = 0;
        let currentRadius = radius; // Start with the base radius

        for (let i = 0; i < counter; i++) {
            drawCircle(width / 2, height / 2, currentRadius, ellipseAlpha);
            currentRadius += 50; // Increase radius for each circle
            ellipseAlpha += 5;         // Increase alpha for each circle
        }

        // Reset  to its initial value for the next frame
        ellipseAlpha = 100;
    }
}

// Function to display a square (handles hover and click highlighting)
function displaySquare(square) {
    push();
    if (checkCollisionWithSquare(square)) {
        fill(square.color.r + 50, square.color.g + 50, square.color.b + 50); // Lighter color on hover
    } else {
        fill(square.color.r, square.color.g, square.color.b);
    }
    noStroke();
    rect(square.x, square.y, square.w, square.h);
    pop();
}

// Function to check if the mouse is inside a square
function checkCollisionWithSquare(square) {
    return mouseX >= square.x &&
        mouseX <= square.x + square.w &&
        mouseY >= square.y &&
        mouseY <= square.y + square.h;
}

// Function to draw a single circle
function drawCircle(x, y, radius, alpha) {
    push();
    noStroke();
    fill(255, 255, 255, alpha); // White with alpha transparency
    ellipse(x, y, radius);
    pop();
}

function mousePressed() {
    if (checkCollisionWithSquare(orangeSquare)) {
        counter++;
    }
    if (checkCollisionWithSquare(redSquare)) {
        counter--;
    }
    counter = constrain(counter, 0, 10); // Ensure counter stays between 0 and 10
}

