// And Now: properties.
// We'll re-do the Header component dynamically using 

const Header = () => { // Must have a capital letter
  return ( // when you wrap multiple lines of JSX in (), it avoids automatic
    <header> {/*semicolon insertion bother - JavaScript autoinserts a semicolon as*/}
      <h1>Scoreboard</h1> {/*soon as meaningfully possible after a return statement */}
      <span className="stats">Players: 1</span>
    </header>
  )
}
// Because it's an arrow function with a single statement (albeit over multiple lines),
// a lot of folk abbreviate it by missing out the 'return' and/or the brackets.
// Bugger this. I'm sticking to the above (so is Guil, BTW).

// You can add user-defined tags in React, so that instead of having to .render a
// p or h1 etc tag, or a variable representing such a tag, you render a component tag
// thus:

const Counter = () => {
  return (
    <div className="counter">
      <button className="counter-action decrement"> - </button>
      <span className="counter-score">35</span>
      <button className="counter-action increment"> + </button>
    </div>
  )
}

const Player = () => {
  return (
    <div className="player">
      <span className="player-name">
        Nick
      </span>
      <Counter />
    </div>
  )
}

// When one component contains one or more others, it's called 'composition'.
// It's typical to have one containing component, analogous to the 'wrapper' 
// div in HTML...
const App = () => {
  return (
    <div className="scoreboard">
      <Header />
      {/* Players list */}
      <Player />
    </div>
  )
}


ReactDOM.render(
  <App />, // The name must exactly match the component.
  document.getElementById('root') // Hence the need for a capital H in Header;
); // without it, JSX would assume you're trying to render an html tag.
// You can self-close the tag, or use <Header></Header> if it has children.

// Finally on <Header /> : The space is not required, but is recommended.
// Also note that <Header /> is a function call - it calls the Header() function,
// which means that when it's executed, any side-effects of Header() would become
// manifest. Also it's transpiled into a series of React.createElement's - you can
// see this if you copy the wee function above into repl.