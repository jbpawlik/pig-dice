import Player from './../src/pigdice.js';

describe('Player', () => {

  beforeEach(() => {
    // player1 = new Player("Carnitas", 0, 0, true, false);
  })

  test('should correctly create a player object with respective key-values', () => {
    let player1 = new Player("Carnitas", 0, 0, true, false);
    expect(player1.name).toEqual("Carnitas");
    expect(player1.turnScore).toEqual(0);
    expect(player1.gameScore).toEqual(0);
    expect(player1.playerTurn).toEqual(true);
    expect(player1.playerWin).toEqual(false);
  });

  test ('should roll random number and add to turn score if 2-6 or return 0 if 1', () => {
    let player1 = new Player("Carnitas", 0, 0, true, false);
    expect(player1.addScore()).toBeLessThan(7);
  } )
});