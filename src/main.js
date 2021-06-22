import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Player from './pigdice.js';

// https://stackoverflow.com/questions/39458511/how-to-use-es6-import-for-images

// import youNameIt from "../images/151.png";


// UI Logic
$(document).ready(function() {

  //constructors for each player  
let player1 = new Player("Carnitas", 0, 0, true, false);
let player2 = new Player("Al Pastor", 0, 0, false, false); 


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

    }
  });
});
