// set up etch box, etch color
const etch_box = document.querySelector('#etch-box');
let etch_color = 'black';

// function to generate random color
function randomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

// function to create boxes within etch-box 
function createBoxes(slider_output) {

    // delete existing boxes
    let scrap_boxes = document.querySelectorAll('.box');
    for (let scrap = 0; scrap < scrap_boxes.length; scrap++) {
        scrap_boxes[scrap].remove();
    }

    // determine number of boxes
    let amount_boxes = (slider_output * slider_output);

    // create that many boxes
    for (let i = 0; i < amount_boxes; i++) {
        let new_box = document.createElement('div');
        new_box.classList.add('box');

        // set height and width of box based on amount
        let length = 400/slider.value;
        new_box.style.height = length.toString() + "px";
        new_box.style.width = length.toString() + "px";
    
        // color box black upon mouse-over
        new_box.addEventListener('mouseover', () => {
            new_box.style.backgroundColor = etch_color;
        });
    
        // append to etch-box and box
        etch_box.appendChild(new_box);
    }    
}

// set up slider
const slider = document.querySelector('#slider');

// create boxes based on slider.value
slider.oninput = function() {
    createBoxes(slider.value, etch_color);
} 

// black button
const black_button = document.querySelector('#black-button');
black_button.addEventListener('click', () => {
    etch_color = 'black';
});

// rainbow button
const rainbow_button = document.querySelector('#rainbow-button');
rainbow_button.addEventListener('click', () => {
    etch_color = randomColor();
});

// delete button
const delete_button = document.querySelector('#delete-button');
delete_button.addEventListener('click', () => {
    etch_color = 'white';
});

// set up initial boxes
createBoxes(slider.value, etch_color);

// create and define clear button
const clear_button = document.querySelector('#clear-button');
clear_button.addEventListener('click', () => {

    // return etch color to black
    etch_color = 'black';
    
    // set all boxes to white
    let boxes = document.querySelectorAll('.box');
    for (let box = 0; box < boxes.length; box++) {
        boxes[box].style.backgroundColor = 'white';
    }
});

