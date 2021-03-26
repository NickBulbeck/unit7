import React from 'react';
import PropTypes from 'prop-types';

import Stats from './Stats';
import Stopwatch from './Stopwatch';

const Header = (props) => {
  // destructuring props via a variable: the alternative would be to have
  // {players,title} as a direct replacement for 'props' in line 5.
  const {players,title} = props;
  return (
    <header>
      <Stats players={players} />
      <h1>{ title }</h1>
      <Stopwatch />
    </header>
  );
}

Header.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string
};

Header.defaultProps = {
  title: 'Scoreboard'
}


export default Header;