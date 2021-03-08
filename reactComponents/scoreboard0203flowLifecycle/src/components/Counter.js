import React from 'react';

const Counter = (props) => {
  
// Notice the onClick events here. The onClick events aren't simply set up as
// props.changeScore. Rather, they are each set up as an anonymous function that 
// itself calls props.changeScore. I haven't fully got my head around why this
// is yet, but I can see that this is what we're doing, at least.
const index = props.index;
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={()=> props.changeScore(index,-1)}> - </button>
        <span className="counter-score">{ props.score }</span>
        <button className="counter-action increment" onClick={()=> props.changeScore(index, 1)}> + </button>
      </div>
    );
  }
    
export default Counter;
/* Another way of exporting a class is
  export default class Counter extends Component {
      render() { //etc }
  }

  ... and a further way is doing
  export const Header = () =. {
      return ( //etc );
  }
  followed by 
  import {Header} from './Header';
*/