/* 
 * Script for a Random Quote Generator
 */

 
// Creating an array of objects containing quotes and other relevant information
const quotes = [
  { quote: 'Talent wins games, but teamwork and intelligence wins championships.', source: 'Michael Jordan', tag: 'Sport' },
  { quote: 'The most incomprehensible thing about the world is that it is comprehensible.', source: 'Albert Einstein', citation: 'Physics and Reality', year: 1936, tag: 'Science' },
  { quote: 'It is during our darkest moments that we must focus to see the light.', source: 'Aristotle Onassis', tag: 'Philosophy' },
  { quote: 'What I suffered physically was worth what I’ve accomplished in life. A man who is not courageous enough to take risks will never accomplish anything in life.', source: 'Muhammad Ali', citation: 'Press conference', year: 'October 28, 1984', tag: 'Sport' },
  { quote: 'You miss 100 percent of the shots you never take.', source: 'Wayne Gretzky', year: 1983, tag: 'Sport' }
];

// Creating array of colours to be used for changing background colour
const colours = ['red', 'blue', 'green', 'orange', 'purple', 'magenta', 'brown', 'chartreuse', 'navy', 'olive', 'salmon', 'teal', 'tomato', 'turquoise'];

// Get random number for quotes length and return a random single quote
function getRandomQuote() {
  let randomNumber = Math.floor( Math.random() * quotes.length );
  return quotes[randomNumber];
}

// Get random number for colours length and return a random single colour name 
function getRandomColour() {
  let randomColour = Math.floor( Math.random() * colours.length );
  return colours[randomColour];
}

// Create variable and function to setInterval of page reload time for printQuote() function
let pageReload;

function startTime() {
  pageReload = setInterval(printQuote, 10000);
}

// Clear the setInterval time for pageReload variable. This resets the pageReload time.
function resetTime() {
  clearInterval(pageReload);
}

// Start printQuote function to store html instructions for random quotes
function printQuote() {
  // Create a variable which stores a random quote object from the getRandomQuote() function
  let getQuote = getRandomQuote();
  // Create a variable which stores a random colour from the getRandomColour() function
  let getColour = getRandomColour();
  // Create a variable which stores a template literal containing html and placeholders ${} for the getQuote variable
  let html = `<p class="quote">${getQuote['quote']}</p><p class="source">${getQuote['source']}`
  // Conditional statements checking if certain placeholders are present and adds the html to the html string
  if (getQuote['citation']) {
    html += `<span class="citation">${getQuote['citation']}</span>`
  }
  if (getQuote['year']) {
    html += `<span class="year">${getQuote['year']}</span>`
  }
  if (getQuote['tag']) {
    html += `<span class="tag">${getQuote['tag']}</span>`
  }
  // End the html sting with a closing </p> tag. This closes the source class paragraph
  html += '</p>'
  // Place the html string in the quote-box div id
  document.getElementById('quote-box').innerHTML = html;
  // Get the body tag div and select the background color css tag to change the colour using the getColour variable
  document.body.style.backgroundColor = getColour;
  // Clear and restart time for page reload
  clearInterval();
  startTime();
}

// Initialise the printQuote function on page load
printQuote();

// Click event listener for the printQuote function
document.getElementById('load-quote').addEventListener("click", printQuote, false);