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
Player.prototype.diceRoller = function() {
  let diceRoll = Math.floor(Math.random()*(6)+1);
  return diceRoll
}
function diceRoller() {
  let diceRoll = Math.floor(Math.random()*(6)+1);
  return diceRoll
}
//---------------------------------------------------------------//
Player.prototype.addScore = function() {
  let diceRoll = diceRoller();
  if (diceRoll !== 1) { 
      this.turnScore += diceRoll;
      return this.turnScore;
      if (this.gameScore > 100);
      this.playerWin = true;
  } else {
    return this.turnScore = 0;
    this.playerTurn = false;
    switchTurn();
}}

// When click Hold:
  // if (this.playerTurn = true) {
  //   this.gameScore += this.turnScore;
  //   switchTurn();
  // } 

Player.prototype.switchTurn = function() {
    this.playerTurn = false
}

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
//need to create event listeners for each button and both buttons (as it stands) would trigger the the branching statement below (i think)

// function showBtnPrimary(playerId){
//   const submit = pigDice.playerTurn(playerId);  
//   const player1 = $("input#player-1").val(); //HAVE NOT MADE THESE HTML DIVS YET ex. (<div id="player1">)
//   const player2 = $("input#player-2").val(); //HAVE NOT MADE THESE HTML DIVS YET ex. (<div id="player2">)
//   let buttons = $("#buttons");
//   buttons.append("<button ='btn btn-primary' id=" + + playerI/d + ">Submit</button>")
// }

// function showBtnSecondary(playerId){
//   const submit = pigDice.playerTurn(playerId);  
//   const player1Hold = $("input#player1-hold").val(); //HAVE NOT MADE THESE HTML DIVS YET (<div id="player2-hold">)
//   const player2Hold = $("input#player2-hold").val(); //HAVE NOT MADE THESE HTML DIVS YET ex. (<div id="player2-hold">)
//   let buttons = $("#buttons");
//   buttons.append("<button ='btn btn-secondary' id=" + + playerId + ">Hold</button>")}



// let player1 = new Player (0,0,0, True)
// let player2 = new Player (0,0,0, False)

$(document).ready(function() {
  $("button#submit").click(function(event){
    event.preventDefault();
    player1.addScore ()
    alert("Player 1:" + " " + player1.turnScore)
      if (player1.playerTurn === true)
    
    // if (player1.playerTurn === True) {
    //   player1.randomDiceRoller();
    //   if (player1.diceValue === 1) {
    //     player1.yourTurn()
    //     player2.yourTurn()
    //   }
  
  });
});
