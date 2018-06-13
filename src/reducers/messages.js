import * as types from '../constants/ActionTypes';

const messages = (state = [], action) => {
  switch (action.type) {
    // Here we'll combine two cases to have same return value.
    // We are referencing constants variables from the ActionTypes
    // with types.[CONSTANT_NAME] file.
    case types.ADD_MESSAGE:
    case types.MESSAGE_RECEIVED:
      // state.concat allows us to append to the end of state.
      return state.concat([
        {
          message: action.message,
          author: action.author,
          id: action.id
        }
      ])
    // If the action is not any of those listed above,
    // then do nothing and just return the state.
    default:
      return state
  }
}

export default messages;

/*
  - This reducer is responsible for changing the state of messages
    in the app.
  - If there is no state, state will be an empty array, else the
    current state will be passed in then return the new state.
  - A switch statement is used to determine which action is used.
  - The action is passed into the switch statement.
  - The action's property of "type" is called with "action.type".
  - ***Refer to index.js in the "actions" folder of your app
    to view action's properties.***
*/

/*
  For any reducer, always pass in the current state
  and an action, then return the new state.
*/
