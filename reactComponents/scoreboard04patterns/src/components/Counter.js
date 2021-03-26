import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({score,index,changeScore}) => {

  // let index = props.index;

  return (
    <div className="counter">
      <button className="counter-action decrement" onClick={() => changeScore(index, -1)}> - </button>
      <span className="counter-score">{ score }</span>
      <button className="counter-action increment" onClick={() => changeScore(index, 1)}> + </button>
    </div>
  );
}
// This is how you use PropTypes on a function component like this:
Counter.propTypes = {
  index: PropTypes.number,
  score: PropTypes.number,
  changeScore: PropTypes.func
}
// There are many other noptions; check the docs for any other specifics.


export default Counter;