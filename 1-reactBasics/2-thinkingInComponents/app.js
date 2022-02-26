// React components NEED a capital - this isn't foadyb or convention.
// And remember, this is flagged up as text/babel in index.html, so
// we can write JSX straight away and babel will transpile it for us.
const Header = () => { // Header is a function, and we're making it an arrow function
  return (             // here. You often see the abbreviated forms with missing
                       // brackets and an implicit return.
    <header>           
      <h1>Scoreboard</h1>
      <span className='stats'>Players: 1</span>
    </header>
  );
}
// A tag with a capital is a JSX component; if it has a lower case, JSX treats it 
// as an HTML tag. Note Header vs header above. 

const Counter = () => {
  return (
    <div className='counter'>
      <button className='counter-action decrement'> - </button>
      <span className='counter-score'>35  </span>
      <button className='counter-action increment'> + </button>
    </div>
  );
}

const Player = () => {
  return (
    <div className='player'>
      <span className='player-name'>
        Nick
      </span>
      <Counter />
    </div>
  );
}

// Putting one component inside another is termed "composition". Composing components is
// the heart of React programming. 
// Also, it's typical to have one main wrapper component that contains the entire UI. So:
const App = () => {
  return (
    <div className='scoreboard'>
      <Header />
      {/* Players list */}
      <Player />
    </div>
  );
}

ReactDOM.render(
  <App />,    // The space is recommended but not required. And you can use a self-closing 
              // tag if the component has nae weans. <Header></Header> works too, and if
              // you needed to add weans, you'd need to do it this way.
  document.getElementById('root')
);
// Note also that the JSX tag, <Header /> in this case, is actually a function-call to 
// the Header() function.