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

// class property shortcut:
    state = {
      score:0 
    }
  
// This is transpiled by babel but not directly supported in all browsers yet.
// This is what babel is doing behind the scenes:
// constructor() {
//    super();        
//    this.state = {  
//      score: 0
//    }
// }

// Now: create event-handlers as a method on the class. (A common approach.)
// You pass it into render() using a JSX expression inside render() itself, 
// the syntax of which is just like inline event-handlers in an html file.
//
// Also: there are two complications with updating state.
// Firstly, you can't just update the state directly; you have to use the
// setState() method which tells React what's happening so that it can call
// render().
// Secondly, 'this'. It doesn't work in a method the same way as it does with
// a property; it's undefined inside a method because in an object or class,
// 'this' refers to the parent that owns the method. Here, we're extending
// React.Component, so the method isn't bound to the component. We need to 
// re-do the binding. There are different ways of doing so, but here we've 
// used 'bind' in the render() JSX.
  incrementScore() {
    this.setState({
      score: this.state.score + 1
    });
  }

// As I've written this as an arrow function, it automatically inherits the context
// in which it's written so you can reference it directly. A third way is to 
// call it as an arrow function in render() itself, but that's a bit clunky.
  decrementScore = () => {
    this.setState({
      score: this.state.score - 1
    })
  }

// render() is a function of both props and state, and so if either is changed,
// React will call the rener() method automatically. cf app.get() that responds
// whenever app.listen() 'hears' a request.
  render() {
// render() DOES have a 'this' context - it refers to the instance of the Counter
// class that's being rendered. So we can bind an incrementScore() method to it.
// By contrast, arrow functions operate "lexical scoping" which means their 'this'
// is the context in which they are defined. So, I'll use the other common way for the
// decrementScore() method:
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
        <span className="counter-score">{this.state.score}</span>
        <button className="counter-action increment" onClick={this.incrementScore.bind(this)}> + </button>
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