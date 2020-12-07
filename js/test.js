'use strict';

var userName = prompt('What is your name?');

alert('Hello ' + userName);

// Question One
let bio = prompt('Please answer yes/no or y/n to my questions. Have you read my bio?');
bio.toLowerCase;
if ((bio === 'yes') || (bio === 'y')){
  alert('That\'s Greeeaaaat! Now answer the next question.');
} else {
  alert('Wrong answer');
}
// Question two
let city = prompt('Did I grow up in Brooklyn, NY?');
city.toLowerCase;

if ((city === 'yes') || (city === 'y')){
  alert('That\'s correct ' + userName + '. Thank you for knowing this. Move on to the next question.');
} else {
alert('Wrong answer'); 
}
// Question three
let vet = prompt('Am I a veteran ' + userName + '?');
vet.toLowerCase;
if ((vet === 'yes') || (vet === 'y')){
  alert('That\'s correct ' + userName + ' you do know more things about me. Move on to the next question.');
} else {
alert('Wrong answer');
}
let work = prompt('Do I work in public health ' + userName + '?');
work.toLowerCase;
if ((work === 'yes') || (work === 'y')){
  alert('That\'s correct ' + userName + ' you really know a lot about me. Move on to the next question.');
} else {
  alert('Wrong answer');
}
let future = prompt('Alright then ' + userName  + ' would you believe me if I told you I\'m from the future?');
future.toLowerCase;
if ((future === 'yes') || (future === 'y')){
  alert('Yowza ' + userName + ' you really are smart.');
} else {
  alert('Wrong answer');
}
// Question four
alert('You will now have five chances to guess a number.');
var guessNumber = 5;
var myNumber = 7;
for (var j = 0; j < guessNumber; j++) {
var userNumber = prompt('I\'m thinking of a number between 1 and 10. Guess what number it is?');
  if (userNumber > myNumber){
    alert('Your guess is too high. Please try again.');
  } else if (userNumber < myNumber){
  alert('You\'re too low. Please try again.');
  } else if (userNumber == myNumber) {
  alert('Ding, Ding, Ding you\'re a winner.');
  break;
  }
}
//question five
  alert('I was thinking of ' + myNumber + '. Thank you for playing ' + userName + '.');
alert('Lastly, you will have 6 chances to guess a color.');
var colors = ['fusia', 'orange', 'green', 'pink', 'sky blue'];
var correctAnswer = 'fusia';
var guessNumber = 6;
for (var k = 0; k < 6; k++ ){
  var guess = prompt('Think of a color. Any color.');
    if (guess == colors[0]){
      alert('You guessed correctly. The correct color was ' + correctAnswer + '.');
      break;
  } else if (guess !== correctAnswer){
     guess = prompt('Wrong color. Please try again'); 
  }
}
alert('Thank you for playing this game ' + userName + '. You\'ve exceeded the number of attempts. The correct answer was '+ correctAnswer + ' You were a good sport.');