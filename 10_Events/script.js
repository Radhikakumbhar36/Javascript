//1.....Basic Event Handling 
// Add a click event listener to a button that changes the text content of a paragraph
const button = document.getElementById('myButton');
const paragraph = document.getElementById('myParagraph');

button.addEventListener('click', () => {
    paragraph.textContent = 'The text content has been changed!';
});

// Add a double-click event to an image that toggles its visibility
const image = document.getElementById('myImage');

image.addEventListener('dblclick', () => {
    if (image.classList.contains('hidden')) {
        image.classList.remove('hidden');
    } else {
        image.classList.add('hidden');
    }
});


//2......Mouse Events
// Add a mouseover event listener to an element that changes its background color
const hoverElement = document.getElementById('hoverElement');

hoverElement.addEventListener('mouseover', () => {
    hoverElement.style.backgroundColor = 'lightblue';
});

// Add a mouseout event listener to an element that resets its background color
hoverElement.addEventListener('mouseout', () => {
    hoverElement.style.backgroundColor = 'lightgray';
});

//3....Keyboard Events 
// Add a keydown event listener to an input field that logs the key pressed to the console
const inputField = document.getElementById('myInput');

inputField.addEventListener('keydown', (event) => {
    console.log(`Key pressed: ${event.key}`);
});

// Add a keyup event listener to an input field that displays the current value in a paragraph
const displayParagraph = document.getElementById('displayParagraph');

inputField.addEventListener('keyup', () => {
    displayParagraph.textContent = `Current input value: ${inputField.value}`;
});


//4.....From Events
// Add a submit event listener to a form that prevents the default submission and logs the form data to the console
const form = document.getElementById('myForm');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission
    const formData = new FormData(form);
    formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
    });
});

// Add a change event listener to a select dropdown that displays the selected value in a paragraph
const select = document.getElementById('mySelect');
const selectedValueParagraph = document.getElementById('selectedValue');

select.addEventListener('change', () => {
    selectedValueParagraph.textContent = `Selected value: ${select.value}`;
});


//5......Event Delegation
// Add a click event listener to a list that logs the text content of the clicked list item using event
const list = document.getElementById('myList');

list.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        console.log(`Clicked item text: ${event.target.textContent}`);
    }
});

// Add an event listener to a parent element that listens for events from dynamically added child elements
const addItemButton = document.getElementById('addItemButton');
let itemCount = 3;

addItemButton.addEventListener('click', () => {
    itemCount++;
    const newItem = document.createElement('li');
    newItem.textContent = `Item ${itemCount}`;
    list.appendChild(newItem);
});
