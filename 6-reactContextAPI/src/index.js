import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from './components/Context/index.js'; // You don't actually need /index.js -
                                               // node will look for an index.js file
                                               // if no file is specified.

import App from './components/App';
import './index.css';

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')

);
