'use strict';

// var userName = prompt('What is your name?');
// //console.log('The user name is ' + userName + '!');

// alert('Hello ' + userName);

// // Question One
// let bio = prompt('Please answer yes/no or y/n to my questions. Have you read my bio?');
// bio.toLowerCase;

// //console.log('Let the record show ' + userName + ' have answered my first question.');

// if ((bio === 'yes') || (bio === 'y')){
//   //console.log('Let the record show ' + userName + ' have read my bio');
//   alert('That\'s Greeeaaaat! Now answer the next question.');
// } else {
//   alert('Wrong answer');
  
// }

// // Question two
// let city = prompt('Did I grow up in Brooklyn, NY?');
// city.toLowerCase;

// if ((city === 'yes') || (city === 'y')){
//   //console.log('Let the record show ' + userName + ' knows the city I grew up in.');
//   alert('That\'s correct ' + userName + '. Thank you for knowing this. Move on to the next question.');
// } else {
// alert('Wrong answer');
  
// }

// // Question three
// let vet = prompt('Am I a veteran ' + userName + '?');
// vet.toLowerCase;
// //console.log('Let the record show ' + userName + ' knows I am a veteran.');

// if ((vet === 'yes') || (vet === 'y')){
//   //console.log('Let the record show ' + userName + ' knows I am a veteran');
//   alert('That\'s correct ' + userName + ' you do know more things about me. Move on to the next question.');
// } else {
// alert('Wrong answer');
 
// }

// // Question four

// let work = prompt('Do I work in public health ' + userName + '?');
// work.toLowerCase;
// //console.log('Let the record show ' + userName + ' knows I work in public health.');

// if ((work === 'yes') || (work === 'y')){
//   //console.log('Let the record show ' + userName + ' knows my work history.');
  
//   alert('That\'s correct ' + userName + ' you really know a lot about me. Move on to the next question.');
// } else {

//   alert('Wrong answer');
// }

// // Question five
// let future = prompt('Alright then ' + userName  + ' would you believe me if I told you I\'m from the future?');
// future.toLowerCase;
// //console.log('Let the record show ' + userName + 'knows the truth.');

// if ((future === 'yes') || (future === 'y')){
//   //console.log('Let the record show ' + userName + ' knows this truth.');
  
//   alert('Yowza ' + userName + ' you really are smart.');
// } else {

//   alert('Wrong answer');
// }

// //Question six
// alert('You will now have five chances to guess a number.');

// var guessNumber = 5;
// var myNumber = 7;
// for (var j = 0; j < guessNumber; j++) {
// var userNumber = prompt('I\'m thinking of a number between 1 and 10. Guess what number it is?');
//   if (userNumber > myNumber){
//     alert('Your guess is too high. Please try again.');
//   } else if (userNumber < myNumber){
//   alert('You\'re too low. Please try again.');
//   } else if (userNumber == myNumber) {
//   alert('Ding, Ding, Ding you\'re a winner.');
//   break;
//   }
// }
//   alert('I was thinking of ' + myNumber + '. Thank you for playing ' + userName + '.');

// Question 7
alert('Lastly, you will have 6 chances to guess a color.');
var guess = prompt('Think of a color. Any color.');

var colors = ['fusia', 'orange', 'green', 'pink', 'sky blue'];
var guessNumber = 6;
var correctAnswer = 'fusia';

for (var correctAnswer = ('fuscia');
for (k = 0; k < 6; k++ ){
    if (guess == colors[0]){
      alert('You guessed correctly. The correct color was ' + correctAnswer + '.');
      break;
  } else {
   guess = prompt('Wrong color. Please try again'); 
}
  console.log(j);
} 
alert('Thank you for playing this game ' + userName + '. You\'ve exceeded the number of attempts. The correct answer was '+ answer + ' You were a good sport.');