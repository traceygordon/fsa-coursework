/*

Observe the index.html page.

It has:

A heading <h1> with the id "mainHeading"
A paragraph <p> element with the id "description"
A <div> element with the id "colorBox" that will act as a "box."

Without making any changes to the html, write JavaScript that:

1) Changes the text content of the <h1> element from "Welcome to Color Changer!" to "DOM Manipulation is Fun!"
2) Changes the text content of the <p> element from "This is a simple DOM manipulation exercise." to "Look at how we changed the elements!"
3) Changes the background color of the <div> element to light blue and doubles its current size
4) Adds a new <p> element inside the <div> with the text: "This is a new paragraph inside the box!". */

//Your Code below


// Change the text content of the heading
const heading = document.getElementById('mainHeading');
heading.textContent = 'DOM Manipulation is Fun!';

// Change the text content of the paragraph
const description = document.getElementById('description');
description.textContent = 'Look at how we changed the elements!';

// Select the box and modify its styles
const colorBox = document.getElementById('colorBox');
colorBox.style.backgroundColor = 'lightblue'; // Change the background color
colorBox.style.width = '200px'; // Increase the width
colorBox.style.height = '200px'; // Increase the height

// Add a new paragraph inside the box
const newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a new paragraph inside the box!';
colorBox.appendChild(newParagraph);