// To begin with, this file (App.js) was the only one in the src/components folder. However,
// it contained all of the components. The first exercise, therefore, was to extract the function
// components into separate files (each with an import statement here and an export statement in
// the new file). The second was to extract the class components likewise.
// The function componets were Header and Player. There was also a class component, Counter.

import React, {Component} from 'react';
import Header from './Header' // or, ./Header.js - but node assumes .js by default
import Player from './Player.js'

// by importing React, {Component} above, we kind of declare Component explicitly within
// scope, and that means we don't have to write class App extends React.Component. It's called
// a named import.
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
