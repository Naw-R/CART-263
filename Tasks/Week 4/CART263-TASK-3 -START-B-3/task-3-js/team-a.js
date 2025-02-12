setup_A();
/** THEME: CALM  */
function setup_A() {
  console.log("in a");
  /**************************************************** */
  //get the buttons
  activateButtons_A(`#TEAM_A`, "ani_canvA");

  /**************************************************** */
  /* NO NEED TO MODIFY THIS FUNCTION :) */
  /*** helper function to activate buttons */
  /**************************************************** */
  function activateButtons_A(team, teamCanvas) {
    let teamButtons = document.querySelectorAll(`${team} .team-nav p`);
    //2:
    console.log(teamButtons);
    for (let button of teamButtons) {
      button.addEventListener("click", buttonCallBack);

      function buttonCallBack(e) {
        switch (this.textContent) {
          case "1": {
            console.log("A");
            //reset the canvases
            resetCanvases(`${team} .aniCanvas`);
            //reset buttons
            resetButtons(teamButtons, this);
            //activate canvas A
            document.getElementById(`${teamCanvas}_A`).style.display = "block";
            //run first
            aniA(document.getElementById(`${teamCanvas}_A`));

            break;
          }
          case "2": {
            console.log("B");
            resetCanvases(`${team} .aniCanvas`);
            //reset buttons
            resetButtons(teamButtons, this);
            //activate canvas B
            document.getElementById(`${teamCanvas}_B`).style.display = "block";
            //run second
            aniB(document.getElementById(`${teamCanvas}_B`));
            break;
          }
          case "3": {
            console.log("C");
            //reset the canvases
            resetCanvases(`${team} .aniCanvas`);
            //reset buttons
            resetButtons(teamButtons, this);
            //activate canvas C
            document.getElementById(`${teamCanvas}_C`).style.display = "block";
            //run third
            aniC(document.getElementById(`${teamCanvas}_C`));
            break;
          }
          case "4": {
            console.log("D");
            break;
          }
          case "5": {
            console.log("E");
            break;
          }
          case "6": {
            console.log("F");
            break;
          }
        }
      }
    } //for
  }
   /**************** ANI A ************************************ */
  /** PUT ALL YOUR CODE FOR ANIMATION A INSIDE  HERE */
  /**************** ANI A ************************************ */
  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:)
   * 1: use the function window.requestAnimationFrame() to create an animation
   * i.e. a reoccuring pattern - you can use simple shapes and colors, images etc...
   * 2: create a way to start and stop the animation using a
   * custom made button and add a mouse click event listener to either start/stop the animation
   *
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/

  function aniA(parentCanvas) {
    console.log("in A");

    let canvas = document.querySelector("#ani_canvA_A");
    canvas.innerHTML = ""; // Clear previous animation

    // Create grid of squares (like Team H but with color-changing effects)
    let gridSize = 13;
    let boxSize = 23;
    let colors = ["red", "blue", "green", "yellow", "purple", "orange"];
    let animationModes = ["colorShift", "rowWave", "columnWave"];
    let currentMode = 0;
    let grid = [];

    console.log("Creating grid...");
    for (let i = 0; i < gridSize; i++) {
      grid[i] = [];
      for (let j = 0; j < gridSize; j++) {
        let box = document.createElement("div");
        box.classList.add("TEAM_A_rect");
        box.style.width = `${boxSize}px`;
        box.style.height = `${boxSize}px`;
        box.style.position = "absolute";
        box.style.top = `${i * boxSize + 20}px`;
        box.style.left = `${j * boxSize + 20}px`;
        box.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]; // Assign random color
        canvas.appendChild(box);
        grid[i][j] = box;
      }
    }

    function animate() {
      console.log("Animating mode:", animationModes[currentMode]);
      if (animationModes[currentMode] === "colorShift") {
        for (let i = 0; i < gridSize; i++) {
          for (let j = 0; j < gridSize; j++) {
            let box = grid[i][j];
            let newColorIndex = Math.floor(Math.random() * colors.length);
            box.style.backgroundColor = colors[newColorIndex];
          }
        }
      } else if (animationModes[currentMode] === "rowWave") {
        for (let i = 0; i < gridSize; i++) {
          for (let j = 0; j < gridSize; j++) {
            let box = grid[i][j];
            box.style.backgroundColor = colors[(i + Math.floor(Date.now() / 200)) % colors.length];
          }
        }
      } else if (animationModes[currentMode] === "columnWave") {
        for (let i = 0; i < gridSize; i++) {
          for (let j = 0; j < gridSize; j++) {
            let box = grid[i][j];
            box.style.backgroundColor = colors[(j + Math.floor(Date.now() / 200)) % colors.length];
          }
        }
      }
      requestAnimationFrame(animate);
    }

    // Start animation
    requestAnimationFrame(animate);

    // Add button
    let button = document.createElement("div");
    button.classList.add("TEAM_A_Button");
    button.textContent = "GO";
    button.style.bottom = "10px";
    button.style.left = "50%";
    button.style.transform = "translateX(-50%)";
    canvas.appendChild(button);

    button.addEventListener("click", function () {
      currentMode = (currentMode + 1) % animationModes.length; // Cycle through modes
      console.log("Switched to animation mode:", animationModes[currentMode]);
    });
  }
  /**************** ANI B ************************************ */
  /** PUT ALL YOUR CODE FOR ANIMATION B INSIDE  HERE */
  /**************** ANI B ************************************ */
  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:)
   * 1: use the function window.setInterval() to create a pattern that changes over time
   * i.e. fading out/ in, growing bigger/smaller, appear/disappear, add, remove...
   *  - you can use simple shapes and colors, images etc...
   * 2: add in a / some mouse click event listener(s) somewhere to make the sketch interactive

   *
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/
  function aniB(parentCanvas) {
    console.log("in B");

    // Get the bounding box of the parent container
    let boundingBoxParent = parentCanvas.getBoundingClientRect();
    console.log(boundingBoxParent);

    // Create a grid of cells with modified colors and animation behavior
    for (let i = 20; i < boundingBoxParent.height; i += 40) {
      for (let j = 20; j < boundingBoxParent.width; j += 40) {
        let rect = document.createElement("div");
        rect.classList.add("TEAM_A_h_cell");
        parentCanvas.appendChild(rect);
        rect.style.position = "absolute";
        rect.style.left = `${j}px`;
        rect.style.top = `${i}px`;
        rect.style.width = "30px";
        rect.style.height = "30px";
        rect.style.opacity = 1;
        rect.style.border = "1px solid white";

        // Assign random colors
        let colors = ["cyan", "magenta", "yellow", "lime", "blue", "red"];
        rect.style.background = colors[Math.floor(Math.random() * colors.length)];
        rect.setAttribute("isactive", "false");

        // Add click event listener to each div
        rect.addEventListener("click", clickEventHandlerOnRec);
      }
    }

    /****** Callback for clicking on a rect in the grid **********/
    function clickEventHandlerOnRec() {
      if (this.getAttribute("isactive") === "false") {
        let intervalRef = window.setInterval(opacityChange, 50); // Faster fade out
        let upInterval = null;
        this.setAttribute("isactive", "true");
        let self = this;

        function opacityChange() {
          self.style.opacity = parseFloat(self.style.opacity) - 0.05;

          if (parseFloat(self.style.opacity) <= 0) {
            clearInterval(intervalRef);
            upInterval = setInterval(opacityChangeII, 50); // Faster fade in
          }
        }

        function opacityChangeII() {
          self.style.opacity = parseFloat(self.style.opacity) + 0.05;

          if (parseFloat(self.style.opacity) >= 1) {
            clearInterval(upInterval);
            self.setAttribute("isactive", "false");
          }
        }
      }
    }
  }
  /**************** ANI C ************************************ */
  /** PUT ALL YOUR CODE FOR INTERACTIVE PATTERN C INSIDE  HERE */
  /**************** ANI C ************************************ */
 /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:)
   * 1: use the PROVIDED keyup/down callbacks `windowKeyDownRef` and/or `windowKeyUpnRef` to handle keyboard events
   * 2: create an interactive pattern/sketch based on keyboard input. Anything goes.
   * do not use  requestAnimationFrame(), setInterval() nor setTimeout() -> meaning keep it simple ;)
   * 
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/


  function aniC(parentCanvas) {

    console.log("in C");
    /*** THIS IS THE CALLBACK FOR KEY DOWN ( DO NOT CHANGE THE NAME..) */
    windowKeyDownRef = function (e) {
      //code for key down in here
      console.log(e)
      //SAMPLE KEY CHECK (you do not have to use)
      if (e.code === "Space") {
        console.log("team-space down")
      }
    };

    /*** THIS IS THE CALLBACK FOR KEY UP ( DO NOT CHANGE THE NAME..) */
    windowKeyUpRef = function (e) {
    //SAMPLE KEY CHECK (you do not have to use)
      if (e.code === "Space") {
        console.log("space up");
        console.log("team-space up")
      }

    };

    //DO NOT REMOVE
    window.addEventListener("keydown", windowKeyDownRef);
    window.addEventListener("keyup", windowKeyUpRef);
  }
}
