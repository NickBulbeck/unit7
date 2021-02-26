import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import './index.css'; // The <App /> component can be thought of as a proxy for a large block of
                      // code setting out HTML elements for rendering. All of that then just
                      // reads the CSS from ./index.css which is, by this statement, imported into
                      // scope here.

ReactDOM.render(
  <App />, 
  document.getElementById('root')
);
