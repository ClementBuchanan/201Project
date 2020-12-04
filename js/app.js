'use strict';

function usr() {
  var userName = prompt('What is your name?');
  alert('Hello ' + userName);
}
usr();

// Question One
function biology() {
  let bio = prompt('Please answer yes/no or y/n to my questions. Have you read my bio?');
  bio.toLowerCase;
  if ((bio === 'yes') || (bio === 'y')) {
    alert('That\'s Greeeaaaat! Now answer the next question.');
  } else {
    alert('Wrong answer. You have not read my bio');
  }
}
biology();

// Question two
function city1() {
  let city = prompt('Did I grow up in Brooklyn, NY?');
  city.toLowerCase;
  if ((city === 'yes') || (city === 'y')) {
    alert('That\'s correct ' + userName + '. Thank you for knowing this. Move on to the next question.');
  } else {
    alert('Wrong answer. You have to read it ' + userName + '.');
  }
}
city1();

// Question three
function veteran() {
  let vet = prompt('Am I a veteran ' + userName + '?');
  vet.toLowerCase;
  if ((vet === 'yes') || (vet === 'y')) {
    alert('That\'s correct ' + userName + ' you do know more things about me. Move on to the next question.');
  } else {
    alert('Awe jeez that\'s the wrong answer again.');
  }
}
veteran();

// Question four
function work2() {
  let work = prompt('Do I work in public health ' + userName + '?');
  work.toLowerCase;
  if ((work === 'yes') || (work === 'y')) {
    alert('That\'s correct ' + userName + ' you really know a lot about me. Move on to the next question.');
  } else {
    alert('Hmm!! Please read it.');
  }
}
work2();

// Question five
function future2() {
  let future = prompt('Alright then ' + userName + ' would you believe me if I told you I\'m from the future?');
  future.toLowerCase;
  if ((future === 'yes') || (future === 'y')) {
    alert('Yowza ' + userName + ' you really are smart.');
  } else {
    alert('That\'s still the wrong answer');
  }
}
future2();

// Question 6
function alert2() {
  alert('You will now have five chances to guess a number between 1 and 10');
}
alert2();

function answer2() {
  var answer = 8;
  var guess = prompt('So what\'s your guess?');
  var i;
  for (i = 0; i < 4; i++) {
    if (answer === guess) {
      alert('You guessed correctly. The correct answer is ' + answer);
      break;
    } else {
      guess = prompt('Wrong answer. Please try againOK. Now you\'re just been difficult. Let\'s move on.');
    }
    console.log(i);
  }
}
answer2();

// Question 7
// alert('Lastly, you will have 6 chances to guess a color');
// var guess = prompt('Think of a color. Any color.');

// var colors = ['fusia', 'dark grey', 'blood red', 'orange', 'green', 'pink', 'sky blue'];
// var guesses = 6;
// var correctAnswer = false;

// console.log('colors');

// for (var correctAnswer = ('fuscia');
//   for (j = 0; j < 6; i++ ){
//     if (guess == colors[1]){
//       alert('You guessed correctly. The correct color was ' + correctAnswer + '.');
//       break;
//   } else {
//    guess = prompt('Wrong color. Please try again'); 
// }
//   console.log(j);
// } 
// alert('Thank you for playing this game ' + userName + '. You\'ve exceeded the number of attempts. The correct answer was '+ answer + ' You were a good sport.');
