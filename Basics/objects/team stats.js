const team = {
    _players: [
      { firstName: 'LeBron', lastName: 'James', age: 38 },
      { firstName: 'Stephen', lastName: 'Curry', age: 36 },
      { firstName: 'Kevin', lastName: 'Durant', age: 35 }
    ],
    _games: [
      { opponent: 'Boston Celtics', teamPoints: 102, opponentPoints: 98 },
      { opponent: 'Milwaukee Bucks', teamPoints: 110, opponentPoints: 108 },
      { opponent: 'Miami Heat', teamPoints: 95, opponentPoints: 97 }
    ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge) {
      const player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge
      };
      this._players.push(player);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
      const game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      };
      this._games.push(game);
    }
  }
  
  team.addPlayer('Recep', 'İvedik', 76);
  console.log(team._players);
  
  team.addGame('BEhheheheyt', 100, 98);
  console.log(team._games);