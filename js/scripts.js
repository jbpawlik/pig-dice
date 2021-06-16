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

//Dice roller function
let min = 1;
let max = 6;
let dice = Math.floor(Math.random()*(max-min+1)+min); 
console.log(dice);
player1 =0 
player2 =0
string = ""

// addScore function?
//pigDice.prototype.addScore1 = function (score1) {
//this.scores1[score1.player1] = score1

if (dice != 1){                //if your roll does not equal 1
 player1 += dice; //your new game score = old game score + the number you rolled 
  if (player1 === 100){   //if your new game score = 100
    string = "game over";   //then the game ends
  }
}else if (dice === 1){  //if you roll a 1
  string = "Next player"; // your turn is over- next player
}
//pigDice.prototype.addScore2 = function (score2) {
  //this.scores2[score2.player2] = score2

if (dice != 1){                //if your roll does not equal 1
  player2 += dice; //your new game score = old game score + the number you rolled 
   if (player2 === 100){   //if your new game score = 100
     string = "game over";   //then the game ends
   }
 }else if (dice === 1){  //if you roll a 1
   string = "Next player"; // your turn is over- next player
 }

// 1. player rolls dice
// 2. if dice = 1, turn over
// 3. if dice !=, add score
// 4. If score > 100, you win
// 5. If score <100,
// 6. hold or repeat 1-5





// UI Logic




$(document).ready(function() {
  $("").click(function(event){
    event.preventDefault();
    
  });
});






function diceRoller() {
  let min = 1;
  let max = 6;
  let dice = Math.floor(Math.random()*(max-min+1)+min); 
  console.log(dice);
}
