  // array containing words to be guessed w/o spaces for now

var words = ['baseball', 'football', 'ronaldo', ' joedimaggio', 'tedwilliams', 'dodgers', 'barcelona', 'mariners', 'worldcup', 'alexmorgan', 'miahamm', 'lionelmessi', 'edgarmartinez', 'junior', 'acmilan', 'pele', 'seattlereign', 'guatemala', 'refriedbeans', 'tresleches'];

var valid = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// variables needed

var wins = 0;
var losses = 0;
var triesLeft = 10;
var answerArray = [];         // empty array to store correct guesses;
var guessedArray = [];


// picking a random word

var wordToGuess = words[Math.floor(Math.random() * words.length)];

console.log(wordToGuess + ' / this the random word');


document.onkeyup = function (event) {
    var userGuess = event.key;
    var guessedLetters = userGuess.toLowerCase();

    for (i = 0; i < valid; i++) {
        if (valid[i] !== guessedLetters) {
            alert('That was not a letter, please chose a letter');
        }
    }

    for (j = 0; j < wordToGuess.length; j++){
        if (wordToGuess[j] === guessedLetters) {
            console.log('you found one match');
            answerArray[j] = guessedLetters;
    }
    for (k = 0; k < wordToGuess.length; k++){
        if (wordToGuess[k] !== guessedLetters){
            guessedArray[k] = guessedLetters;
        }
    }
    }
    console.log("choice made is " + userGuess);

        
    triesLeft--;


    var userGuess = document.getElementById('user-guess');
    var guessesLeft = document.getElementById('guesses-left');
    var winsText = document.getElementById('wins-text');
    var lettersGuessed = document.getElementById('letters-guessed');
    var guessedLetters = document.getElementById('guessed-letters');
    var currentWord = document.getElementById('current-word');
    


    // Displays progress by step

    guessesLeft.textContent = 'You have ' + triesLeft + ' guesses to figure it out';
    guessedLetters.textContent = 'These are the letters you have tried: ' + guessedLetters;
    lettersGuessed.textContent = 'Your last guess was: ' + guessedLetters;
    winsText.textContent = 'You have guessed ' + wins + ' words, we will see who gets 11 out of 20!';
    currentWord.textContent = answerArray;
    guessedLetters.textContent = 'Wrong letters you have chosen so far: ' + guessedArray;
    
};

