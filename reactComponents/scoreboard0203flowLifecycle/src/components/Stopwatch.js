// COMPONENT LIFECYCLE

// Every component is 1) mounted to the DOM, 2) updated with changes in data, and 3) unmounted 
// fae the DOM.
// There are built-in lifecycle methods that get called at each point in the lifecycle. These
// act as hooks that run at key times in the components lifecycle, and enable you to control
// what happens at these points.
// This is what "React hooks" are. They're hooks on which you can hang various bits of functionality
// you need to add to your component, that mean they are pushed automatically into the right part of
// the component lifecycle without you having to create the time for them.

// Incidentally, you use componentDidMount() for fetching data as well.

import React, {Component} from 'react';
// As always, you need a decision on whether the stopwatch's state is app-level or 
// component level. Because this is kind of a widget, and its behaviour doesn't affect
// anything else, we'll call it component-level, so this is a stateful component and we
// need to make it a class.
// It has two main states - stopped and running - visible to the user.
class Stopwatch extends Component {

  state = {
    isRunning: false,
    elapsedTime: 0,
    previousTime: 0,
  }
// The lifecycle method you probably use the mostest is componentDidMount().
// This is a built-in method that is called automatically every time the 
// component mounts; as you'll see with the console.log(). Which I commented out,
// as it is a bit untidy once you've used it.
  componentDidMount() {
    // console.log("The stopwatch component mounted");
    // So; set up an instance of the setInterval() method that calls this.tick() every 100 ms.
    this.intervalID = setInterval(() => {this.tick()},100);
  }
// In this case, because we're running setInterval() over and over again, if we remove
// the Stopwatch component from the DOM, setInterval() would still keep calling tick(). This
// can create a memory leak. That is, tick() will be calling setState() but on an unmounted 
// component; you get a console error in this case, at least with a bit of luck. But you
// handle this by clearing the interval when the component unmounts.
// Again, this doesn't really impact directly because we're not unmounting the Stopwatch
// component, but this is good practice.
// componentWillUnmount() is invoked just before a component is cleared fae the DOM, so you
// can use it to clear anything that needs clearing at this point. Say we had a multi-page app
// where the Stopwatch DID keep appearing and disappearing, for instance. Then this would be important.
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }



  // Use the standard setState format to toggle the isRunning property:
  handleStopwatch = () => {
    this.setState( prevState => ({
      isRunning: !prevState.isRunning
    }));
    if (!this.state.isRunning) {
      // console.log('starting');
      this.setState({ previousTime: Date.now() })
    }
  }

  handleReset = () => {
    this.setState({
      elapsedTime: 0
    })
  }

// This is the hard part. The 'tick' function needs to be constantly repeating and, in effect,
// re-rendered. We don't want to be calling this from inside the render() method, because that's
// only for rendering, not for carrying out logic. Instead, we'll use the component lifecycle.
// The console.log() is useful to see that the function is actually getting called within the setInterval
// but, of course, it logs out 10 times a second, so again, I've commented it out once I verified that
// it's actually working.
  tick = () => {
    // console.log("Ticking");
    if (this.state.isRunning) {
      const now = Date.now();
// When updating state that depends on a previous state, It's good practice to do it using
// an updater callback function. 
      this.setState( prevState => ({
        previousTime: now,
        elapsedTime: prevState.elapsedTime + (now - this.state.previousTime)
// So each time tick() is called: if isRunning is true, setState updates elapsedTime
// with the difference between previousTime and now. It also updates previousTime
// to now.
      }));
    }
  }

// Although it's not a big deal here, it's a good idea to keep functions out of the 
// JSX expressions so that they don't become unwieldy and hard to read. For good 
// practice, we'll keep the Math.floor() method separate.
  render() {
    const seconds = Math.floor(this.state.elapsedTime / 1000);
    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">
          {seconds}
          </span>
        <button onClick={this.handleStopwatch}>
          {this.state.isRunning? "Stop" : "Start"}
        </button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default Stopwatch;