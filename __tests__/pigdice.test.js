import Player from './../src/pigdice.js';

describe('Player', () => {
  test('Player will make an instance with name', () => {
    const player = new Player("name");
    expect(player.name).toEqual("name");
  });
});