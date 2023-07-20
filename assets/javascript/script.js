// Variable decorations for targeting HTML and DOM elements.

// targets save buttons for each time block.
var saveButton09 = $('#hour-9').children('button');
var saveButton10 = $('#hour-10').children('button');
var saveButton11 = $('#hour-11').children('button');
var saveButton12 = $('#hour-12').children('button');
var saveButton13 = $('#hour-13').children('button');
var saveButton14 = $('#hour-14').children('button');
var saveButton15 = $('#hour-15').children('button');
var saveButton16 = $('#hour-16').children('button');
var saveButton17 = $('#hour-17').children('button');

// targets input boxes from time blocks.
var userInput9 = document.getElementById("userInput9");
var userInput10 = document.getElementById("userInput10");
var userInput11 = document.getElementById("userInput11");
var userInput12 = document.getElementById("userInput12");
var userInput13 = document.getElementById("userInput13");
var userInput14 = document.getElementById("userInput14");
var userInput15 = document.getElementById("userInput15");
var userInput16 = document.getElementById("userInput16");
var userInput17 = document.getElementById("userInput17");

// targets time block IDs
var timeBlock9 = document.getElementById("hour-9");
var timeBlock10 = document.getElementById("hour-10");
var timeBlock11 = document.getElementById("hour-11");
var timeBlock12 = document.getElementById("hour-12");
var timeBlock13 = document.getElementById("hour-13");
var timeBlock14 = document.getElementById("hour-14");
var timeBlock15 = document.getElementById("hour-15");
var timeBlock16 = document.getElementById("hour-16");
var timeBlock17 = document.getElementById("hour-17");

// displays the current day.
var currentDay = dayjs();

// gives the current hour of the day in 24hr notation.
var currentHour = "hour-" + currentDay.format("H")
console.log(currentHour);

// displays the current date and time of day.
$("#currentDay").text(currentDay.format("MMM D, YYYY hh:mm a"));


// Event Listeners for each save button 9 - 17 ... aka 9am - 5pm in 24hr notation
saveButton09.on('click', function () {
  console.log('button 09 was clicked!');
  console.log(userInput9.value);
  localStorage.setItem("userInput9", JSON.stringify(userInput9.value));
});

saveButton10.on('click', function () {
  console.log('button 10 was clicked!');
  console.log(userInput10.value);
  localStorage.setItem("userInput10", JSON.stringify(userInput10.value));
});

saveButton11.on('click', function () {
  console.log('button 11 was clicked');
  console.log(userInput11.value);
  localStorage.setItem("userInput11", JSON.stringify(userInput11.value));
});

saveButton12.on('click', function () {
  console.log('button 12 was clicked');
  console.log(userInput12.value);
  localStorage.setItem("userInput12", JSON.stringify(userInput12.value));
});

saveButton13.on('click', function () {
  console.log('button 13 was clicked');
  console.log(userInput13.value);
  localStorage.setItem("userInput13", JSON.stringify(userInput13.value));
});

saveButton14.on('click', function () {
  console.log('button 14 was clicked');
  console.log(userInput14.value);
  localStorage.setItem("userInput14", JSON.stringify(userInput14.value));
});

saveButton15.on('click', function () {
  console.log('button 15 was clicked');
  console.log(userInput15.value);
  localStorage.setItem("userInput15", JSON.stringify(userInput15.value));
});

saveButton16.on('click', function () {
  console.log('button 16 was clicked');
  console.log(userInput16.value);
  localStorage.setItem("userInput16", JSON.stringify(userInput16.value));
});

saveButton17.on('click', function () {
  console.log("button 17 was clicked");
  console.log(userInput17.value + " was logged.");
  localStorage.setItem("userInput17", JSON.stringify(userInput17.value));
  localStorage.getItem("count");
});


// Renders the last logged save button input from local storage onto web application.
function renderLastInput9() {
  var lastInput9 = JSON.parse(localStorage.getItem("userInput9"));

  if (lastInput9 !== null)
    document.getElementById("userInput9").textContent = lastInput9
}

function renderLastInput10() {
  var lastInput10 = JSON.parse(localStorage.getItem("userInput10"));

  if (lastInput10 !== null)
    document.getElementById("userInput10").textContent = lastInput10
}

function renderLastInput11() {
  var lastInput11 = JSON.parse(localStorage.getItem("userInput11"));

  if (lastInput11 !== null)
    document.getElementById("userInput11").textContent = lastInput11
}

function renderLastInput12() {
  var lastInput12 = JSON.parse(localStorage.getItem("userInput12"));

  if (lastInput12 !== null)
    document.getElementById("userInput12").textContent = lastInput12
}

function renderLastInput13() {
  var lastInput13 = JSON.parse(localStorage.getItem("userInput13"));

  if (lastInput13 !== null)
    document.getElementById("userInput13").textContent = lastInput13
}

function renderLastInput14() {
  var lastInput14 = JSON.parse(localStorage.getItem("userInput14"));

  if (lastInput14 !== null)
    document.getElementById("userInput14").textContent = lastInput14
}

function renderLastInput15() {
  var lastInput15 = JSON.parse(localStorage.getItem("userInput15"));

  if (lastInput15 !== null)
    document.getElementById("userInput15").textContent = lastInput15
}

function renderLastInput16() {
  var lastInput16 = JSON.parse(localStorage.getItem("userInput16"));

  if (lastInput16 !== null)
    document.getElementById("userInput16").textContent = lastInput16
}

function renderLastInput17() {
  var lastInput17 = JSON.parse(localStorage.getItem("userInput17"));

  if (lastInput17 !== null)
    document.getElementById("userInput17").textContent = lastInput17
}

// Function that renders the last logged save button inputs from local storage upon load.

function init() {
  renderLastInput9();
  renderLastInput10();
  renderLastInput11();
  renderLastInput12();
  renderLastInput13();
  renderLastInput14();
  renderLastInput15();
  renderLastInput16();
  renderLastInput17();
}

// Functions to apply the past, present, and future css styles to time blocks. 

if (currentHour == timeBlock9) {
  $(userInput9).addClass('present');
} else if (currentHour < timeBlock9) {
  $(userInput9).addClass('future');
  $(userInput9).removeClass('present');
} else {
  $(userInput9).addClass('past');
}

if (currentHour == timeBlock10) {
  $(userInput10).addClass('present');
} else if (currentHour < timeBlock10) {
  $(userInput10).addClass('future');
} else {
  $(userInput10).addClass('past');
}

if (currentHour == timeBlock11) {
  $(userInput11).addClass('present');
} else if (currentHour < timeBlock11) {
  $(userInput11).addClass('future');
} else {
  $(userInput11).addClass('past');
}

if (currentHour == timeBlock12) {
  $(userInput12).addClass('present');
} else if (currentHour < timeBlock12) {
  $(userInput12).addClass('future');
} else {
  $(userInput12).addClass('past');
}

if (currentHour == timeBlock13) {
  $(userInput13).addClass('present');
} else if (currentHour < timeBlock13) {
  $(userInput13).addClass('future');
} else {
  $(userInput13).addClass('past');
}

if (currentHour == timeBlock14) {
  $(userInput14).addClass('present');
} else if (currentHour < timeBlock14) {
  $(userInput14).addClass('future');
} else {
  $(userInput14).addClass('past');
}

if (currentHour == timeBlock15) {
  $(userInput15).addClass('present');
} else if (currentHour < timeBlock15) {
  $(userInput15).addClass('future');
} else {
  $(userInput15).addClass('past');
}

if (currentHour == timeBlock16) {
  $(userInput16).addClass('present');
} else if (currentHour < timeBlock16) {
  $(userInput16).addClass('future');
} else {
  $(userInput16).addClass('past');
}

if (currentHour == timeBlock17) {
  $(userInput17).addClass('present');
} else if (currentHour < timeBlock17) {
  $(userInput17).addClass('future');
} else {
  $(userInput17).addClass('past');
}

// Function to renders the last logged save button input from local storage on load
init();

// Declarations to log user inputs into local storage for persistance across page reloads. 
var lastInput11 = JSON.parse(localStorage.getItem("userInput11"));
var lastInput12 = JSON.parse(localStorage.getItem("userInput12"));
var lastInput13 = JSON.parse(localStorage.getItem("userInput13"));
var lastInput14 = JSON.parse(localStorage.getItem("userInput14"));
var lastInput15 = JSON.parse(localStorage.getItem("userInput15"));
var lastInput16 = JSON.parse(localStorage.getItem("userInput16"));
var lastInput17 = JSON.parse(localStorage.getItem("userInput17"));