var computerChoice = ["b", "c", "e", "h", "i", "k", "m", "o", "p", "s", "t", "v", "w", "y", "z"];
var win = 0;
var loss = 0;

var userLetters = [];
var guessLeft = 8;


var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
console.log("computer guess: "+computerGuess);

function updateScoreboard(win, loss, guessLeft, userLetters) {

	var score = "Wins: " + win + "<br>Looses: " + loss + "<br>Guess left: " + guessLeft + "<p>Your guess so far</p> ";

	document.getElementById("score").innerHTML = score;
	document.getElementById("user-letters").innerHTML = userLetters;
	
}

document.onkeyup = function (event) {

		var userGuess = event.key.toLowerCase();
		
		
		console.log(userGuess);

		if (userGuess === computerGuess) {
			win++;
			console.log("you guessed right!");
		}
		else {
			guessLeft--;
			userLetters.push(userGuess);

			if (guessLeft ===0) {
				loss++;
				console.log("you guessed wrong!");
			}
		}
		
		computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
		console.log("computer guess: "+computerGuess);
		
updateScoreboard(win, loss, guessLeft, userLetters);

}
	

