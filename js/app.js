'use strict'

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

// Question four
let work = prompt('Do I work in public health ' + userName + '?');
work.toLowerCase;
if ((work === 'yes') || (work === 'y')){  
  alert('That\'s correct ' + userName + ' you really know a lot about me. Move on to the next question.');
} else {
  alert('Wrong answer');
}

// Question five
let future = prompt('Alright then ' + userName  + ' would you believe me if I told you I\'m from the future?');
future.toLowerCase;
if ((future === 'yes') || (future === 'y')){  
  alert('Yowza ' + userName + ' you really are smart.');
} else {
  alert('Wrong answer');
}

alert('You will now have five chances to guess a number between 1 and 10');

var answer = 8;
var guess = prompt('So what\'s your guess?');
var counter = 0;
var maxTries = 4;
var i;
for (i = 0; i < 4; i++ ){
    if (answer == guess){
      alert('You guessed correctly. The correct answer was ' + answer);
        break;
    } else {
     guess = prompt('Wrong answer. Please try again'); 
//      counter += 1
// } if (counter > i++){
//   document.write('You have no more tries left. The correct answer is ' + answer);
//   break;
}
    console.log(i);
}
alert('Thank you for playing this game ' + userName + '. You\'ve exceeded the number of attempts. The correct answer was '+ answer + ' You were a good sport.');