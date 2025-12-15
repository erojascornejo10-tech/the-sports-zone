'use strict';

alert('Welcome to my page');

let userName = prompt('What is your name?');
console.log(userName);

let answer = confirm("Are you sure you want to continue to this page?");

if (answer) {
  console.log("Action confirmed");
} else {
  console.log("Action canceled");
}

//string concatenation
document.write('Welcome' + userName + '!');