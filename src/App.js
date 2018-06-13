import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Sidebar } from './containers/Sidebar';
import { MessagesList } from './containers/Sidebar';
import { AddMessage } from './containers/Sidebar';

class App extends Component {
  render() {
    return (
      <div id="container">
        <Sidebar />
        <section id="main">
          <MessagesList />
          <AddMessage />
        </section>
      </div>
    );
  }
}

export default App;
