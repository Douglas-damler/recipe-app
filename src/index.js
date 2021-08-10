import React from 'react';
import { store } from './app/store';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './app/App'
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

