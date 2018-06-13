import React from 'react';
import PropTypes from 'prop-types';

const AddMessage = (props) => {
  let input

  return(
    <section id="new-message">
      <input onKeyPress={(e) => {
        if (e.key === 'Enter') {
          props.dispatch(input.value, 'Me')
          input.value = ''
        }
      }}
      type="text" //the type of input field
      ref={(node) => {
        input = node
      }} />
    </section>
  );
}

AddMessage.PropTypes = {
  dispatch: PropTypes.func.isRequired
}

export default AddMessage;

/*
  - <input> - (onKeyPress)
  If a key is press into the input field, the input element
  captures the event (e).

  - <input> - (onKeyPress) - (if)
  Checks the captured key from the event (e) and compares it
  to the specified value "Enter".
  If the captured key matches the specified key,
  then a action is "dispatched".

  - <input> - (onKeyPress) - (if) - props.dispatch
  Calls an action and passes the value of the input field
  and the user's name.
  After the dispatch is performed, the input field's value
  is set to an empty string (Because the message was sent, clear the field)

  ***props.dispatch***
  To make this work, we have to declare and set the value
  of dispatch.
  Declared with "AddMessage.PropTypes ={dispatch:PropTypes.func.isRequired}"

  - <input> - type
  Be sure to declare the type of input the field accepts.

  - <input> - ref
  The reference takes in the node and assigns it as the value of input.
*/
