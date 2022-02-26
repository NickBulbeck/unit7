

const Header = (props) => {
  return (
    <header>
      <h1>{ props.title }</h1>
      <span className="stats">Players: { props.totalPlayers }</span>
    </header>
  );
}

const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
      <button className="remove-player" onClick={() => props.removePlayer(props.id)}>✖</button>
        { props.name }
      </span>

      <Counter />
    </div>
  ); // Counter score isn't passed in as props because it's maintaining its
}    // own state that has its score in it.

class Counter extends React.Component  {
// props is passed in implicitly, so you don't need to declare it up here.
// Bear in mind that in older JavaScript, you have to set up a constructor()
// that calls super() and sets up this.state, like this:

  // constructor() {
  //   super() 
  //   this.state = { 
  //     score: Math.floor((Math.random() * 10) + 1)
  //   }
  // }
// But this can be simplified to the class property syntax, below; although
// not all browsers support it, babel sorts this for us onyway.
  state = { // state is a keyword, not a foadyb.
    score: Math.floor((Math.random() * 10) + 1)
  }

  incrementScore() {
    this.setState({ // Can't update the state directly. You need setState() because
      score: this.state.score + 1 // this tells React that the component has changed
    });     // and needs re-rendering. Also note that you pass it a nobject with the
  }         // state item you're changing, and what you're changing it to.
// Now: setState isn't always synchronous. If there's a lot going on, React may bundle
// the various calls for speed. This means that you can get race conditions, and other
// unexpected behaviour. You can modify state based on specific previous state by 
// passing setState a callback.
  decrementScore() {
    this.setState( prevState => ({
        score: prevState.score > 0 ? prevState.score - 1 : 0
    }))
  }
// Notice the bind(). You need to do this because the custom methods are not automatically bound
// to the context of the instance of the class.
// The other approach is to use an arrow function like I've done with decrement score. In this case
// you need the () because you're telling the arrow function what to do when it's called.
// arrow functions use lexical this binding - they automatically bind their contents to the 
// scope in which they're defined. Yet another approach is to write incrementScore as an arrow
// function in the first place.
  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={() => this.decrementScore()}> - </button>
        <span className="counter-score">{ this.state.score  }</span>
        <button className="counter-action increment" onClick={this.incrementScore.bind(this)}> + </button>
      </div>
    ); // not incrementScore(), or it'll fire every time the component mounts.
  }     // Also, onClick is built-in, like all the HTML events.

}

class App extends React.Component  {

  state = {
    players: [
      {
        name: "Dad",
        id: 1
      },
      {
        name: "Mum",
        id: 2
      },
      {
        name: "Nathan",
        id: 3
      },
      {
        name: "Bryony",
        id: 4
      }
    ]
  }

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter( player => player.id !== id)
      }
    })
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

ReactDOM.render(
  <App />,
  document.getElementById('root')
);