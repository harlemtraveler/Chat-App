import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// createStore is where we store all the data for the app
import { createStore, applyMiddleware } from 'redux';
// This initializes the redux-saga middleware
import createSagaMiddleware from 'redux-saga';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import { addUser } from './actions';
import setupSocket from './sockets/index';
import handleNewMessage from './sagas';
import username from './utils/name';
// chat (the reducer) is the App's data
import reducers from './reducers';

const sagaMiddleware = createSagaMiddleware()

// 1. The store variable calls "createStore" and passes our data for storage.
// The applyMiddleware is a middleware from redux.
// Here we initialize redux-saga middleware with "applyMiddleware".
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
)

// 2. After initializing the redux-saga middleware, we set up a socket.
// This is done using "setupSocket" and passing the dispatch func and username.
const socket = setupSocket(store.dispatch, username)

// 3. Then we actually run the middleware.
// We pass the middleware the handleNewMessage func from the "./sagas".
// handleNewMessage is passed the socket (which contains the
// dispatch function & username) we created and the username.
sagaMiddleware.run(handleNewMessage, {socket, username})

// This initializes the store (diplays users in chat)
// store.dispatch(addUser('Me'))

// Our app's state will always be "read only" when using redux
// To alter the state, we use "actions"
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();


/*
  [*] THIS APP HAS BACK-END & NEEDS TO HAVE THE SERVER STARTED
  - ENTER THE FOLLOWING COMMAND:

  $~>  sudo chmod 0777 ./server/app.js

  $~>  node server/app.js

  1. Initialize Saga middleware.
  2. Initialize socket.
  3. Run the Saga middleware.

  - After initiaalizing the middleware, we initializethe socket
  so we can reference it in the saga.
  - We then run the middleware and pass in the handleNewMessage saga and the
  socket, which has the the dispatch function and username.
  (This is replacing the initial dispatch function that just
  rendered "Me" as the username for everyone.)
  ***For the purpose of this example, we are going to use a dynamic username
  generator (using "chance.js") in the app for now***

*/
