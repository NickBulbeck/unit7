// And Now: types of state.
// There are two types of state to think about when designing an app. There's 
// application state, and component state. The former is the data available
// to the entire application. Component state is local to the component and is
// not visible outside it. Like global and local variables.

/* 
  There's a basic pitfall with the setState() method: it's asynchronous. React tends to
  bundle setState() calls together and then run them at once for performance reasons.
  So you can get race conditions. In other words, when you increment the counter (for 
  instance) by increasing the current value of this.state.score, you can't guarrantee what
  the current value is (suppose a lot of - and + button clicks happen in quick succession).

  Thus, instead of just a nobject, setState() can also accept a callback that sets state
  based on the previous state.

  The other thing we're doing here is removing items from the state, and specifically, 
  removing players. 

*/


const Header = (props) => {
  return (
    <header>
      <h1>{ props.title }</h1>
      <span className="stats">Players: { props.totalPlayers }</span>
    </header>
  );
}


class Counter extends React.Component {

    state = {
      score:0 
    }
  
// In the callback, prevState works rather like the 'event' variable in an
// event-listener. It's there by default whether you name it or not; giving it
// a (foadyb) name enables you to access it.
  incrementScore() {
    this.setState( prevState => {
      return {
        score: prevState.score + 1
      }
    });
  }

  decrementScore = () => {
    this.setState( prevState => {
      return {
        score: prevState.score - 1
      }
    })
  }


  render() {

    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
        <span className="counter-score">{this.state.score}</span>
        <button className="counter-action increment" onClick={this.incrementScore.bind(this)}> + </button>
      </div>
    );
  }
}


// Note the arrow-function syntax on the onClick function - we're declaring an arrow function
// inside the code here which returns a call to props.removePlayer(), so it DOES need the brackets.
const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={ () => props.removePlayer(props.id) }>✖</button>
        {props.name}
      </span>
      <Counter />
    </div>
  )
}

// App owns the Player components, so it'll be responsible for handling the 
// Player-related state. This means it has to be a stateful component which, in 
// turn, means it has to be a class.
class App extends React.Component {

  state = {
    players: [
      {
        name: "Nick",
        id: 1
      },
      {
        name: "Guil",
        id: 2
      },
      {
        name: "Treasure",
        id: 3
      },
      {
        name: "Ashley",
        id: 4
      },
      {
        name: "James",
        id: 5
      }
    ]
  }
// use the array.filter method to remove the player with the given id;
// we'll also pass this method to the Player child class via props
  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return  {
        players: prevState.players.filter( player => player.id !== id)
      }
    });
  }
// As stated above: we'll pass the handleRemovePlayer method as a prop, 
// as well as the player's id
  render() {
    return (
      <div className="scoreboard">
        <Header
          title="Scoreboard"
          totalPlayers={this.state.players.length}
      />
        {this.state.players.map( player => 
          <Player
            name={player.name}
            id={player.id}
            key={player.id.toString()}
            removePlayer={this.handleRemovePlayer}
          />
        )}
      </div>
    )
  }

  
}


ReactDOM.render(
  <App />, 
  document.getElementById('root') 
); 