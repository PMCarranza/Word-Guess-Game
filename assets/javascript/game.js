  // array containing words to be guessed w/o spaces for now

var words = ['baseball', 'football', 'ronaldo', ' joedimaggio', 'tedwilliams', 'dodgers', 'barcelona', 'mariners', 'worldcup', 'alexmorgan', 'miahamm', 'lionelmessi', 'edgarmartinez', 'junior', 'acmilan', 'pele', 'seattlereign', 'guatemala', 'refriedbeans', 'tresleches'];


var valid = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// variables needed

var wins = 0;
var losses = 0;
var triesLeft = 10;
var answerArray = [];         // empty array to store correct guesses;
var guessedArray = [];
var guessedWord;

// picking a random word

var wordToGuess = words[Math.floor(Math.random() * words.length)];

console.log(wordToGuess + ' / this the random word');

// var lettersGuessed = wordToGuess.length;   //   do i need this???????

// creating the array with underscores - hopefully -

for (var l = 0; l < wordToGuess; l++){
    answerArray[l] = ['_'];
}


//getting guess from user

document.onkeyup = function (event) {
    var userGuess = event.key;
    var guessedLetters = userGuess.toLowerCase();
      triesLeft--;

    // this is to check if the guess is a letter
    
    // for (i = 0; i < valid; i++) {
    //     if (valid[i] !== guessedLetters) {
    //         alert('That was not a letter, please chose a letter');
    //     }
    // }

    for (j = 0; j < wordToGuess.length; j++){
        if (wordToGuess[j] === guessedLetters) {
            console.log('lucky you ' + guessedLetters + ' is found in the word');
            answerArray[j] = guessedLetters;
    }
    for (k = 0; k < wordToGuess.length; k++){
        if (wordToGuess[k] !== guessedLetters){
            guessedArray[k] = guessedLetters;
        }
    }
      
    }
    console.log("choice made is " + guessedLetters);

        
    

    // checking if answer array matches wordtoGuess --hopefully--
    guessedWord = answerArray.toString();
    console.log('this is the guessed word: ' + guessedWord);
    
    if (guessedWord === wordToGuess && triesLeft === 0); {
        wins++;
    }

    var currentWord = document.getElementById('current-word');
    var userGuess = document.getElementById('user-guess');
    var guessesLeft = document.getElementById('guesses-left');
    var lettersGuessed = document.getElementById('letters-guessed');
    var guessedLetters = document.getElementById('guessed-letters');
    var winsText = document.getElementById('wins-text');
    


    // Displays progress by step

    currentWord.textContent = answerArray;
    guessesLeft.textContent = 'You have ' + triesLeft + ' guesses to figure it out';
    lettersGuessed.textContent = 'These are the letters you have chosen so far: ' + guessedArray;
    
    guessedLetters.textContent = 'Your last guess was: ' + guessedLetters;
    
    winsText.textContent = 'You have guessed ' + wins + ' words, we will see who gets 11 out of 20!';
    
};

