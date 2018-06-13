import { connect } from 'react-redux';
import SidebarComponent from '../components/Sidebar';

// The below function connects to AddMessageComponent
export const Sidebar = connect(state => ({
  users: state.users
}), {})(SidebarComponent)
