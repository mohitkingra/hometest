import React, { Component } from 'react';
import Navigator from './navigator.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <span>
	           Signed in as  
	        </span>
	        <a
            className="App-link"
            href="#"
            >
            Member
          </a>
	        <span>
	           ->
	        </span>
          <a
            className="App-link"
            href="#"
          >
            Sign out
          </a>
        </header>
	      <Navigator />
        <footer className="App-footer">
          <p>
            Copyright Thoughtworks Inc.
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
