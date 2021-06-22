// Business Logic

//constructor for player
export default function Player(name, turnScore, gameScore, playerTurn, playerWin) {
  this.name = name;
  this.turnScore = turnScore;
  this.gameScore = gameScore; 
  this.playerTurn = playerTurn;
  this.playerWin = playerWin;
}

Player.prototype.addScore = function() {
  let diceRoll = Math.floor(Math.random()*(6)+1);
  if (diceRoll !== 1) { 
      this.turnScore += diceRoll;
      return this.turnScore;
      // if (this.gameScore >= 100) {
      //   this.playerWin = true;
      // }
  } else {
    return this.turnScore = 0;
    // this.playerTurn = false;
  }
}