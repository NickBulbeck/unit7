import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Counter from './Counter';

// Originally, this was a function component, but to extend
// PureComponent it must be a class.
class Player extends PureComponent {
// This is the commonest way of adding PropTypes to a class component:
// By making it a static property, you don't need to instantiate the class
// to access PropTypes - it's a class property.
// Note also the .isRequired which means it can't be left out. Obviously. 
  static propTypes = {
    changeScore: PropTypes.func,
    removePlayer: PropTypes.func,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    id: PropTypes.number,
    index: PropTypes.number
  }



  render() {
    const { 
      name,
      id,
      score,
      index,
      removePlayer,
      changeScore
    } = this.props;
    console.log(name + " rendered");

    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
          { name }
        </span>

        <Counter 
          score={score}
          index={index}
          changeScore={changeScore} 
        />
      </div>
    );
  }
}

// With a class component, you can do this as well:
// Player.propTypes = {
//    etc etc    
// }
// ... same as for a function component

export default Player;