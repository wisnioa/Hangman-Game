var answers = ["ocean", "shell", "mermaid", "waves", "riptide", "seagull"];
var userGuess;
var winsCount =0;
var numGuess; 
var randomWord;


document.onkeyup = function(event) {
var userGuess = event.key;
document.getElementById("guessed").innerHTML = userGuess;
}




function choose() {
  
 var randomWord = answers[Math.floor(Math.random() * answers.length++)];
 	
 	document.getElementById("").innerHTML;
		}


var randomWordDash = [];


    for (i = 0; i < answers[1].length; i++) {
           randomWordDash.push(" _ ");






function increaseWins(){
winsCount++;
document.getElementById('count').innerHTML= +i;
}




var html = "<h3> Current Word \n" + randomWordDash+"</h3>";
console.log(html);
document.getElementById("gameWord").innerHTML = html;


userGuess = "<p> Letters Already Guessed \n </p>";
console.log(userGuess);
document.getElementById("guessed").innerHTML = userGuess;


numGuess = "<p> Guesses Remaining \n </p>"; 
console.log(numGuess);
document.getElementById("toGuess").innerHTML = numGuess; 



winsCount = "<p> Wins \n </p>"; 
console.log(winsCount);
document.getElementById("count").innerHTML = winsCount;
