"use strict";

/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

/* 
/* 
Display the search form as the last child in the header . 
*/
var header = document.querySelector(".header");
var searchForm =
  '<label for="search" class = "student-search" > <span>Search by name</span>\n<input id="search" placeholder="Search by name..."> <button type="submit"><img src="img/icn-search.svg" alt="Search icon"></button>\n</label>';
header.insertAdjacentHTML("beforeend", searchForm);
var input = document.getElementById("search");
var searchButton = document.querySelector("button[type = submit]");
/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

function showPage(list, page) {
  // create two variables which will represent the index for the first and last student on the page

  /* startIndex = (page parameter * items per page) - items per page 
  endIndex = page parameter * items per page */
  startIndex = page * 9 - 9;
  endIndex = page * 9; // select the element with a class of `student-list` and assign it to a variable

  studentList = document.querySelector(".student-list"); // set the innerHTML property of the variable you just created to an empty string

  studentList.innerHTML = " "; // loop over the length of the `list` parameter

  for (var _i = 0; _i < list.length; _i++) {
    // inside the loop create a conditional to display the proper students
    if (_i >= startIndex && _i < endIndex) {
      // inside the conditional:
      // create the elements needed to display the student information
      var pickPerson = data[_i];
      var studentItem = '<li class = "student-item cf"> \n      <div class = "student-details"> \n     <img class="avatar" src="'
        .concat(pickPerson.picture.large, '" alt="Profile Picture">\n     <h3>')
        .concat(pickPerson.name.first, " ")
        .concat(pickPerson.name.last, '</h3>  <span class="email">')
        .concat(
          pickPerson.email,
          '</span>\n      </div>\n       <div class="joined-details">\n      <span class="date">'
        )
        .concat(
          pickPerson.registered.date,
          "</span>\n    </div>\n      </li> "
        ); // insert the above elements

      studentList.insertAdjacentHTML("beforeend", studentItem);
    }
  }
}

showPage(data, 1);
/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {
  /* create a variable to calculate the number of pages needed 
  numOfPages = Math.ceil(list length / items per page) */
  numOfPages = Math.ceil(list.length / 9); // select the element with a class of `link-list` and assign it to a variable

  var linkList = document.querySelector(".link-list"); // set the innerHTML property of the variable you just created to an empty string

  linkList.innerHTML = " "; // loop over the number of pages needed

  for (var _i2 = 1; _i2 <= numOfPages; _i2++) {
    // create the elements needed to display the pagination button
    var button = '<li>\n  <button type="button">'.concat(
      _i2,
      "</button>\n</li>"
    );
    console.log(button); // insert the above elements

    linkList.insertAdjacentHTML("beforeend", button); // give the first pagination button a class of "active"

    var currentPageActive = document.querySelector('button[type="button"]');
    currentPageActive.className = "active";
  } // create an event listener on the `link-list` element
  // if the click target is a button:
  // remove the "active" class from the previous button
  // add the active class to the clicked button
  // call the showPage function passing the `list` parameter and page to display as arguments

  linkList.addEventListener("click", function (e) {
    if (e.target.tagName == "BUTTON") {
      var firstElement = document.querySelector(".active");
      firstElement.className = "";
      e.target.className = "active";
      var page = e.target.textContent;
      showPage(list, page);
    }
  });
} // Call functions

addPagination(data);
console.log(addPagination);
/* 
Create the `searchStudent` function  with the help w3 school Search Menu 
This function will append HTML for a search bar to display result of students 
*/

function searchStudent(searchInput, studentItem) {
  console.log(searchInput);
  console.log(studentItem);
  var studentInputMatches = [];

  for (i = 0; i < studentItem.length; i++) {
    if (
      searchInput.value.length !== 0 &&
      studentItem[i].textContent.toLowerCase() ===
        searchInput.value.toLowerCase()
    ) {
      studentInputMatches.push(searchInput);
    }
  } //  showPage(searchStudent());
}

searchStudent(input, data);
searchButton.addEventListener("click", function (e) {
  e.preventDefault();
  searchStudent(input, data);
  console.log("Submit button is functional!");
}); // Callback  function on search input field

input.addEventListener("keyup", function () {
  searchStudent(input, data);
  console.log("Keyup event on the Search input is functional!");
});
