// array containing words to be guessed w/o spaces for now

var words = ['baseball', 'football', 'ronaldo', 'joedimaggio', 'tedwilliams', 'dodgers', 'barcelona', 'mariners', 'worldcup', 'alexmorgan', 'miahamm', 'romario', 'edgarmartinez', 'junior', 'acmilan', 'pele', 'seattlereign', 'guatemala', 'refriedbeans', 'tresleches', 'forgiveness', 'justice', 'acceptance', 'bondad', 'amor'];

    // variables needed
var wins = 0;
var losses = 0;
var maxTries = 0;
var answerArray = [];         // empty array to store correct guesses;
var guessedArray = [];
var missedLetters ;
var wordToGuess;

    // picking a random word
var wordToGuess = words[Math.floor(Math.random() * words.length)];
console.log(wordToGuess + ' / this the random word');

// word randomly picked to be represented by underscores
for (j = 0; j < wordToGuess.length; j++) {
  answerArray[j] = '_';
};

//getting guess from user
  document.onkeyup = function (event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
      var userGuess = event.key;
      var guessedLetters = userGuess.toLowerCase();
    } else {
      alert('letters only');
    }

    // if user's choice does not match the word reduce the # of tries
    if (!wordToGuess.split('').includes(userGuess)) {
      maxTries++;
    }
  
    // container of image to be swapped on wrong guesses
    document.getElementById('gallows').src = '';
  
    // populate array with correct letters chosen
    for (j = 0; j < wordToGuess.length; j++) {
      if (wordToGuess[j] === guessedLetters) {
        console.log('lucky you ' + guessedLetters + ' is found in the word');
        answerArray[j] = guessedLetters;
      }
    }

  // Hiding wining/lossing images and press any key text
  document.getElementById('any-key').style.cssText = 'display: none';
  document.getElementById('instructions-text').style.cssText= 'display: none';

  document.getElementById('last').style.cssText = 'display: none';
  document.getElementById('iwon').style.cssText = 'display: none';


    // populate array with choices not in the word to be guessed
  guessedArray.push(guessedLetters);

    // swapping image on wrong guess
  
  function swap() {
    document.getElementById('gallows').src = 'assets/images/hung' + (maxTries) + '.png';
  }
    swap();
    


if (wordToGuess===answerArray.join('') && maxTries < 10) {
  wins++;
  document.getElementById('gallows').style.cssText = 'display:none';
  document.getElementById('iwon').style.cssText = 'display:block';
  reStart();
} else if (maxTries >= 10) {
  losses++;
  document.getElementById('gallows').style.cssText = 'display:none';
  document.getElementById('last').style.cssText = 'display:block';
  reStart();
}

// this is to be able to avoid undefined on guessed letter and populate the latest choice in game
  missedLetters =guessedLetters;

    // assignning variable to html ids
  var currentWord = document.getElementById('current-word');
  var userGuess = document.getElementById('user-guess');
  var guessesLeft = document.getElementById('guesses-left');
  var lettersGuessed = document.getElementById('letters-guessed')
  var guessedLetters = document.getElementById('guessed-letters')
  var winsText = document.getElementById('wins-text');
  var lossesText = document.getElementById('losses-text');

  // Displays progress by step 
        
  currentWord.textContent = answerArray.join(" ");
  guessesLeft.textContent = 'You have used ' + maxTries + ' out of 10 chances';
  lettersGuessed.innerHTML = 'Your last choice was ' + missedLetters;
  guessedLetters.innerHTML = 'These are the letters you have selected ' + guessedArray + ' so far';
  winsText.textContent = 'You have guessed ' + wins + ' words, we will see who gets 11 out of 20!';
  lossesText.textContent = 'You have won ' + wins + ' while I have won ' + losses;
  };

  function reStart() {
    setTimeout(function(){
        location.reload();
    }, 5000);
};