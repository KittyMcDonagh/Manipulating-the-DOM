/*
 * Selecting elements
 */

// Returns a single element. This is because we can't ever have more than
// one element with the same id. Note that we don't include a '#' for the id
var article = document.getElementById('home-page');                                  
console.log("article = " + article + "type = " + typeof(article));          // This will return [object HTMLelement] - only one element, so not an array
console.log("article.content = " + article.textContent);

// Returns a list of elements. This is because we can have a number
// of <section> elements on the page
var sections = article.getElementsByTagName('section');
console.log("sections = " + sections);
console.log("sections[0] = " + sections[0]);            // this will return [object HTMLCollection]. A collection will be an array

// Also returns a list of elements that match the class name. This is because
// unlike the ids, we can have numerous instances of elements with the same
// class names. Note that we don't include a '.' for the class
var leads = document.getElementsByClassName('lead');               // this will create an array, as we could have more than one element

// Let's look at the text content of the .lead element
var lead = leads[0];                                               // need to use [0] because its an array
lead.textContent;

// Very flexible way of finding elements in the DOM. Returns first element found
var article2 = document.querySelector('#home-page');                      // One element only - not an array
var section2 = document.querySelector('section');                         // gets first section only - not an array
var lead2 = document.querySelector('.lead');                              // this will not create an array, as its returning one element only 
console.log("article2 = " + article2 + "type = " + typeof(article2));
console.log("section2 = " + section2 + "type = " + typeof(section2));
console.log("lead2 = " + lead2 + "type = " + typeof(lead2));

// Can get all matched results. This returns a list
var section3 = document.querySelectorAll('section');                      // this will return an array as it expects more than one element
console.log("section3 = " + section3 + "type = " + typeof(section3));

// Let's look at an individual node and see it's children and it's parent
var article3 = document.getElementById('home-page');
console.log("article3 = " + article3 + "type = " + typeof(article3));

article3.children;
article3.parentElement;
article3.nextElementSibling
article3.firstElementChild;
article3.lastElementChild;

var sectionChild = article3.firstElementChild;

/*
 * Creating new elements
 */

// Create a new li to go in the nav
var li = document.createElement('li');

// Give it a class name
li.classList.add('last');


// Change its CSS
li.style.backgroundColor = 'pink';

// Create an anchor link to go in the new li
var a = document.createElement('a');

// Give is some text
a.textContent = "Four";

a.style.color = 'white';

// Insert the anchor link into the li
li.appendChild(a);


/* 
 * Modifying the DOM
 */

// Find the ul element
var uls = document.getElementsByTagName('ul');

var ul = uls[0];

// Insert the new li element into our ul
ul.appendChild(li);

// Let's try move it up to the top of the list
// var firstLi = ul.getElementsByTagName('li');
// ul.insertBefore(li, firstLi);

// firstLi.classList.remove('active');
// Starting to get messy

/*
 * Updating a list of elements
 * - this is where it gets painful
 */

// To see the contents of the various fields you need to do console.log in the console window, otherwise all you'll get is [object HTMLemement], etc
var ul = document.getElementsByTagName('ul'); // Returns an array with one item "[ul.nav.navbar-nav]", the ul and its classes. Would be multiple items if we had more than one array
var li;
for (var i = 0; i < ul[0].children.length; i++) {
    li = ul[0].children; // need to use [0] because this is an array. We only have one "ul" element
    li[i].style.backgroundColor = 'yellow'; // "li" is an array = [li, li, li, li.last]. You need to use the "i".
    console.log("i = "+i + " " + "content = "+li[i].textContent);
}

console.log("ul = "+ul);            // ="[object HTMLCollection]". In Console window = "HTMLCollection [ul.nav.navbar-nav]"
console.log("ul[0] = "+ul[0]);      // = "[object HTMLUListElement]" In Console window = <ul class="nav navbar-nav">...</ul>
console.log("li = "+li);            // = "[object HTMLCollection]". In console window = "HTMLCollection(4) [li, li, li, li.last]"


// Wouldn't it be great if we could do something like  ...

$("li").removeClass("active");

// without having to write big for loops.
