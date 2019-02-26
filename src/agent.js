import React, { Component } from 'react';
import Resources from './resources.js';
import './agent.css';

import data from './data.json';

class Agent extends Component {

  constructor(props) { 
	super(props);
	
	this.state = {
	  entries : data.agents,
	  building : 0,
	  idle : 0
	}

	let i =0,j = 0;

	this.state.entries.forEach(function(entry){
		if(entry.state === "building"){
			i++;
		}
		else if(entry.state === "idle"){
			j++;
		}
	})

	this.state.building = i;
	this.state.idle = j;

	this.getState = this.getState.bind(this);
	
  }

  getState(state) {
  	if(state === "building"){
  		return this.state.building;
  	}
  	else{
  		return this.state.idle;
  	}
  }

  render() {

	return(
		<div className="agent-top">
	 		<div className="agent-content">
         		{this.state.entries.map(function(entry, index) {

	 				return(
	 					<div key={index} className={entry.state === "building" ? "agent-insideb" : "agent-insidei"}>
	 						<span className="dot"></span>
							<div className="agent-entry">
								<strong>{entry.name + "	| " + entry.state + " | " + entry.ip + " | " + entry.path}</strong>
								<Resources />
							</div>	
						</div>
					);
	  			})} 
	 		</div>
	 		<div className="agent-summary">
	 			<strong>Summary</strong> 
	 			<div className="line"></div>
	 			<div>
	 				building : {this.getState("building")}<br/>
	 				idle : {this.getState("idle")}
	 			</div>
	 			<br/>
	 			<strong>History</strong>
	 			<div className="line"></div>
	 		</div>
		</div>
	);
  }
}
export default Agent;
