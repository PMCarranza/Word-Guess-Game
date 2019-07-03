// array containing words to be guessed

var words = ['baseball', 'football', 'ronaldo', ' joe dimaggio', 'ted williams', 'dodgers', 'barcelona', 'mariners', 'world cup', 'alex morgan', 'mia hamm', 'lionel messi', 'edgar martinez', 'junior', 'ac milan', 'pele', 'seattle reign', 'guatemala', 'refried beans', 'tres leches'];


// variables needed

var wins = 0;
var losses = 0;
var triesLeft = 10;
var triesUsed = 0;

// variables marching the html

var instructions = document.getElementById('instructions');
var currentWord = document.getElementById('current-word');
var userGuess = document.getElementById('user-guess');
var guessesLeft = document.getElementById('guesses-left');
var guessesUsed = document.getElementById('guesses-used');
var lettersGuessed = document.getElementById('letters-guessed');
var winsText = document.getElementById('wins-text');
var lossesText = document.getElementById('losses-text');


// picking a random word

var wordToGuess = words[Math.floor(Math.random() * words.length)];

console.log(wordToGuess + ' / this the random word');

// this is the word randomly selected

var answer = [];
// for (var i = 0; i < wordToGuess.length; i++); {
//     answer[i] = '_';
//     console.log(answer + 'this is the guessed letter');
// } 
// var lettersLeftInGuess = wordToGuess.length;

// this runs when a key is pressed and logs the letter guessed

document.onkeyup = function (event) {
var guessed = event.key;
    var guessedLetters = guessed.toLowerCase();

    if (guessedLetters.indexOf(wordToGuess) !== -1) {
        
        for (var i = 0; i < wordToGuess.length; i++); {
            answer.push = '';

            if (guessedLetters[i] === wordToGuess)
                guessedLetters[i] = guessedLetters[i];
        }
                
        console.log(answer + 'this is the guessed letter');
    } 

    

    // for (var j = 0; j < wordToGuess; j++){
    //     if (wordToGuess[j] === guessed) {
    //         answer.push[j] = guessed;
    //     console.log(guessed + 'is this the guess???')
    //     }
        
    // }
   
    console.log("choice made is " + guessedLetters);
    triesUsed++;
    triesLeft--;

    


// if (lettersLeftInGuess > 0) {
//     console.log(answer.join(' ') + 'this should add the letters');
// }
//     lettersLeftInGuess = wordToGuess.length-triesUsed;


    console.log(triesLeft + ' guesses left');
    console.log(triesUsed + ' guesses used');




    
    
    // Displays progress by step

    guessesLeft.textContent = 'You have ' + triesLeft + ' guesses to figure it out';
    userGuess.textContent = 'Your last guess was: ' + guessed;
    lettersGuessed.textContent = 'These are the letters you have tried: ' + guessedLetters;
    winsText.textContent = 'You have guessed ' + wins + ' words, we will see who gets 11 out of 20!'
    
};

