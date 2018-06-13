import * as types from '../constants/ActionTypes';
import { addUser, messageRecieved, populateUsersList} from '../actions/index.js';

const setupSocket = (dispatch, username) => {
  const socket = new WebSocket('ws:http//localhost:9999 ')

  socket.onopen = () => {
    socket.send(JSON.stringify({
      type: types.ADD_USER,
      name: username
    }))
  }
  socket.onmessage = (event) => {
    const data = JSON.parse(event.data)
    switch (data.types) {
      case types.ADD_MESSAGE:
        // dispatching the properties of the message that was recieved.
        dispatch(messageRecieved(data.message, data.author))
        break
      case types.ADD_USER:
        dispatch(addUser(data.name))
        break
      case types.USERS_LIST:
        dispatch(populateUsersList(data.users))
        break
      default:
        break
    }
  }
  return socket
}

export default setupSocket;

/*
  - setupSocket
  Passing in "dispatch" will allow us to dispatch events.
  - socket
  This sets up a new websocket for the clients to communicate through
  (This is dependant on whether we are running this applicaiton locally or
  on a web server).
  - socket.onopen
  An event listener that's activated once we open the socket connection.
  In this case, it is used to send the username once opened.
  Then it'll send the notification to all connected clients that a new
  user has joined the session (chatroom).
  - socket.onmessage
  An event listener to be called when a message is received from the server.
  The listener receives a MessageEvent named "message".
  - messageRecieved
  This is when a message is being recieved from the server.
*/
