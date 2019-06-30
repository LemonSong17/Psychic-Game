document.addEventListener('mousemove', e => {
	
	const x = e.pageX;
	const y = e.pageY;
	
	const elm = document.querySelector('.card');
	const coords = elm.getBoundingClientRect();
	
	const elmX = coords.left + (elm.offsetWidth / 2);
	const elmY = coords.top + (elm.offsetHeight / 2);
	
	const angleX = (elmY - y) / 25;
	const angleY = (elmX - x) / -25;
	
	
	elm.style.transform = `rotateX(${angleX}deg)
												 rotateY(${angleY}deg)`;
	
})

//different option for every letter of the alphebet
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Create variables that hold references to the places in the HTML where we want to display things.
var getWins = document.getElementById("wins");
var getLosses = document.getElementById("losses");
var getGuesses = document.getElementById("guesses");
var getUserGuesses = document.getElementById("userGuess");

var wins = 0;
var losses = 0;
var guesses = 9;
var userGuess = 1;
var letters=[]
var computerLetter = "";


//computer choising a letter
function getLetter (){
   computerLetter=alphabet[Math.floor(Math.random() * 26)];
   console.log(computerLetter)
}

getLetter()

//function to store letters guessed
function storeLetters(userChoice) {
   letters.push(userChoice);
   console.log("Your Guesses so far: " + letters.join(", "));
   getUserGuesses.innerHTML = letters.join(", ");
}

function checkKey (userChoice, computerLetter){
   //bullion showing if the user has won (the game)
   if (userChoice == computerLetter ) {
      wins++;
      getWins.innerHTML = wins;
      getGuesses.innerHTML=9
      letters= []
      getUserGuesses.innerHTML=letters;
      console.log("ifStatementIsTrue")
      
   } 
      //showing you guessed the wrong letter, decreasing guess count
   else if   (userChoice != computerLetter) {
      guesses--;
      getGuesses.innerHTML = guesses;
      storeLetters(userChoice)
   }

   // showing if the user has lost the game

   if (guesses === 0) {
      losses++;
      guesses=9
      userGuess= []
      letters= []
      getUserGuesses.innerHTML=letters;
      getLosses.innerHTML = losses;
      getLetter();
   }
   
}
//function showing a key is pushed
document.onkeyup = function(event) {

   //variable storing key that was pressed
   var userChoice = event.key;

   
   //variable storing array containing what the user's choosen
   var userArray = userChoice

   checkKey(userChoice, computerLetter)

}
