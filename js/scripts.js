// Business Logic

// PigDice.prototype.addPlayer = function(player) {
//   this.players[player.name] = player
// }
//constructors for each player  
let player1 = new Player("Carnitas", 0, 0, true, false);
let player2 = new Player("Al Pastor", 0, 0, false, false); 

//constructor for player
function Player(name, turnScore, gameScore, playerTurn, playerWin) {
  this.name = name;
  this.turnScore = turnScore;
  this.gameScore = gameScore; 
  this.playerTurn = playerTurn;
  this.playerWin = playerWin;
}

//this is a custom method- so any time a 'player' clicks submit, the random number 1 - 6 will generate 


// function diceRoller() {
//   let diceRoll = Math.floor(Math.random()*(6)+1);
//   return diceRoll
// }
//---------------------------------------------------------------//
Player.prototype.addScore = function() {
  let diceRoll = Math.floor(Math.random()*(6)+1);
  if (diceRoll !== 1) { 
      this.turnScore += diceRoll;
      return this.turnScore;
    if (this.gameScore >= 100);
      this.playerWin = true;
  } else {
    return this.turnScore = 0;
    this.playerTurn = false;
}}

// Player.prototype.totalGameScore



// Player.prototype.switchTurn = function() {
//   {
//     return this.playerTurn = false
//   }
// }

// if (this.gameScore >= 100) {
//       return playerWin = true;
//this is a custom method- so after the 1 -6 number is generated the value will run through our branching to determine how much is added to gameScoreTotal and/or if its the next player's turn
// Player.prototype.turnScoreValue = function () {
//   if (this.diceValue === 1) {
//     this.turnScore = 0 // && switch player somehow?- just trying to find a way to refactor - Erika
//   }else {
//     this.turnScore = this.diceValue
//   }
  







// UI Logic



// let player1 = new Player (0,0,0, True)
// let player2 = new Player (0,0,0, False)

$(document).ready(function() {
  $("button#submit").click(function(event){
    event.preventDefault();
    if (player1.playerTurn === true) {
      player1.addScore()
      $("#player1Score").text(player1.turnScore)
      if (player1.turnScore === 0) {
        player1.playerTurn = false;
        player2.playerTurn = true;
      }
    } 
    else if (player2.playerTurn === true) {
      player2.addScore()
      $("#player2Score").text(player2.turnScore)
      if (player2.turnScore === 0) {
        player2.playerTurn = false;
        player1.playerTurn = true;
      }
    }
    
    $("#player1Score").text(player1.turnScore)
    

    $("button#hold").click(function(event){
      event.preventDefault(); 
      if (player1.playerTurn = true) {
        player1.playerTurn = false
        player2.playerTurn = true
        player1.gameScore += player1.turnScore
        $("#player1GameScore").text(player1.gameScore)
      } else {
        player2.playerTurn = false
        player1.playerTurn = true
        player2.gameScore += player2.turnScore
        $("#player2GameScore").text(player2.gameScore)
      } 
      
  
        
      // if (this.playerTurn = true) {
      //   this.gameScore += this.turnScore;
      //    }
      
  });
});
});