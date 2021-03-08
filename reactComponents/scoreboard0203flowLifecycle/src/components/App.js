
import React, {Component} from 'react';
import Header from './Header' // or, ./Header.js - but node assumes .js by default
import Player from './Player.js';
import AddPlayerForm from './AddPlayerForm';

// by importing React, {Component} above, we kind of declare Component explicitly within
// scope, and that means we don't have to write class App extends React.Component. It's called
// a named import.
class App extends Component {
  state = {
    players: [
      {
        name: "Guil",
        score: 0,
        id: 1
      },
      {
        name: "Treasure",
        score: 0,
        id: 2
      },
      {
        name: "Ashley",
        score: 0,
        id: 3
      },
      {
        name: "James",
        score: 0,
        id: 4
      }
    ]
  };

//  player id counter
  prevPlayerID = 4; // initialise it to the id of James in the starting array

// The score needs to change for the correct player's index, and by the correct
// amount. 
  handleScoreChange = (index,delta) => {
    this.setState( prevState => ({
      score: prevState.players[index].score += delta
    }));
  }
// It's a good idea to update the state based explicitly on the previous
// state.
  handleAddPlayer = (name) => {
    this.setState( prevState => { // remember, prevState is like 
                                  // event in an event-listener
      return {
        players:  [
          ... prevState.players, // spread operator copies in the existing
              // players array, and then the function adds the new yin.
          {
            name: name, // this can be abbreviated to the single word name, since 
            score: 0,   // the key and value are the same in this case.
            id: this.prevPlayerID += 1 // increments the existing variable
          }
        ]
      }
    })
  }

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
          players={this.state.players} 
        />
  
        {/* Players list */}
        {/* The 'index' is optionally passed as part of the .map method itself */}
        {this.state.players.map( (player, index) =>
          <Player 
            name={player.name}
            score={player.score}
            id={player.id}
            key={player.id.toString()} 
            index={index}
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}           
          />
        )}
        <AddPlayerForm addPlayer={this.handleAddPlayer}/>
      </div>
    );
  }
}

export default App;
