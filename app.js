'use strict';


// global variable score counter; increment only for correct answers
var scoreCounter = 0;

// global variable total questions; increment only for every question asked
var totalQuestions = 0;

<<<<<<< HEAD
// ask name
var name = prompt("Tell me your name, please.");
console.log("name: " + name);

// personalized welcome to user from me, includes question 1 y/n
totalQuestions++;
var answer1 = prompt("Thank you. Welcome to my site, " + name + "! I am Bhagirath. Do you mind if I ask you a few questions. Each correct answer is worth points! Ready? Question 1:  Ready to begin? Answer y/n or yes/no");

// lower case answer 1
answer1 = answer1.toLowerCase();

// if yes, positive message; if no, too bad message
if (answer1 === "yes" || answer1 === "y") {
  console.log("You answered yes. So you ARE ready to begin?");
  alert("You answered yes. So you ARE ready to begin?");
}
else if (answer1 === "no" || answer1 === "n") {
  console.log("You replied no; so you don't mind. Let's begin!");
  alert("You replied no; so you don't mind. Okay, then let's get started!");
  scoreCounter++;
  console.log("score: " + scoreCounter);
}
else {
  console.log("No answer -  y/n answer");
  alert("That is not optional! I'm still going to ask you the questions. :~)!!!");
}
=======
// ask for name
var questionOne = function() {
  var name = prompt('Tell me your name, please.');
  console.log('name: ' + name);

  // personalized welcome to user from me, includes question 1 y/n
  totalQuestions++;
  var answer1 = prompt('Thank you. Welcome to my site, ' + name + '! I am Bhagirath. Do you mind of I ask you a few questions. Each correct answer is worth points! Ready? Question 1:  Ready to begin? Answer y/n or yes/no');

  // lower case answer 1
  answer1 = answer1.toLowerCase();
>>>>>>> 5ac5eddc5d462d4de987fde93ec28ac3fb0082d8

  // if yes, positive message; if no, too bad message
  if (answer1 === 'yes' || answer1 === 'y') {
    console.log('You replied yes. So you DO mind?');
    alert('You replied yes. So you DO mind?');
  }
  else if (answer1 === 'no' || answer1 === 'n') {
    console.log('You replied no; you don\'t mind. Let\'s begin!');
    alert('You replied no; you didn\'t mind. Okay then let\'s get started!');
    scoreCounter++;
    console.log('score: ' + scoreCounter);
  }
  else {
    console.log('No answer -  y/n answer');
    alert('That is not optional! I\'m still going to ask you the questions. >:) ');
  }
};
questionOne();



// question 2 y/n
var questionTwo = function() {
  totalQuestions++;
  var answer2 = prompt('Question 2: Am I from Uganda? y/n or yes/no');

<<<<<<< HEAD
// if 2 yes, say correct; if no, educate
if (answer2 === "yes" || answer2 === "y") {
  console.log("You answered yes; you're correct!");
  alert("You said yes; you're correct! I was born and raised in Uganda!");
  scoreCounter++;
  console.log("score: " + scoreCounter);
}
else if (answer2 === "no" || answer2 === "n") {
  console.log("You answered no. I hate to disappoint you! I am a second generation Ugandan!");
  alert("You said no. I hate to disappoint you! I am a second generation Ugandan");
}
else {
  alert("Should have guessed!");
  console.log("Didn't give y/n answer");
}
=======
  // lower case answer 2
  answer2 = answer2.toLowerCase();
>>>>>>> 5ac5eddc5d462d4de987fde93ec28ac3fb0082d8

  // if 2 yes, say correct; if no, educate
  if (answer2 === 'yes' || answer2 === 'y') {
    console.log('You answered yes; you\'re correct!');
    alert('You said yes; you\'re correct! I was born and raised in Uganda!');
    scoreCounter++;
    console.log('score: ' + scoreCounter);
  }
  else if (answer2 === 'no' || answer2 === 'n') {
    console.log('You answered no. I hate to disappoint you! I am a second generation Ugandan!');
    alert('You said no. I hate to disappoint you! I am a second generation UgandanSorry! I\'ve been playing for a little over 10 years! Time flies.');
  }
  else {
    alert('???');
    console.log('Didn\'t give y/n answer');
  }
};
questionTwo();


// question 3 y/n
<<<<<<< HEAD
totalQuestions++;
var answer3 = prompt("Question 3: Did I serve in the military? y/n or yes/no");
=======
var questionThree = function() {
  totalQuestions++;
  var answer3 = prompt('Question 3: Did I go to the University of Oregon? y/n or yes/no');
>>>>>>> 5ac5eddc5d462d4de987fde93ec28ac3fb0082d8

  // lower case answer 3
  answer3 = answer3.toLowerCase();

<<<<<<< HEAD
// if 3 yes, educate; if no, correct
if (answer3 === "yes" || answer3 === "y") {
  console.log("You answered yes. Correct!!! I honorably served in the U S Air Force!");
  alert("You answered yes. Correct - I honorably served in the U S Air Force!");
}
else if (answer3 === "no" || answer3 === "n") {
  console.log("You answered no. WRONG! It was an honor to serve!!!!");
  alert("You answered no. WRONG! It was an honor to serve!!!");
  scoreCounter++;
  console.log("score: " + scoreCounter);
}
else {
  console.log("Didn't give y/n answer");
  alert("Not even a guess?!");
}
=======
  // if 3 yes, educate; if no, correct
  if (answer3 === 'yes' || answer3 === 'y') {
    console.log('You replied yes. WRONG - $*%& the Ducks!!! I went to the University of Washington. GO HUSKIES!');
    alert('You replied yes. WRONG - $*%& the Ducks!!! I went to the University of Washington. GO HUSKIES!');
  }
  else if (answer3 === 'no' || answer3 === 'n') {
    console.log('You replied no. Correct! Go Huskies!');
    alert('You replied no. Correct! Go Huskies!');
    scoreCounter++;
    console.log('score: ' + scoreCounter);
  }
  else {
    console.log('Didn\'t give y/n answer');
    alert('???');
  }
};
questionThree();
>>>>>>> 5ac5eddc5d462d4de987fde93ec28ac3fb0082d8





// question 4 y/n
<<<<<<< HEAD
totalQuestions++;
var answer4 = prompt("Question 4: Am I the first in my family to serve in the Armed Forces? y/n or yes/no");
=======
var questionFour = function() {
  totalQuestions++;
  var answer4 = prompt('Question 4: Do I have a younger brother? y/n or yes/no');
>>>>>>> 5ac5eddc5d462d4de987fde93ec28ac3fb0082d8

  // lower case answer 4
  answer4 = answer4.toLowerCase();

<<<<<<< HEAD
// if 4 yes, correct; if no, educate
if (answer4 === "yes" || answer4 === "y") {
  console.log("You said yes. YOU ARE CORRECT! I am the first one to serve in the military.");
  alert("You said yes. YOU ARE CORRECT! I am the first one to serve in the military.");
  scoreCounter++;
  console.log("score: " + scoreCounter);
}
else if (answer4 === "no" || answer4 === "n") {
  console.log("You answered no. You are Wrong - I was a career military man.");
  alert("You answered no. You are Wrong - I was a career military man.");
}
else {
  console.log("Didn't give y/n answer");
  alert("Why didn't you guess?");
}
=======
  // if 4 yes, correct; if no, educate
  if (answer4 === 'yes' || answer4 === 'y') {
    console.log('You replied yes. Correct! We are a 10 year difference.');
    alert('You replied yes. Correct! We are a 10 year difference.');
    scoreCounter++;
    console.log('score: ' + scoreCounter);
  }
  else if (answer4 === 'no' || answer4 === 'n') {
    console.log('You replied no. Wrong - he\'s younger by 10 years.');
    alert('You replied no. Wrong - he\'s younger by 10 years.');
  }
  else {
    console.log('didn\'t give y/n answer');
    alert('???');
  }
};
questionFour();
>>>>>>> 5ac5eddc5d462d4de987fde93ec28ac3fb0082d8





// question 5 y/n
<<<<<<< HEAD
totalQuestions++;
var answer5 = prompt("Question 5: Am I a foodie? y/n or yes/no");
=======
var questionFive = function() {
  totalQuestions++;
  var answer5 = prompt('Question 5: Do I love the show Breaking Bad?y/n or yes/no');
>>>>>>> 5ac5eddc5d462d4de987fde93ec28ac3fb0082d8

  // lower case answer 5
  answer5 = answer5.toLowerCase();

  // if 5 yes, correct; if no, educate
  if (answer5 === 'yes' || answer5 === 'y') {
    console.log('Replied yes');
    alert('You replied yes. Correct! No more half measures, Walter.');
    scoreCounter++;
    console.log('score: ' + scoreCounter);
  }
  else if (answer5 === 'no' || answer5 === 'n') {
    console.log('Replied no');
    alert('You replied no. Wrong! Best show ever, man.');
  }
  else {
    console.log('didn\'t give y/n answer');
    alert('???');
  }
};
questionFive();

<<<<<<< HEAD
// if 5 yes, correct; if no, educate
if (answer5 === "yes" || answer5 === "y") {
  console.log("Replied yes");
  alert("You answered yes. CORRECT! I love trying foods from different cultures - yummy!");
  scoreCounter++;
  console.log("score: " + scoreCounter);
}
else if (answer5 === "no" || answer5 === "n") {
  console.log("Replied no");
  alert("You answered no. Wrong! Love to eat delicious, tasty food.");
}
else {
  console.log("Didn't give y/n answer");
  alert("Should have taken a stab at it!");
}

=======

// final message
console.log('final message');
alert('Thanks for answering (or not answering) my questions, ' + name + '! Enjoy my website.');
>>>>>>> 5ac5eddc5d462d4de987fde93ec28ac3fb0082d8




// last message
console.log("last word");
alert("Thank you for participating in my questionnaire, whether you answered questions or not, " + name + "! Have fun on the website.");





// 6th question:
// while input is not numeric input, prompt user for numeric input
// 4 guesses permitted
// if guess incorrect, alert must say too high or too low
// after attempts exhausted, tell user correct answer

// prep for question 6




<<<<<<< HEAD
alert(" Hold on, nearly slipped my mind! Time to play the guessing game! >:) Question 6: You have 4 chances to guess a number from a random number generator.")
=======
alert('Wait, I almost forgot! Time for some guessing games! >:) Question 6: You have 4 guesses to guess a number from a random number generator.');
>>>>>>> 5ac5eddc5d462d4de987fde93ec28ac3fb0082d8
totalQuestions++;





function numberGuesser() {
  console.log(guessNumber);
  // initialize some variables for prepping guessing number game: guessesleft, guessnumber, correctnumber
  var guessesLeft = 4;
  var guessNumber;
  var correctNumber;

  // generate random float, multiply by 10, and round down to generate random number

  var randomNumberZeroToOne = Math.random();
  console.log('Random number 0-1 generated: ' + randomNumberZeroToOne);
  correctNumber = Math.ceil((10 * (randomNumberZeroToOne)));
  console.log('Correct number: ' + correctNumber);

  // prompt user at least once for a guess
  do {

    // prompt for input
<<<<<<< HEAD
    guessNumber = prompt("Pick a number between 1-10");
=======
    guessNumber = prompt('Take your guess! 1-10 only');
>>>>>>> 5ac5eddc5d462d4de987fde93ec28ac3fb0082d8

    // convert number to integer
    guessNumber = parseInt(guessNumber);
    console.log('guessNumber: ' + guessNumber);

    // if guess too low, alert too low and increment guesses, if guess too high, alert too high and increment guesses, if NaN, alert ?, else alert correct and break out of do/while
    if (guessNumber < correctNumber) {
      guessesLeft--;
      alert('Too low! ' + guessesLeft + ' guesses remaining.');
      console.log('guesses left: ' + guessesLeft);
    }
    else if (guessNumber > correctNumber) {
      guessesLeft--;
      alert('Too high! ' + guessesLeft + ' guesses remaining.');
      console.log('guesses left: ' + guessesLeft);
    }
    else if (Number.isNaN(guessNumber) === true) {
      guessesLeft--;
      alert('??? ' + guessesLeft + ' guesses remaining.');
      console.log('guesses left: ' + guessesLeft);
    }
    // correct
    else {
<<<<<<< HEAD
      alert("GOOD GUESS!!! T'was " + guessNumber + ". 5 points for team!!");
=======
      alert('NICE GUESS!!! It was ' + guessNumber + '. 5 points to Gryffindor!!');
>>>>>>> 5ac5eddc5d462d4de987fde93ec28ac3fb0082d8
      scoreCounter++;
      console.log('score: ' + scoreCounter);
      break;
    }

    if (guessesLeft === 0) {
<<<<<<< HEAD
      alert("Sorry! No more guesses. The correct number is " + correctNumber);
=======
      alert('Sorry! Out of guesses. The correct number is ' + correctNumber);
>>>>>>> 5ac5eddc5d462d4de987fde93ec28ac3fb0082d8
      break;
    }

  }
  while (guessNumber !== correctNumber && guessesLeft > 0);
}
numberGuesser();








<<<<<<< HEAD
alert("Happy to get that over with? How about one last game.");
=======
alert('Glad you got that out of the way, huh? Time for one last game.');
>>>>>>> 5ac5eddc5d462d4de987fde93ec28ac3fb0082d8

function musicGuesser() {
  // 7th question:
  // multiple correct answers stored in an array
  // 6 guesses allowed to guess correct answer
  // ends when user guesses correct answer or if run out of attempts
  // after, display all correct answers

<<<<<<< HEAD
  alert("Question 7: For this, you'll try to guess one of my top 10 bands/musicians.");
  totalQuestions++;

  // initialize array of bands, guesses left, and flag to break out
  var favoriteBandsList = ["The Beatles", "B B King", "Kishore Kumar", "Lata Mangeshkar", "Cream - Eric Clapton", "The Allman Brothers", "Queen - Freddie Mercury", "David Sanborn", "Lynyrd Skynyrd", "Grand Funk Railroad"];
=======
  alert('Question 7: This time, you\'re going to guess one of my top 10 favorite bands/artists.');
  totalQuestions++;

  // initialize array of bands, guesses left, and flag to break out
  var favoriteBandsList = ['The Beatles', 'Jimi Hendrix', 'Led Zeppelin', 'Van Halen', 'Queen', 'Eric Clapton', 'Tame Impala', 'Elton John', 'Billy Joel', 'Muse'];
>>>>>>> 5ac5eddc5d462d4de987fde93ec28ac3fb0082d8

  // 6 guesses
  var bandGuessesLeft = 6;

  // testing array has string values
  console.log('array band list length: ' + favoriteBandsList.length);
  for (var i = 0; i < favoriteBandsList.length; i++) {
    console.log('band name at array[' + i + ']: ' + favoriteBandsList[i]);
  }

  // set flag to false
  var correctGuessExit = false;

  do {

    // prompt for favorite band
<<<<<<< HEAD
    var guessBand = prompt("What/who is one of my top 10 bands/musicians? " + bandGuessesLeft + " guesses remaining. Capitalization and formatting matter!");
    console.log("guessed band name: " + guessBand);
=======
    var guessBand = prompt('What\'s one of my favorite bands/artists? ' + bandGuessesLeft + ' guesses remaining. Capitalization and formatting matter!');
    console.log('guessed band name: ' + guessBand);
>>>>>>> 5ac5eddc5d462d4de987fde93ec28ac3fb0082d8

    // lowercase input string for checking answer
    var guessBandLowerCase = guessBand.toLowerCase();

    // more initializing variables
    var favoriteBandLowerCase;

    // run through array to check string match between guess and array; if match, switch flag to true and break out; else try again and increment guesses
    for (var i = 0; i < favoriteBandsList.length; i++) {

      var ithBand = favoriteBandsList[i];
      favoriteBandLowerCase = ithBand.toLowerCase();

      console.log('.tolowercase applied to ith band: ' + ithBand.toLowerCase());
      console.log('variable favoriteBandLowerCase for lower cased favorite band[i]: ' + favoriteBandLowerCase);
      console.log('flag before check: ' + correctGuessExit);

      if (guessBandLowerCase === favoriteBandLowerCase) {

        correctGuessExit = true;
        console.log('response correct: flag changed to ' + correctGuessExit);

<<<<<<< HEAD
        alert("WELL DONE!" + favoriteBandsList[i] + ". Rock on!");
        console.log("array match: " + favoriteBandsList[i]);
=======
        alert('NICE! I love ' + favoriteBandsList[i] + '. Rock on!');
        console.log('array match: ' + favoriteBandsList[i]);
>>>>>>> 5ac5eddc5d462d4de987fde93ec28ac3fb0082d8

        scoreCounter++;
        console.log('score: ' + scoreCounter);

        break;

      }
    }

    // if flag is changed to true, break out of do-while; else redo the loop
    if (correctGuessExit === true) {
      console.log('break out of do-while because flag is: ' + correctGuessExit);
      break;
    }

    else {

      bandGuessesLeft--;

      // if guesses > 0, redo the loop
      if (bandGuessesLeft !== 0) {
<<<<<<< HEAD
        alert("Nope, guess again!");

        console.log("guesses left nope guess again: " + bandGuessesLeft);
=======
        alert('Nope, try again!');

        console.log('guesses left nope try again: ' + bandGuessesLeft);
>>>>>>> 5ac5eddc5d462d4de987fde93ec28ac3fb0082d8
      }

      // if out of guesses, break out of loop
      if (bandGuessesLeft === 0) {
<<<<<<< HEAD
        alert("Too bad, no more guesses!");

        console.log("guesses left too bad no more guesses: " + bandGuessesLeft);
=======
        alert('Sorry, out of guesses!');

        console.log('guesses left sorry out of guesses: ' + bandGuessesLeft);
>>>>>>> 5ac5eddc5d462d4de987fde93ec28ac3fb0082d8
        break;
      }

    }

  }
  while (bandGuessesLeft > 0 && favoriteBandLowerCase !== guessBandLowerCase);


  // display top 10 bands
  // for loop iterating through array, access each element 0-9
  // store ith element of array in a variable
  // concatenate that variable to an empty list
  // repeat until i is at 10th string
  // if on the very first iteration, add the first element to the empty list
  // if on any iteration except the 2nd to last and, just add commas after the current list
  // if on the 2nd to last iteration, add an "and" after the current list
  // when on the last iteration, add the last band to the list and a period


  var listOfBandsSoFar = '';
  console.log('initialize list of bands: ' + listOfBandsSoFar);
  for (var i = 0; i < favoriteBandsList.length; i++) {
    var currentElementInArray = favoriteBandsList[i];

    if (i === 0) {
      listOfBandsSoFar = listOfBandsSoFar + currentElementInArray;
      console.log('listOfBandsSoFar at ' + i + 'th iteration: ' + listOfBandsSoFar);
      continue;
    }

    else if (i === (favoriteBandsList.length - 1)) {
      listOfBandsSoFar = listOfBandsSoFar + ' and ' + currentElementInArray + '.';
      console.log('listOfBandsSoFar at ' + i + 'th iteration: ' + listOfBandsSoFar);
      continue;
    }

    else if (i < favoriteBandsList.length && i !== favoriteBandsList.length) {
      listOfBandsSoFar = listOfBandsSoFar + ', ' + currentElementInArray;
      console.log('listOfBandsSoFar at ' + i + 'th iteration: ' + listOfBandsSoFar);
      continue;
    }
  }
<<<<<<< HEAD
  alert("My Top 10 Bands/Musicians: " + listOfBandsSoFar);
=======
  alert('My 10 favorite bands are: ' + listOfBandsSoFar);
>>>>>>> 5ac5eddc5d462d4de987fde93ec28ac3fb0082d8
}

musicGuesser();






// display points earned out of total points
<<<<<<< HEAD
alert("You earned " + scoreCounter + "/" + totalQuestions + " right.");
console.log("score: " + scoreCounter + "/" + totalQuestions); 
=======
alert('You got ' + scoreCounter + '/' + totalQuestions + ' right.');
console.log('score: ' + scoreCounter + '/' + totalQuestions);
>>>>>>> 5ac5eddc5d462d4de987fde93ec28ac3fb0082d8
