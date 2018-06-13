import { connect } from 'react-redux';
import AddMessageComponent from '../components/AddMessage';
import { addMessage } from '../actions';

const mapDispatchToProps = dispatch => ({
  dispatch: (message, author) => {
    dispatch(addMessage(message, author))
  }
})

// The below function connects to AddMessageComponent
export const AddMessage = connect(() => ({}), mapDispatchToProps)(AddMessageComponent)
