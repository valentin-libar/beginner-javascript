// Make a div
const myDiv = document.createElement('div');
// add a class of wrapper to it
myDiv.classList.add('wrapper');
// put it into the body
document.body.insertAdjacentElement('afterbegin',myDiv);
// make an unordered list
const myList = document.createElement('ul');
// add three list items with the words "one, two, three" in them
const insertion1 = document.createElement('li');
insertion1.textContent = 'one';
myList.insertAdjacentElement('beforeEnd',insertion1);

const insertion2 = document.createElement('li');
insertion2.textContent = 'two';
myList.insertAdjacentElement('beforeEnd',insertion2);

const insertion3 = document.createElement('li');
insertion3.textContent = 'three';
myList.insertAdjacentElement('beforeEnd',insertion3);
// put that list into the above wrapper
document.body.insertAdjacentElement('afterbegin',myList);

// create an image
const myImg = document.createElement('img');

// set the source to an image
myImg.src = '../../playground/turtle.png';
// set the width to 250
myImg.width = 250;
// add a class of cute
myImg.classList.add('cute');
// add an alt of Cute Puppy
myImg.alt = 'Cute Puppy';
// Append that image to the wrapper
myDiv.appendChild(myImg);

// with HTML string, make a div, with two paragraphs inside of it
const myString = `
    <div class="news">
        <p>This is the first paragraph.</p>
        <p>This is the second paragraph.</p>
    </div>
`;
// put this div before the unordered list from above
document.body.insertAdjacentHTML('afterbegin',myString);

// add a class to the second paragraph called warning
const pElement = document.querySelector('.news');
pElement.children[1].classList.add('warning');
// remove the first paragraph
pElement.firstElementChild.remove();


// create a function called generatePlayerCard that takes in three arguments: name, age, and height

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards

// make 4 player cards using generatePlayerCard

// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener
