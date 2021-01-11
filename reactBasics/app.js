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

// Note the 'id' property in each object. If you don't add this, React gives you a warning 
// about it. React components need unique keys before they can be manipulated (i.e. moved,
// deleted etc). More specifically, elements that would be selected together - that is, where
// there's more than one of them - should have a unique key, and particularly when you create
// them in the process of iterating over a collection of some kind.
const players = [
  {
    name: "Nick",
    score: 42,
    id: 1
  },
  {
    name: "Guil",
    score: 50,
    id: 2
  },
  {
    name: "Treasure",
    score: 85,
    id: 3
  },
  {
    name: "Ashley",
    score: 95,
    id: 4
  },
  {
    name: "James",
    score: 80,
    id: 5
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
// You generally use the map() function to iterate over an array of props. Here, since there's 
// only a single statement (albeit spread over several lines) we're using an implicit return
// arrow function.
const App = (props) => {
  return (
    <div className="scoreboard">
      <Header
        title="Scoreboard"
        totalPlayers={props.initialPlayers.length}
    />
      {/* Players list - could have a long list of <Player />'s, but we'll use an array*/}
      {props.initialPlayers.map( player => 
        <Player
          name={player.name}
          score={player.score}
          key={player.id.toString()}
        />
      )}
    </div>
  )
}
// If you inspect the app in Chrome React devtools, you'll see that the 'key' property (which, BTW,
// React recommends you use a string for) is not listed with the rest of the props but attached to
// the element itself. This makes more sense in Chrome React devtools than it does written here.


// It's customary to use double-quotes for strings, as that's what folk tend to use
// in HTML itself. Also, you don't have to put multiple props on different lines, as with
// <Header /> here, but it's a good idea.

ReactDOM.render(
  <App initialPlayers={players}/>, 
  document.getElementById('root') 
); 