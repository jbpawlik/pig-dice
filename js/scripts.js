// Utility Logic



// Business Logic

function PigDice (){
  this.players = {};
}

PigDice.prototype.addPlayer = function(player) {
  this.players[player.name] = player
}
function Player (name, turnScore, gameScore) {
  this.name = name;
  this.turnScore = turnScore;
  this.gameScore = gameScore; 
}

let min = 1;
let max = 6;
let dice = Math.floor(Math.random()*(max-min+1)+min); 
console.log(x);
player1 =0 
player2 =0
string = ""

if (dice != 1){
  gameScore += dice;
  if (gameScore === 100){
    
  }
}else if (dice === 1){
  nextPlayer();
}else if (


1. player rolls dice
2. if dice = 1, turn over
3. if dice != 1, add score to turn score




// UI Logic




$(document).ready(function() {
  $("").click(function(event){
    event.preventDefault();
    
  });
});




