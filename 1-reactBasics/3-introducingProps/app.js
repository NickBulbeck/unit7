const players = [
  {
    name: "Dad",
    score: 50,
    id: 1 // when we set up an array of components, React wants us to specify a unique
  },      // key property for each one so that it can keep track of what elements are
  {       // changing.
    name: "Mum",
    score: 85,
    id: 2
  },
  {
    name: "Nathan",
    score: 95,
    id: 3
  },
  {
    name: "Bryony",
    score: 80,
    id: 4
  }
]

const Header = (props) => { // props, like req,res,next, is actually foadyb
  return (
    <header>
      <h1>{props.title}</h1>
      <span className="stats">Players: {props.totalPlayers}</span>
    </header>
  );
}
// the value in the {}'s is a JSX expression - which means it needs to be 
// either a value in its own right, or something that returns a value. So
// you can put a function in it as well.

const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        {props.name}
      </span>

      <Counter score={props.score}/>
    </div>
  );
}

const Counter = (props) => {
  return (
    <div className="counter">
      <button className="counter-action decrement"> - </button>
      <span className="counter-score">{props.score}</span>
      <button className="counter-action increment"> + </button>
    </div>
  );
}

const App = (props) => { // props are passed in via the JSX tag...
                    // in fact className is a prop too.
// Note that when a prop is a number, not a string, it needs to be
// evaluated as a JSX expression - so give it {}'s.
  return (
    <div className="scoreboard">
      <Header
        title="Scoreboard..."
        totalPlayers={props.initialPlayers.length}
      />

      {/* Players list */}
      {props.initialPlayers.map( player => <Player 
        name={player.name} 
        score={player.score} 
        key={player.id.toString()} // we must call this "key"; and the React docs
                                   // recommend that we use a string.
      /> )}
    </div>
  );
}

ReactDOM.render(
  <App initialPlayers={players}/>,
  document.getElementById('root')
);