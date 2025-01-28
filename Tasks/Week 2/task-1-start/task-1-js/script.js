window.onload = setup;

/** function setup */
function setup(){
console.log("we are a go!")
/*** ALL ANWSERS TO BE ADDED IN THE ALLOCATED SPACE */
/*** START PART ONE ACCESS */ 
/* 1: all paragraph elements */
/***CODE */
    // const allParagraphs = document.querySelectorAll("p");
    // console.log(allParagraphs);
/***OUTPUT: 
 * [Log] NodeList (9) (script.js, line 11)
0
<p id="1">…</p>
1
<p id="2" class="img-descript">…</p>
2
<p id="3" class="img-descript">…</p>
3
<p id="4" class="img-descript">…</p>
4
<p id="5" class="img-descript">…</p>
5
<p id="6" class="img-descript">…</p>
6
<p id="7" class="img-descript">…</p>
7
<p id="8" class="img-descript">…</p>
8
<p id="9" class="img-descript">…</p>

NodeList Prototype
 */


/*************************************** */
/* 2: only the first paragraph element */
/***CODE */
    // const firstParagraph = document.querySelector("p");
    // console.log(firstParagraph);
/***OUTPUT: 
 * [Log] <p id="1"> (script.js, line 21)
"
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias perspiciatis blanditiis, et
                laborum praesentium earum. Enim facere, quia commodi voluptate, quis asperiores, pariatur ducimus
                officiis non
                quasi officia sit veniam!
            "
</p>
 */


/*************************************** */
/* 3: all elements with the class inner-container */
/***CODE */
    // const allInnerContainers = document.querySelectorAll(".inner-container");
    // console.log(allInnerContainers);
/***OUTPUT: 
 * [Log] NodeList (8) (script.js, line 58)
0
<div class="inner-container">…</div>
1
<div class="inner-container">…</div>
2
<div class="inner-container">…</div>
3
<div class="inner-container">…</div>
4
<div class="inner-container">…</div>
5
<div class="inner-container">…</div>
6
<div class="inner-container">…</div>
7
<div class="inner-container">…</div>

NodeList Prototype

 */


/*************************************** */
/* 4: the last image element inside the element that has the class img-container */
/***CODE */
    // const lastImageInImgContainer = document.querySelectorAll(".img-container img:last-of-type");
    // console.log(lastImageInImgContainer[lastImageInImgContainer.length - 1]);

/***OUTPUT: 
 * [Log] <img class="img-image" src="task-1-images/seventeen.png"> (script.js, line 87)
 */


/*************************************** */
/* 5: Code */
/***CODE */
/* 5A: all h2 elements */
    // const allH2Elements = document.querySelectorAll("h2");
    // console.log(allH2Elements);
    /***OUTPUT: 
     * [Log] NodeList [<h2>] (1) (script.js, line 99)
     */

/* 5B: length of the list in 5A */
    // console.log(allH2Elements.length);
    /***OUTPUT:
 * [Log] 1 (script.js, line 105)
 */

/* 5C: the text content of the first element in the list from 5A */
    // console.log(allH2Elements[0].textContent);
    /***OUTPUT:
 * [Log]  The header of this fancy page (script.js, line 111)
 */



/*************************************** */
/* 6: the element with id name parent */
/***CODE */
    // const parentElement = document.getElementById("parent");
    // console.log(parentElement);
/***OUTPUT: 
 * [Log] <section id="parent"> (script.js, line 122)
<div class="inner-container">…</div>
<div class="inner-container">…</div>
<div class="inner-container">…</div>
<div class="inner-container">…</div>
<div class="inner-container">…</div>
<div class="inner-container">…</div>
<div class="inner-container">…</div>
<div class="inner-container">…</div>
</section>
 */

/*************************************** */
/*** END PART ONE ACCESS */ 


/*************************************** */
/*** START PART TWO MODIFY */ 
/*************************************** */
/* 1: Select the first paragraph and replace the text within the paragraph... */
/***CODE */
    // const firstParagraph = document.querySelector("p");
    // firstParagraph.textContent = `New text in paragraph one: text changed by Rowan on the following date: ${new Date().toLocaleDateString()}`;
    // console.log(firstParagraph);
/*************************************** */
/* 2: Select all elements in the HTML that have the class name content-container
 and change the background color ... of first and second ...*/
/***CODE */
    // const contentContainers = document.querySelectorAll(".content-container");
    // contentContainers[0].style.backgroundColor = "orange";
    // contentContainers[1].style.backgroundColor = "purple";
    // console.log(contentContainers);

/*************************************** */
/* 3: Change the src element of the first image element on the page to be ...
/***CODE */
// const firstImage = document.querySelector("img");
// firstImage.src = "task-1-images/seven.png";
// console.log(firstImage);

/*************************************** */
/* 4: Select the third paragraph element on the page and 
replace the content (within the paragraph) to be an h2 element which contains the text `TEST 123`
/***CODE */
    // const thirdParagraph = document.querySelectorAll("p")[2];
    // thirdParagraph.innerHTML = "<h2>TEST 123</h2>";
    // console.log(thirdParagraph);

/*************************************** */
/* 5: Select the fourth paragraph element on the page and 
add to the existing content an h2 element containing the text `TEST 123`
/***CODE */
    // const fourthParagraph = document.querySelectorAll("p")[3];
    // fourthParagraph.innerHTML += "<h2>TEST 123</h2>";
    // console.log(fourthParagraph);

/*************************************** */
/* 6: Select the fifth paragraph element on the page and add to the existing content 
an img element that holds `one.png`, and add the class newStyle to said paragraph element.
/***CODE */
    // const fifthParagraph = document.querySelectorAll("p")[4];
    // fifthParagraph.innerHTML += '<img src="task-1-images/one.png">';
    // fifthParagraph.classList.add("newStyle");
    // console.log(fifthParagraph);

/*************************************** */
/* 7: Add the following array variable: let colors = ['red','blue','green','orange'];, 
then access all elements with class name inner-container and save to a variable called `innerContainers`. 
Next, iterate over the colors array, and for each color: 
assign the element from innerContainers variable with the same index 
(i.e. colors[0] should be allocated to the first innerContainers element, colors[1] to the second, etc ...) 
a background using that color.
/***CODE */
    // let colors = ["red", "blue", "green", "orange"];
    // const innerContainers = document.querySelectorAll(".inner-container");
    // for (let i = 0; i < colors.length; i++) {
    //     innerContainers[i].style.backgroundColor = colors[i];
    // }
    // console.log(innerContainers);
    
/*************************************** */
/*** END PART TWO MODIFY */ 

    /*************************************** */
    /*** START PART THREE CREATE */
    /*************************************** */
    /* 1: NEW PARAGRAPHS */
    /* 1A: Access all paragraph elements, and store the result in a variable called: allPTagsThree */
    const allPTagsThree = document.querySelectorAll("p");
    console.log(allPTagsThree);

    /* 1B: Create a function:function customCreateElement(parent){ //body } */
    function customCreateElement(parent) {
        /* 1C:  In the body of customCreateElement create a new parargraph element*/
        const newParagraph = document.createElement("p");

        /* 1D: Set the text of this element to be: `using create Element` */
        newParagraph.textContent = "using create Element";

        /* 1E: Set the background of this paragraph element to be green */
        newParagraph.style.backgroundColor = "green";

        /* 1F: Set the color of the text in this paragraph element to be white */
        newParagraph.style.color = "white";

        /* 1G: Append this new element to the parent variable within the function */
        parent.appendChild(newParagraph);
    }

    /* 1H: Iterate through the allPTagsThree array and call customCreateElement(),
    passing the current allPTagsThree element as the parent with each iteration. */
    allPTagsThree.forEach((paragraph) => customCreateElement(paragraph));

    /*** EXPLANATION:
     * Each paragraph element in the document has a new child paragraph appended to it.
     * The new paragraph has the text "using create Element", a green background, and white text.
     */

    /*************************************** */
    /* 2: GRID OF BOXES */

    /* 2A: Create another new function: function customNewBoxCreate(parent){ //body } */
    function customNewBoxCreate(parent) {
        /* 2B: Create a new div element with the class testDiv */
        const newDiv = document.createElement("div");
        newDiv.classList.add("testDiv");

        /* 2C: Append this new element to the parent variable within the function */
        parent.appendChild(newDiv);

        /* 2D: Return this new element */
        return newDiv;
    }

    /* 2E: Create a nested for loop (for rows and columns) to iterate through 10 columns and 10 rows. */
    const newGrid = document.getElementById("new-grid");
    const gridSize = 10;

    for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
            const returnedDiv = customNewBoxCreate(newGrid);

            /* 2F: Fix x,y positions */
            returnedDiv.style.position = "absolute";
            returnedDiv.style.left = `${col * 50}px`;
            returnedDiv.style.top = `${row * 50}px`;

            /* 2G: BONUS I: Set background based on row number */
            if (row % 2 === 0) {
                returnedDiv.style.backgroundColor = "white";
            } else {
                returnedDiv.style.backgroundColor = "cornflowerblue";
            }

            /* 2H: BONUS II: Set content based on row number */
            returnedDiv.textContent = row % 2 === 0 ? "EVEN" : "ODD";
        }
    }

    /*** EXPLANATION:
     * A 10x10 grid is created with div elements positioned manually using left and top styles.
     * Even rows have a white background and display "EVEN",
     * while odd rows have a cornflowerblue background and display "ODD."
     * The total number of div elements matches the rows × columns (100 in total).
     */

    /*************************************** */
    /* 3: GRID OF BOXES II */

    /* 3A: Create ANOTHER nested for loop to generate a new grid with parent `new-grid-three`. */
    const newGridThree = document.getElementById("new-grid-three");

    for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
            const returnedDiv = customNewBoxCreate(newGridThree);

            /* 3B: Check the column's remainder when divided by 3 */
            const remainder = col % 3;

            /* 3C: Set background based on remainder */
            if (remainder === 0) {
                returnedDiv.style.backgroundColor = "red";
            } else if (remainder === 1) {
                returnedDiv.style.backgroundColor = "orange";
            } else if (remainder === 2) {
                returnedDiv.style.backgroundColor = "yellow";
            }

            /* 3D: Set content to represent the remainder */
            returnedDiv.textContent = remainder;

            /* Fix x,y positions */
            returnedDiv.style.position = "absolute";
            returnedDiv.style.left = `${col * 50}px`;
            returnedDiv.style.top = `${row * 50}px`;
        }
    }

    /*** EXPLANATION:
     * Another 10x10 grid is created where divs are colored based on their column's remainder when divided by 3.
     * Red = remainder 0, Orange = remainder 1, Yellow = remainder 2.
     * Each div displays the remainder as text content.
     */

    /*************************************** */
    /*** END PART THREE CREATE */
    /*************************************** */


}