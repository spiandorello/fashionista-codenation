import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './containers';

import * as serviceWorker from './serviceWorker';

import './styles/globalStyles.scss'

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

serviceWorker.unregister();
