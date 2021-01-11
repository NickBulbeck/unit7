// And Now: Props.

/* 
    Props are like HTML attributes; they're actually passed into the function as
    a parameter. The props parameter is very like the event parameter passed to 
    element.addEventListener - it's created by JavaScript and is always there 
    implicitly, so in order to access it you just need to stick a foadyb name
    on it. By convention, stick to 'props'.
    It's an object, as you can see by console.logging it. And note: you CANNOT change
    the value of a prop from within a Component. They're strictly read-only.
*/

const players = [
  {
    name: "Nick",
    score: "Autism"
  },
  {
    name: "Guil",
    score: 50
  },
  {
    name: "Treasure",
    score: 85
  },
  {
    name: "Ashley",
    score: 95
  },
  {
    name: "James",
    score: 80
  }
]

const Header = (props) => {
  return (
    <header>
      <h1>{ props.title }</h1>
      <span className="stats">Players: { props.totalPlayers }</span>
    </header>
  );
}

const Counter = (props) => {
  return (
    <div className="counter">
      <button className="counter-action decrement"> - </button>
      <span className="counter-score">{ props.score }</span>
      <button className="counter-action increment"> + </button>
    </div>
  );
}


const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        {props.name}
      </span>
      <Counter score={props.score}/>
    </div>
  )
}

// Single containing element is up next. Remember, App() is a bit like the wrapper div.
// Notice how we pass the props in, and note the continuing analogy to HTML
// attributes. Anything other than a string has to be enclosed in {} so that JSX
// evaluates it. But - and this is maybe a bit clever - you can even have them as
// functions, including declaring them as wee arrow functions to do small bits of 
// arithmetic in situ (say, taking a number and doubling it or adding 1 to it).
// REMEMBER: in the parent component, the child component is called, like a function. So you pass
// IN the props in the calling function, and then PROCESS them in the const Component = (props) => {}
// part.

const App = () => {
  return (
    <div className="scoreboard">
      <Header
        title="Scoreboard"
        totalPlayers={1}
    />
      {/* Players list - could have a long list of <Player />'s, but we'll use an array*/}
      <Player name="Nick" score={50} />
      <Player name="Guil" score={40} />
      <Player name="Ashley" score={44} />
      <Player name="James" score={58} />
    </div>
  )
}
// It's customary to use double-quotes for strings, as that's what folk tend to use
// in HTML itself. Also, you don't have to put multiple props on different lines, as with
// <Header /> here, but it's a good idea.

ReactDOM.render(
  <App />, 
  document.getElementById('root') 
); 