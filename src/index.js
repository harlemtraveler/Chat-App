import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
// createStore is where we store all the data for the app
import { createStore } from 'redux';
// chat (the reducer) is the App's data
import chat from './reducers';
// The store var calls "createStore" and passes our data for storage
const store = createStore(chat)

// Our app's state will always be "read only" when using redux
// To alter the state, we use "actions"
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
