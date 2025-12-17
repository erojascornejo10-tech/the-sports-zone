'use strict';

alert('Welcome to my page');

let userName = prompt('What is your name?');
console.log(userName);


//string concatenation
document.write('Welcome' + userName + '!');

function userprompt(){
            let userAge = Number(prompt(' How old are you?'));
            let message = '';

            if (userAge <= 30) {
                message = 'that\'s a good age';
            } else if (userAge <90){
                message = 'you got rizz!';
            } else{
                message = 'woahh!';
            }

                return message;
            }


let answer = confirm("Are you sure you want to continue to this page?");

if (answer) {
  console.log("Action confirmed");
} else {
  console.log("Action canceled");
}

function timeOfDay(){
    let time = prompt ('What hour is it? (0-23)'); //17
    let message = ''; //message here is our final response in the return statement based on the control flow recieved from the if and else if conditional statements...

    if (time <= 11) { //sequence it goes.. 1st, compare value receive from user, which is 17 to our parameters, time is less than or equal to 11, 
    // Boolean assessment; computer is going to check if it meets the para or no, True or False; 17 <=, evaluate, false.
    message = 'Good morning!';
}   else if (time <=18){ // T or F, 17 <=18, true , we've found it; 17<=18 is part of the para here and no further execution is needed, 
// and we will return the message that is programmed in this part of the else if statement ; the code is matching the assigned para with the value based in user input.
    message = 'Good Afternoon';
}   else if (time <24) {
    message = 'Good Evening!';
    } else {
    message = 'the hour does not exist';
    }
    return message;// message ='Good afternoon!'
}

function getValidWeight() {
    let weight = Number(prompt("Enter your weight:"));

    if (weight <= 0 || isNaN(weight)) {
        alert("That is not a valid weight. Please try again.");
        return getValidWeight(); // ask again
    } else {
        return weight; // valid input
    }
}

let userWeight = getValidWeight();
console.log("Weight entered:", userWeight);

document.write(("Weight entered:", userWeight) + 'Pounds' + '!');
