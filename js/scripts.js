// Utility Logic

// 1. player rolls dice
// 2. if dice = 1, turn over
// 3. if dice !=, add score
// 4. If score > 100, you win
// 5. If score <100,
// 6. hold or repeat 1-5


// Business Logic

//do we need these functions if we aren't needing to add new players into the game?

// function PigDice (player1, player2){
//   this.players = players};
// }
// function PigDice(player1, player2){
//   this.player1 = player1;
//   this.player2 = player2; 
// }
// let pigDice = new PigDice('Player1', 'Player2')

// PigDice.prototype.addPlayer = function(player) {
//   this.players[player.name] = player
// }


function Player (turnScore, gameScore, diceValue, playerTurn) {
  this.turnScore = turnScore;
  this.gameScore = gameScore; 
  this.diceValue = diceValue;
  this.playerTurn = playerTurn;
}

Player.prototype.randomDiceRoller = function() {
  this.diceValue = Math.floor(Math.random()*(6)+1);
}
Player.prototype.turnScoreValue = function () {
  if (this.diceValue === 1) {
    this.turnScore = 0
  }else {
    this.turnScore = this.diceValue
  }
  
}
Player.prototype.gameScoreTotal = function () {
  this.gameScore += this.turnScore
  if (this.gameScore >= 100) {
    alert ("You win!")
  }
}

Player.prototype.yourTurn = function () {
  if (this.playerTurn === True) {
    this.playerTurn = False
  }else {
    this.playerTurn = True
  }
}

// PigDice.prototype.switchPlayer = function ()
// if (this.players)

// function diceRoller() {
//   let min = 1;
//   let max = 6;
//   let dice = Math.floor(Math.random()*(max-min+1)+min);
// }

//A dice rolling function
function diceRoller() {
  this.turnScore = 0;
  let min = 1;
  let max = 6;
  let dice = Math.floor(Math.random()*(max-min+1)+min);
  return dice;
}
//Might need to set global variable?
let turnScore = 0;
let gameScore = 0
function addScore() {
  let diceRoll = diceRoller(); //Can I call this function inside the other?
  if (diceRoll !== 1) { 
    if (gameScore >= 100) {
      return playerWin = true;
    } else {
      return turnScore += diceRoll;
    }
  } else {
    return turnScore = 0;
    playerTurn = false;
}} addScore()


function hold() {
  player1.gameScore += turnScore 
  player2.gameScore += turnScore
  turnScore = 0   
  nextPlayer = 0 
}
  
let player1 = new Player(diceRoll, turnScore, gameScore);
let player2 = new Player(diceRoll, turnScore, gameScore); 

let player1 = newPlayer ("", )
player1 =0 
player2 =0
string = ""


// addScore function per player??
pigDice.prototype.addScore1 = function (score1) {
this.scores1[score1.player1] = score1

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
 }  else if (dice === 1){  //if you roll a 1
   string = "Next player"; // your turn is over- next player
}




// UI Logic
//need to create event listeners for each button and both buttons (as it stands) would trigger the the branching statement below (i think)

function showBtnPrimary(playerId){
  const submit = pigDice.playerTurn(playerId);  
  const player1 = $("input#player-1").val(); //HAVE NOT MADE THESE HTML DIVS YET ex. (<div id="player1">)
  const player2 = $("input#player-2").val(); //HAVE NOT MADE THESE HTML DIVS YET ex. (<div id="player2">)
  let buttons = $("#buttons");
  buttons.append("<button ='btn btn-primary' id=" + + playerId + ">Submit</button>")
}

function showBtnSecondary(playerId){
  const submit = pigDice.playerTurn(playerId);  
  const player1Hold = $("input#player1-hold").val(); //HAVE NOT MADE THESE HTML DIVS YET (<div id="player2-hold">)
  const player2Hold = $("input#player2-hold").val(); //HAVE NOT MADE THESE HTML DIVS YET ex. (<div id="player2-hold">)
  let buttons = $("#buttons");
  buttons.append("<button ='btn btn-secondary' id=" + + playerId + ">Hold</button>")}



function attachHoldListeners(){
$(button.btn-secondary).on("click", "button", function() {
  showBtnSecondary(this.id);
})
}
// playerTurn = false
function attachSubmitListeners(){
$(button.btn-primary).on("click", "button", function() {
  showBtnPrimary(this.id);
});
$("#buttons").on("click", ".")
}

// let player1 = new Player (0,0,0, True)
// let player2 = new Player (0,0,0, False)

$(document).ready(function() {
  attachSubmitListeners();
  //attachHoldListeners();
  $("button#submit").click(function(event){
    event.preventDefault();
    if (player1.playerTurn === True) {
      player1.randomDiceRoller();
      if (player1.diceValue === 1) {
        player1.yourTurn()
        player2.yourTurn()
      }
      
    }
    
    
  });
});
