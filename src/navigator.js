import React, { Component } from 'react';
import Agent from './agent.js';
import './navigator.css';

class Navigator extends Component {
  
  constructor(props) {
   super(props); 
   this.state = {
     show : false,
   } 
  }

  onClick() {
   this.setState({show: !this.state.show});

  }

  render() {
	return(
	    <div>
        <div className="nav">
          <a className="nav-link">DASHBOARD</a>
	        <a className="nav-link">MY CRUISE</a>
	        <a className={!this.state.show ? "nav-link" : "navv-link"} href="#" onClick={this.onClick.bind(this)}>AGENTS</a>
	        <a className="nav-link">Help</a>
	      </div>
        <div className="highlight">
          Agents
          <div className="rcorner">All</div>
          <div className={!this.state.show ? "rcorner" : "rcorner-selected"}>Physical</div>
          <div className="rcorner">Virtual</div>
        </div>
        {this.state.show && <Agent />}
	    </div>
	);
  }
}
export default Navigator;
