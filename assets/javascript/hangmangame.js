var answers = ["ocean", "shell", "mermaid", "waves", "riptide", "seagull"];
var userGuess;
var winsCount;

//find a way to select a random word from answers


function() {
  
 var randomWord = answers[Math.floor(Math.random() * answers.length)];
 	
 	document.getElementById("").innerHTML;
		}


//this will be an empty array this will carry all the _ for the amount of dashes in our word
var randomWordDash = [];

//empty underscores
//answers.length will always give you the total
// for (i = 0; i < answers.length; i++) {
    for (i = 0; i < answers[1].length; i++) {
        //this will push an underscore to our empty array for the length of the selected RANDOM word.
    randomWordDash.push("_");

}
var html = "<h1>Word is this many characters: " + randomWordDash+"</h1>";
console.log(html);
document.getElementById("gameWord").innerHTML = html;