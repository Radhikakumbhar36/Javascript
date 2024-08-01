//1.....Selecting and Manipulating Elements
// Select the element by its ID and change its text content
document.getElementById('uniqueElement').textContent='This is the new text';

// Select elements by their class and change their background color
const elements=document.getElementsByClassName('styledElement');

for(let i=0;i<elements.length;i++){
    elements[i].style.backgroundColor='lightBlue';
}

//2.....Creating and Appending Elements
// Create a new div element with text content and append it to the body
const newdiv=document.createElement('div')
newdiv.textContent='This is the new div element'
document.body.appendChild(newdiv);

// Create a new li element and add it to an existing ul list
const newli=document.createElement('li')
newli.textContent='New list item'
const ul=document.getElementById('myList')
ul.appendChild(newli)


//3.....Removing Elements
// Select an HTML element and remove it from the DOM
const elementToRemove=document.getElementById('removeMe')
if(elementToRemove){
    elementToRemove.remove()
}

// Remove the last child of a specific HTML element
const uli=document.getElementById('myList')
if(uli && uli.lastElementChild){
    uli.removeChild(uli.lastElementChild)
}

//4.....Modifying Attributes and Classes
// Select an HTML element and change one of its attributes
const image=document.getElementById('myImage')
if(image){
    image.setAttribute('src','github.png')
    image.setAttribute('alt','New Image')
}


// Add and remove a CSS class from an HTML element
const div=document.getElementById('myDiv')
if(div){
      // Add the class
    div.classList.add('highlight')

    // Remove the class after 3 seconds
    setTimeout(()=>{
        div.classList.remove('highlight')
},3000)
}


//5......Event Handling 
// Add a click event listener to a button that changes the text content of a paragraph
const button=document.getElementById('myButton');
const paragraph = document.getElementById('myParagraph');

button.addEventListener('click', () => {
    paragraph.textContent = 'The text content has been changed!';
});

// Add a mouseover event listener to an element that changes its border color
const hoverElement = document.getElementById('hoverElement');

hoverElement.addEventListener('mouseover', () => {
    hoverElement.classList.add('highlight-border');
});

hoverElement.addEventListener('mouseout', () => {
    hoverElement.classList.remove('highlight-border');
});