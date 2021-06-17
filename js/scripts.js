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

  if (player1.playerWin === false && player2.playerWin === false) {
    if (player1.playerTurn === true) {
      player1.gameScore += player1.turnScore;
      $("#player1GameScore").text(player1.gameScore)
      player1.playerTurn = false;
      player2.playerTurn = true;
    } else if (player2.playerTurn === true) {
      player2.gameScore += player2.turnScore;
      $("#player2GameScore").text(player2.gameScore)
      player2.playerTurn = false;
      player1.playerTurn = true;
    }
  }

  $("button#submit").click(function(event){
    event.preventDefault();

    if (player1.gameScore >= 100)  {
      player1.playerWin = true;
      $('#winner1').text(player1.name + 'wins!')
    } else if (player2.gameScore >= 100) {
      player2.playerWin = true;
      $('#winner2').text(player2.name + 'wins!')
    }

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
  });

    // $("#player1Score").text(player1.turnScore)
    
    // $("#player1GameScore").text(player1.gameScore)
    // $("#player2GameScore").text(player2.gameScore)

    $("button#hold").click(function(event) {
      event.preventDefault(); 
      if (player1.gameScore >= 100)  {
        player1.playerWin = true;
        $('#winner1').text(player1.name + 'wins!')
      } else if (player2.gameScore >= 100) {
        player2.playerWin = true;
        $('#winner2').text(player2.name + 'wins!')
      }
    
      if (player1.playerWin === false && player2.playerWin === false) {
        if (player1.playerTurn === true && player2.playerWin === false) {
          player1.gameScore += player1.turnScore;
          $("#player1GameScore").text(player1.gameScore)
          player1.playerTurn = false;
          player2.playerTurn = true;
        } else if (player2.playerTurn === true && player1.playerWin === false) {
          player2.gameScore += player2.turnScore;
          $("#player2GameScore").text(player2.gameScore)
          player2.playerTurn = false;
          player1.playerTurn = true;
        }
    
      // if (player1.playerTurn === true) { 
      //   player1.gameScore += player1.turnScore;
      //   $("#player1GameScore").text(player1.gameScore)
      //     player1.playerTurn = false;
      //     player2.playerTurn = true;
      //   if (player1.gameScore >= 100) {
      //     $('#winner1').text('You win!')
      //     player1.playerWin = true;
  
      //     // break;
      //   }
      // } else if (player2.playerTurn === true) {
      //     player2.gameScore += player2.turnScore;
      //     if (player2.gameScore >= 100) {
      //       $('#winner2').text('You win!')
      //       player2.playerWin = true;
      //       // break;
        // $("#player2GameScore").text(player2.gameScore)
        
        
      // } 
      
      // if (player1.gameScore + player1.turnScore >= 100) {
      //   player1.gameScore += player1.turnScore;
      //   return "Winner!";
      // } else {
      // player1.gameScore += player1.turnScore;
      // }
      // // return diceRoll;
    
      // if(player2.gameScore + player2.turnScore >= 100) {
      //   player2.gameScore += player2.turnScore;
      //   return "Winner!";
      // }else{
      // player2.gameScore += player2.turnScore;
      // } 
      //   // return diceRoll;
    }
  });
});
