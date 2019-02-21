import React, { Component } from 'react';
import './navigator.css';

class Navigator extends Component {
  render() {
	return(
         <div className="nav">
	   <a
            className="nav-link"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
           >
            DASHBOARD
           </a>
	   <a
            className="nav-link"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
           >
            MY CRUISE
           </a>
	   <a
            className="nav-link"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
           >
            AGENTS
           </a>
	   <a
            className="nav-link"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
           >
            Help
           </a>
	  </div>
	);
  }
}
export default Navigator;
