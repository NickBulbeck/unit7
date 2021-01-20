// And Now: State.
/*
  Props are read-only; state is alterable within each component.
  State, like props, is a nobject with its own foadyb properties.
  It keeps the UI in synch with the data.
  In order to add a state object, you need to declare the component
  as a class rather than a function (a stateless functional component).
  We did props first, because state is passed into components via 
  props. Makes sense, as 'state' is a property, after all.
  A component can change its own state, but not the state of any other
  component. By contrast, a component cannot change its own props, but
  can set the props of its children.
*/

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

// So, Counter written as a component class. It's a child of the React.Component
// class, so you need the 'extends' keyword. Also, its props aren't passed to it
// as a nargument like they were with the Component functions; the props are a 
// property of the Counter instance, so you need the 'this' when you access them.
// Note that you need just one method, wihich is the render() method and contains 
// the same code as you'd see in the function version.
// Note also that you instantiate it just as though you're calling a function -
// send in the props and dinnae bother with 'new'.
// More: you need a constructor, and you call super() which calls the parent class
// constructor so that you can use the 'this' keyword. You initialise the state
// by setting this.state as a nobject ('state' is compulsory, not foadyb) and you
// must also set an initial value for every property in the state.
class Counter extends React.Component {

  constructor() {   // the render() method below is a function of both
    super();        // props and state, so if either changes, render()
    this.state = {  // is called.
      score: 0
    }
  }
  // Another way of doing this, that is transpiled by babel but not directly 
  // supported in all browsers yet, is the class property shortcut:
  // state = {
  //   score:0 
  // }
  // If you do this, babel sets up the constructor() business behind the scenes.
  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement"> - </button>
        <span className="counter-score">{ this.state.score }</span>
        <button className="counter-action increment"> + </button>
      </div>
    );
  }
}

// wo the previous version, 'score' is no longer being passed in props to the
// Counter component, because it now maintains its own score state.
const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        {props.name}
      </span>
      <Counter />
    </div>
  )
}

// As with Player above:
// wo the previous version, 'score' is no longer being passed in props to the
// Counter component, because it now maintains its own score state.

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
          key={player.id.toString()}
        />
      )}
    </div>
  )
}


ReactDOM.render(
  <App initialPlayers={players}/>, 
  document.getElementById('root') 
); 