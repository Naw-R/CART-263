/**
 * TASK 6
 * --------------------------------
 * INSTRUCTIONS : 
 * AGAIN USE VARIABLES/CONSTS WHENEVER POSSIBLE
 * Make a text object to hold the string "test" , fill white , textSize 28 , center of screen
 * Write a for loop to repeat 10 times: start at 0 and finish at 9
 * In the for loop body: output the counter variable (usually labelled i) as text. As well, use the counter variable to offset the x position of the text (i.e. if i ==1 then x position ==20, if i ==2 x position ==40 etc..)
 * Make another for loop to repeat 15 times: start at 15 end at 1
 * In this loop: output the counter variable as text . As well, use the counter variable to offset the y position of the text (i.e. if i ==1 then y position ==20, if i ==2 y position ==40 etc..)
 * BONUS: USING THE SAME FOR LOOP AS JUST BEFORE: can you make the the greatest number start at the top and the smallest output at the bottom?
 * --------------------------------
 * CREATED BY : Rowan Nasser
 */
"use strict";

let textObject = {
    content: "test",
    x: 0,
    y: 0,
    size: 28,
    color: 255 // White
};

function setup() {
    createCanvas(windowWidth, windowHeight);
    textAlign(CENTER, CENTER);
}

function draw() {
    background(0); // Black background

    // Draw "test" in the center of the screen
    fill(textObject.color);
    textSize(textObject.size);
    text(textObject.content, width / 2, height / 2);

    textAlign(LEFT, TOP);

    // First for loop: counter from 0 to 9 (x offset)
    textSize(12); // Smaller text size for numbers
    for (let i = 0; i < 10; i++) {
        text(i, i * 20, 30); // Offset x position by 20 * i
    }
    
    // Second for loop: counter from 15 to 1 (y offset)
    for (let i = 15; i >= 1; i--) {
        text(i, 20, i * 30); // Offset y position by 20 * i
    }
}
