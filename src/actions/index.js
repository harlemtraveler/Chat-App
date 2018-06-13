// Importing all contents from "src/constants/ActionTypes" directory
import * as types from '../constants/ActionTypes';

let nextMessageId = 0 //nextMessageId will be used for all users' message logs.
let nextUserId = 0

// addMessage is for when YOU the user is adding a message.
export const addMessage = (message, author) => ({
  type: types.ADD_MESSAGE,
  id: nextMessageId++,
  message, // The message body was passed in as a parameter.
  author // The message author was passed in as a parameter.
})

export const addUser = name => ({
  type: types.ADD_USER,
  id: nextUserId++,
  name // The name was passed in as a parameter.
})

// messageRecieved is for when another user in the chat program adds a message.
export const messageRecieved = (message, author) => ({
  type: types.MESSAGE_RECEIVED,
  id: nextMessageId++,
  message,
  author
})

export const populateUsersList = users => ({
  type: types.USERS_LIST,
  users
})

/*
  note:
  These actions do not alter state.
  The Reducers are responsible for creating a new state
  when an action is dispatched.
*/
/*
  - First action - (addMessage)
  If going to add a message, the action "addMessage"
  is called. It will be passed the message's body and author.

  When a message is added, it specifies the "type" and assigns an id.
  When adding a new message, the type is ADD_MESSAGE and
  the id is the value of the variable nextMessageId incremeted by 1.
*/

/*
  - second action - (addUser)
  When a user is added, it specifies the "type" and assigns an id.
  When adding a new user, the type is ADD_USER and
  the id is the value of nextUserId incremented by 1.
*/

/*
  - third action - (messageRecieved)
  When a message is recieved, it specifies the "type" and assigns an id.
  When recieving a message, the type is MESSAGE_RECEIVED and
  the id is the value of the variable nextMessageId incremeted by 1.
*/

/*
  - fourth action - (populateUsersList)
  The server will send updates to the Users List when a person joins or
  quites the chat.
*/
