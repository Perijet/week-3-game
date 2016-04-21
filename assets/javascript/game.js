/*Javascript file for Psychic game
Created by Nigel P. John for UCF Coding Bootcamp
Created the week of April 18 2016*/

//Begin document ready function
$(document).ready(function(){

//Variables declared for user/computer guesses, wins, losses and turns	
var computerGuess = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var wins = 0;
var losses = 0;
var Guesses = [];
var turns = 10;

//Register the user guesses and store in UserGuess variable
document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

//Generate a random letter from the computerGuess array and store in rand variable
var rand = computerGuess[Math.floor(Math.random() * computerGuess.length)];

//Populates Guesses[] array with letters from userGuess
Guesses.push(userGuess);

//Function to reset the game after the number of allowed tries are exhausted
function reset(){
	Guesses = [];
	turns = 10;
} //End reset function

//Statement to ensure that only userGuess keystrokes "a" through "z" are counted
if((userGuess === 'a') ||(userGuess === 'b') || (userGuess === 'c') || (userGuess === 'd') || (userGuess === 'e') || (userGuess === 'f')
	|| (userGuess === 'g') || (userGuess === 'h') || (userGuess === 'i') || (userGuess === 'j') || (userGuess === 'k') ||(userGuess === 'l')
	|| (userGuess === 'm') || (userGuess === 'n') || (userGuess === 'o') || (userGuess === 'p') || (userGuess === 'q') || (userGuess === 'r')
	|| (userGuess === 's') || (userGuess === 't') || (userGuess === 'u') || (userGuess === 'v') || (userGuess === 'w')
	|| (userGuess === 'x') || (userGuess === 'y') || (userGuess === 'z')){

//Logic statement to control number of user guesses
if(turns > 0){

	//Logic statements to test the users guesses for wins/losses
	if(  rand  == userGuess) {
		console.log('win');
		reset();
		wins++;
		
	}
	else{
		console.log('x');
		turns--;
	}
	}
else{
	losses++;
	reset();
}//End Logic statement to control number of user guesses 
}//End Statement to ensure that only userGuess keystrokes "a" through "z" are counted

//Jquery used to  manipulate the DOM and populate elements with user stats
	$('#zero').html(losses);
	$('#plus').html(wins);
	$('#left').html(turns);
	$('#letters').html(Guesses);

} //End document.onkeyup


}) //End document ready function