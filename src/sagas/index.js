import { takeEvery } from 'redux-saga/effects';
import * as types from '../constants/ActionTypes';

// The "function*" is a generator function.
// That means whenever you run the function,
// it'll return something slightly different (new).
// Whenever you have a generator function, you have to use yield.
// "yield" basically gets (yields) the next new value.
const handleNewMessage = function* handleNewMessage(params) {
  // take every action of "type.ADD_MESSAGE"
  yield takeEvery(types.ADD_MESSAGE, (action) => {
    action.author = params.username
    params.socket.send(JSON.stringify(action)) //sends a message to the websocket
  })
}

export default handleNewMessage;
/*
  - Take every action of type.ADD_MESSAGE.
  When this occurs, send a message to the websocket,
  passing in the "action" and some details.
  - So the chat message sent by the usercan be dispatched
  to all connected clients on the server.
*/
