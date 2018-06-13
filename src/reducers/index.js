// This file combines all reducer files into a single location.
import { combineReducers } from 'redux';
import messages from './messages';
import users from './users';

const chat = combineReducers({
  messages,
  users
})


export default chat;

/*
  For any reducer, always pass in the current state
  and an action, then return the new state.
*/
