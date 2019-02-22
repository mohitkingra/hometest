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
	   <a
            className="nav-link"
           >
            DASHBOARD  
           </a>
	   <a
            className="nav-link"
	    href="#"
	    onClick={this.onClick.bind(this)}
           >
            MY CRUISE
           </a>
	   <a
            className="nav-link"
           >
            AGENTS
           </a>
	   <a
            className="nav-link"
           >
            Help
           </a>
	  </div>
        {this.state.show && <Agent />}
	</div>
	);
  }
}
export default Navigator;
