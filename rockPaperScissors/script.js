let playerWins = 0;
let compWins = 0;
let playerChoice = "";
let compChoice = "";
let outcome = "";

function playGame() {


// determine player choice
if(document.getElementById('rock').checked == true) {
playerChoice = 'rock';
} else if 
(document.getElementById('paper').checked == true) {
playerChoice = 'paper';
} else if
(document.getElementById('scissors').checked == true) {
playerChoice = 'scissors';}

// determine computer choice

  randNum = Math.floor(Math.random() * 3);
  // return compChoice;
  if (randNum === 0) {
    compChoice = 'rock';
  } else if (randNum === 1) {
    compChoice = 'paper';
  } else if (randNum === 2) {
    compChoice = 'scissors';
  } else (
  compChoice = 'something went wrong');

// determine outcome

if (playerChoice === compChoice) {
outcome = "It's a tie!"} else if 

(playerChoice === 'rock'){ 
if(compChoice === 'paper'){
outcome = "Computer wins!";
compWins++;} else {
outcome = "Player wins!";
playerWins++;}} else if

(playerChoice === 'paper'){ 
if(compChoice === 'scissors'){
outcome = "Computer wins!";
compWins++;} else {
outcome = "Player wins!";
playerWins++;}} else if

(playerChoice === 'scissors'){ 
if(compChoice === 'rock'){
outcome = "Computer wins!";
compWins++;} else {
outcome = "Player wins!";
playerWins++;}} 




console.log(playerChoice);
document.getElementById("playerChoice").innerHTML = "player choice: " + playerChoice;
document.getElementById("compChoice").innerHTML = "computer choice: " + compChoice;
document.getElementById("outcome").innerHTML = "outcome: " + outcome;
document.getElementById("playerWins").innerHTML = playerWins;
document.getElementById("compWins").innerHTML = compWins;
};






