import React, { Component } from 'react';
import Agent from './agent.js';
import './navigator.css';

class Navigator extends Component {
  
  constructor(props) {
   super(props); 
   this.state = {
     show : false
   } 
  }

  onClick() {
   this.setState({show: !this.state.show});

  }

  render() {
	return(
	    <div>
        <div className="nav">
          <div className="rcorner"><a className="nav-link">DASHBOARD</a></div>
	        <div className="rcorner"><a className="nav-link" href="#" onClick={this.onClick.bind(this)}>MY CRUISE</a></div>
	        <div className="rcorner"><a className="nav-link">AGENTS</a></div>
	        <div className="rcorner"><a className="nav-link">Help</a></div>
	     </div>
       {this.state.show && <Agent />}
	    </div>
	);
  }
}
export default Navigator;
