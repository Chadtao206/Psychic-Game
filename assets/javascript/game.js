var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var win = 0;
var lose = 0;
var tried = [];
var tries = 10;

// Computer choose random letter.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log("Computer Guessed " + computerGuess);
// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
    // Determines which key was pressed.
    var userGuess = event.key;
    // Adds new pressed key to array "tried".
    tried.push(event.key);
    
    //Check if user guessed right.
    if (event.key == computerGuess) {
        win++;
        tries = 10;
        tried = [];
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    }else{
        tries--
    }
    document.querySelector("#guess").innerHTML = tried;
    document.querySelector("#try").innerHTML = tries;
}