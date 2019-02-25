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
         		{this.state.entries.map(function(entry) {

	 				return(
	 					<div className={entry.state === "building" ? "agent-insideb" : "agent-insidei"}>
	 						<span className="dot"></span>
							<div className="agent-entry">
								{entry.name + "	| " + entry.state + " | " + entry.ip + " | " + entry.path}
								<Resources />
							</div>	
						</div>
					);
	  			})} 
	 		</div>
	 		<div className="agent-summary">
	 			Summary 
	 			<div class="line"></div>
	 			<div>
	 				building : {this.getState("building")}
	 				<br/>
	 				idle : {this.getState("idle")}
	 			</div>
	 			<div class="line"></div>
	 			History
	 			<div class="line"></div>
	 		</div>
		</div>
	);
  }
}
export default Agent;
