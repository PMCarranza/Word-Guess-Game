  // array containing words to be guessed w/o spaces for now

  var words = ['baseball', 'football', 'ronaldo', ' joedimaggio', 'tedwilliams', 'dodgers', 'barcelona', 'mariners', 'worldcup', 'alexmorgan', 'miahamm', 'lionelmessi', 'edgarmartinez', 'junior', 'acmilan', 'pele', 'seattlereign', 'guatemala', 'refriedbeans', 'tresleches'];

  
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


  
  //getting guess from user
  
document.onkeyup = function (event) {
    var userGuess = event.key;
    var guessedLetters = userGuess.toLowerCase();
    // maxTries--;
    
    for (j = 0; j < wordToGuess.length; j++) {
        if (wordToGuess[j] === guessedLetters) {
            console.log('lucky you ' + guessedLetters + ' is found in the word');
            answerArray[j] = guessedLetters;
        } else {
            guessedArray[j] = guessedLetters;
        }
}
     maxTries--;
        
      console.log("choice made is " + guessedLetters);
          
  
      // checking if answer array matches wordtoGuess --hopefully-   FAILED!
  
      var currentWord = document.getElementById('current-word');
      var userGuess = document.getElementById('user-guess');
      var guessesLeft = document.getElementById('guesses-left');
      var lettersGuessed = document.getElementById('letters-guessed')
      var guessedLetters = document.getElementById('guessed-letters')
      var winsText = document.getElementById('wins-text');
  
      // Displays progress by step
  
      currentWord.textContent = answerArray;
      guessesLeft.textContent = 'You have ' + maxTries + ' guesses to figure it out';
      lettersGuessed.textContent = 'you have chosen ' + guessedArray + ' so far';
      guessedLetters.textContent = 'Your last guess was ' + guessedArray;      
      winsText.textContent = 'You have guessed ' + wins + ' words, we will see who gets 11 out of 20!';
      
  };
  