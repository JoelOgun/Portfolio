/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
 ***/
let quotes = [
  {
    quote:
      "You may fail, but fall still fighting; Don’t give up, whate’er you do; Eyes front, head high to the finish See it through!",
    source: "Edgar Albert Guest",
    citation: "See It Through",
    year: 1920,
  },
  {
    quote:
      "Success is	failure	turned	inside	outThe	silver tint	of the	clouds	of	doubt, And	you	never	can	tell how	close	you	are, It	may	be near when	it seems	so	far, So	stick	to	the	fight	when	you’re	hardest	hit It’s	when	things	seem	worst	that you	must	not	quit.",
    source: "Edgar Albert Guest",
    citation: "Don't Quit",
    year: 1921,
  },
  {
    quote: "Life Is Far Too Important A Thing Ever To Talk Seriously About.",
    source: "Oscar Wilde",
    citation: "Lady Windermere’s Fan",
    year: 1892,
  },
  {
    quote:
      "As You Well Know One Of The Keys To My Success Is A Clear And Consistent Understanding Of My Own Limitations. So often people overestimate themselves, misapply their gifts. Wisdom is learning the boundaries of one's designated lane.",
    source: "Raymond Red Reddington",
    citation: "The Blacklist",
  },
  {
    quote: "Learn to value yourself, which means: fight for your happiness.",
    source: "Ayn Rand",
    citation: "For The New Intellectual",
    year: 1961,
  },
  {
    quote: "Get comfortable being uncomfortable.",
    source: "Joel Ogunremi",
    citation: "High School Year Book",
  },
  {
    quote: "Ad Astra per Aspera.",
    source: "John James Ingalls",
    year: 1861,
  },
];
console.log(quotes);

/*  background color array */
let backgroundColor = [
  "#2120f6",
  "#ff00a4",
  "#ff0047",
  "#ffa000",
  "#d9f30d",
  "#09e16d",
  "#00df95",
  "#c109e1",
  "#a400df",
  "#0909d7",
];

/***
 * `getRandomQuote` function
 ***/
function getRandomQuote(array) {
  // 1. Create a variable that generates a random number
  // between zero and the last index in the `quotes` array
  let randomNumber = Math.floor(Math.random() * array.length);
  // 2. Use the random number variable and bracket notation
  // to grab a random object from the `quotes` array, and
  // store it in a variable
  let grabObject = array[randomNumber];

  // 3. Return the variable storing the random quote object
  return grabObject;
}

console.log(getRandomQuote(quotes));
getRandomQuote(quotes);

/* `getBackgroundColor` function  */
function getBackgroundColor(backgroundColor) {
  // 1. Create a variable that generates a random number
  // between zero and the last index in the `backgroundColor` array
  let randomColor = Math.floor(Math.random() * backgroundColor.length);
  // 2. Use the random number variable and bracket notation
  // to grab a random color from the `backgroundColor` array, and
  // store it in a variable
  let changeColor = backgroundColor[randomColor];
  // 3. Return the variable storing the random background color
  return changeColor;
}
console.log(getBackgroundColor(backgroundColor));
getBackgroundColor(backgroundColor);
/***
 * `printQuote` function
 ***/
function printQuote() {
  // 1. Create a variable that calls the getRandomQuote()
  // function and getBackgroundColor() function
  let getFunctionRandom = getRandomQuote(quotes);
  let getFunctionColor = getBackgroundColor(backgroundColor);
  // 2. Create a variable that initiates your HTML string with
  // the first two <p></p> elements, their classNames,
  // and the quote and source properties, but leave off
  // the second closing `</p>` tag for now
  let htmlP = " ";
  htmlP += `<p class = "quote">${getFunctionRandom.quote}</p>
            <p class = "source">${getFunctionRandom.source}
  `;

  // 3. Use an if statement to check if the citation property
  // exists, and if it does, concatenate a <span></span>
  // element, appropriate className, and citation property
  // to the HTML string
  if (getFunctionRandom.hasOwnProperty("citation")) {
    htmlP += `<span class="citation">${getFunctionRandom.citation}</span>`;
  } else {
    htmlP;
  }
  // 4. Use an if statement to check of the year property exists,
  // and if it does, concatenate a <span></span> element,
  // appropriate className, and year property to the HTML
  //string
  if (getFunctionRandom.hasOwnProperty("year")) {
    htmlP += `<span class="year">${getFunctionRandom.year}</span>`;
  } else {
    htmlP;
  }
  // 5. After the two if statements, concatenate the closing </p>
  // tag to the HTML string
  htmlP += `</p>`;
  // 6. set the innerHTML of the quote-box div to equal the
  // complete HTML string
  document.getElementById("quote-box").innerHTML = htmlP;
  // 7. style the background of a document to equal the random color function
  document.body.style.backgroundColor = getFunctionColor;

  return htmlP;
}
console.log(printQuote());

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
