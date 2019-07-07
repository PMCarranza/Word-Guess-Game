// array containing words to be guessed w/o spaces for now

var words = ['baseball', 'football', 'ronaldo', 'joedimaggio', 'tedwilliams', 'dodgers', 'barcelona', 'mariners', 'worldcup', 'alexmorgan', 'miahamm', 'romario', 'edgarmartinez', 'junior', 'acmilan', 'pele', 'seattlereign', 'guatemala', 'refriedbeans', 'tresleches'];


// variables needed

var wins = 0;
var losses = 0;
var maxTries = 10;
var answerArray = [];         // empty array to store correct guesses;
var guessedArray = [];
var missedLetters;

// picking a random word

var wordToGuess = words[Math.floor(Math.random() * words.length)];

console.log(wordToGuess + ' / this the random word');

// word randomly picked to be represented by underscores

for (j = 0; j < wordToGuess.length; j++) {
  answerArray[j] = '_';
};

//getting guess from user

document.onkeyup = function (event) {
  var userGuess = event.key;
  var guessedLetters = userGuess.toLowerCase();

  

  // if user's choice does not match the word reduce the # of tries

if (!wordToGuess.split('').includes(userGuess)) {
  maxTries--;
}
  
  // populate array with correct letters chosen

  for (j = 0; j < wordToGuess.length; j++) {
    if (wordToGuess[j] === guessedLetters) {
      console.log('lucky you ' + guessedLetters + ' is found in the word');
      answerArray[j] = guessedLetters;
    }     
  }

  // populate array with choices not in the word to be guessed

  guessedArray.push(guessedLetters);
  
// this is to be able to avoid undefined on guessed letter and populate the latest choice in game
  missedLetters =guessedLetters;

  // checking if answer array matches wordtoGuess --hopefully-   FAILED!




  var currentWord = document.getElementById('current-word');
  var userGuess = document.getElementById('user-guess');
  var guessesLeft = document.getElementById('guesses-left');
  var lettersGuessed = document.getElementById('letters-guessed')
  var guessedLetters = document.getElementById('guessed-letters')
  var winsText = document.getElementById('wins-text');

  // Displays progress by step 

  currentWord.textContent = answerArray.join(" ");
  guessesLeft.textContent = 'You have ' + maxTries + ' guesses to figure it out';
  lettersGuessed.innerHTML = 'Your last choice was ' + missedLetters;
  guessedLetters.innerHTML = 'These are the letters you have selected ' + guessedArray + ' so far';
  winsText.textContent = 'You have guessed ' + wins + ' words, we will see who gets 11 out of 20!';

};
