import React from 'react';
import PropTypes from 'prop-types';

const Sidebar = ({ users }) => (
  <aside id="sidebar" className="sidebar">
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  </aside>
)

Sidebar.PropTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired
}

export default Sidebar;

/*
  - .PropTypes
  We always have to declare the data type of a passed
  varibale (string, number, func).
  If the passed variable has properties itself, we need to
  use methods such as "arrayOf"
  - PropTypes.shape
  The .shape method is used to declare the properties
  of a the passed variable.
  For example: users has two properties, name & id
*/
