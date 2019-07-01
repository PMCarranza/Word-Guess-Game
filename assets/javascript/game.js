// array containing words to be guessed

var words = ['baseball', 'football', 'ronaldo', ' joe dimaggio', 'ted williams', 'dodgers', 'barcelona', 'mariners', 'world cup', 'alex morgan', 'mia hamm', 'lionel messi', 'edgar martinez', 'junior', 'ac milan', 'pele', 'seattle reign', 'guatemala', 'refried beans', 'tres leches'];

// piciking a random word

var toGuess = words[Math.floor(Math.random() * words.length)];