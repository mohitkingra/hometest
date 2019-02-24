import React, { Component } from 'react';
import Resources from './resources.js';
import './agent.css';

import data from './data.json';

class Agent extends Component {

  constructor(props) { 
	super(props);
	
	this.state = {
	  entries : data.agents
	}
	
  }
  render() {

	return(
	 <div className="agent">
         	{this.state.entries.map(function(entry) {
	 		return(
				<div className="agent-entry">
					{entry.name + "|" + entry.state + "|" + entry.ip + "|" + entry.path}
					<Resources />
				</div>
			);
	  	})} 
	 </div>
	);
  }
}
export default Agent;
