'use strict'

var userName = prompt('What is your name?');
//console.log('The user name is ' + userName + '!');

alert('Hello ' + userName);

// Question One
let bio = prompt('Please answer yes/no or y/n to my questions. Have you read my bio?');
bio.toLowerCase;

//console.log('Let the record show ' + userName + ' have answered my first question.');

if ((bio === 'yes') || (bio === 'y')){
  //console.log('Let the record show ' + userName + ' have read my bio');
  alert('That\'s Greeeaaaat! Now answer the next question.');
} else {
  alert('Wrong answer');
  
}

// Question two
let city = prompt('Did I grow up in Brooklyn, NY?');
city.toLowerCase;

if ((city === 'yes') || (city === 'y')){
  //console.log('Let the record show ' + userName + ' knows the city I grew up in.');
  alert('That\'s correct ' + userName + '. Thank you for knowing this. Move on to the next question.');
} else {
alert('Wrong answer');
  
}

// Question three
let vet = prompt('Am I a veteran ' + userName + '?');
vet.toLowerCase;
//console.log('Let the record show ' + userName + ' knows I am a veteran.');

if ((vet === 'yes') || (vet === 'y')){
  //console.log('Let the record show ' + userName + ' knows I am a veteran');
  alert('That\'s correct ' + userName + ' you do know more things about me. Move on to the next question.');
} else {
alert('Wrong answer');
 
}

// Question four

let work = prompt('Do I work in public health ' + userName + '?');
work.toLowerCase;
//console.log('Let the record show ' + userName + ' knows I work in public health.');

if ((work === 'yes') || (work === 'y')){
  //console.log('Let the record show ' + userName + ' knows my work history.');
  
  alert('That\'s correct ' + userName + ' you really know a lot about me. Move on to the next question.');
} else {

  alert('Wrong answer');
}

// Question five
let future = prompt('Alright then ' + userName  + ' would you believe me if I told you I\'m from the future?');
future.toLowerCase;
//console.log('Let the record show ' + userName + 'knows the truth.');

if ((future === 'yes') || (future === 'y')){
  //console.log('Let the record show ' + userName + ' knows this truth.');
  
  alert('Yowza ' + userName + ' you really are smart.');
} else {

  alert('Wrong answer');
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