'use strict';

var userName = prompt('What is your name?');
console.log('The user name is ' + userName + '!');

// Question One
//DONE - ask question y/n or yes or no response - normalize case
var bio = prompt('Please answer \yes\ or \y\ to my questions. Have you read my bio?').toLowerCase();

// I log my result to get proof of life!
console.log('Let the record show ' + userName + ' have answered my first question.');

if (bio === 'yes' || bio === 'y'){
  //DONE - console.log the answer IF IT IS CORRECT in a string concatenation
  //DONE - if it works, comment out console.log, send alert to user
  console.log('Let the record show ' + userName + ' have read my bio');
  alert('That\'s Greeeaaaat!');
} else {
  alert('Please read my bio.');
}

// Question two
//TODO - ask question
var city = prompt('Did I grow up in Brooklyn, NY?').toLowerCase;
//TODO - console.log the answer in a string concatenation
console.log('Let the record show ' + userName + 'know what city I grew up in.');
//TODO - if it works, comment out console.log, send alert to user

if (city === 'yes' || city === 'y'){
  //DONE - console.log the answer IF IT IS CORRECT in a string concatenation
  //DONE - if it works, comment out console.log, send alert to user
  console.log('Let the record show ' + userName + ' knows the city I grew up in.');
  
  alert('That\'s correct ' + userName + 'Thank you for knowing this.');
} else {
  alert('Please read my bio.');
}

// Question three
//TODO - ask question
var vet = prompt('Am I a veteran ' + userName + '?').toLowerCase;
//TODO - console.log the answer in a string concatenation
console.log('Let the record show ' + userName + ' knows I am a veteran.');
//TODO - if it works, comment out console.log, send alert to user

if (vet === 'yes' || vet === 'y'){
  //DONE - console.log the answer IF IT IS CORRECT in a string concatenation
  //DONE - if it works, comment out console.log, send alert to user
  console.log('Let the record show ' + userName + ' knows I am a veteran');
  
  alert('That\'s correct ' + userName + 'you do know more things about me');
} else {
  alert('Please read my bio.');
}

// Question four
//TODO - ask question
var work = prompt('Do I work in public health' + userName + '?').toLowerCase;
//TODO - console.log the answer in a string concatenation
console.log('Let the record show ' + userName + ' knows I work in public health.');
//TODO - if it works, comment out console.log, send alert to user

if (work === 'yes' || work === 'y'){
  //DONE - console.log the answer IF IT IS CORRECT in a string concatenation
  //DONE - if it works, comment out console.log, send alert to user
  console.log('Let the record show ' + userName + ' knows my work.');
  
  alert('That\'s correct ' + userName + 'you really know a lot about me');
} else {
  alert('Please read my bio.');
}

// Question five
//TODO - ask question
var future = prompt('Alright then' + userName + ' since you\'re so smart. Would you believe me if I told you I\'m from the future?').toLowerCase;
//TODO - console.log the answer in a string concatenation
console.log('Let the record show ' + userName + 'knows the truth.');
//TODO - if it works, comment out console.log, send alert to user

if (future === 'yes' || future === 'y'){
  //DONE - console.log the answer IF IT IS CORRECT in a string concatenation
  //DONE - if it works, comment out console.log, send alert to user
  console.log('Let the record show ' + userName + ' knows this truth.');
  
  alert('Yowza ' + userName + 'you really are smart.');
} else {
  alert('Please read my bio.');
}


// var booleanOne = true;  // 1 or 0
// var booleanTwo = false;
// var booleanThree = true;

// if (booleanOne && booleanThree) {
//   console.log('this worked');
// }
// //        true      false           true
// if ((booleanOne || booleanTwo) && booleanThree) {
//   console.log('will this work?');
// }
// if (booleanThree) {
//   console.log('this should totally work!');
// }


// TODO change alert:  thank user, give meaning message with their name?
// alert('Thanks for answering ' + userName + ', ' + homeTown + ' is great!');