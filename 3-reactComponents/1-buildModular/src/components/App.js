import React, { Component } from 'react';
// Two different approaches for class components are:
/*
  import React from 'react';
  class Foadyb extends React.Component { etc

  and:
  import React, { Component } from 'react'; // - this is a "named import"
  class Foadyb extends Component { etc
*/
import Header from './Header.js'; // you import exactly what you exported in Header.js
import Player from './Player.js';
// No need to import Counter because it's nested within Player, which imports Counter itself.


class App extends Component {
  state = {
    players: [
      {
        name: "Guil",
        id: 1
      },
      {
        name: "Treasure",
        id: 2
      },
      {
        name: "Ashley",
        id: 3
      },
      {
        name: "James",
        id: 4
      }
    ]
  };

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  render() {
    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          totalPlayers={this.state.players.length} 
        />
  
        {/* Players list */}
        {this.state.players.map( player =>
          <Player 
            name={player.name}
            id={player.id}
            key={player.id.toString()} 
            removePlayer={this.handleRemovePlayer}           
          />
        )}
      </div>
    );
  }
}

export default App;
