import { connect } from 'react-redux';
import MessagesListComponent from '../components/MessagesList';

// The below function connects to AddMessageComponent
export const MessagesList = connect(state => ({
  messages: state.messages
}), {})(MessagesListComponent)
