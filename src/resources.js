import React, { Component } from 'react';

let styles = {
	click : {
		display : "block"
	},
	notclicked : {
		display : "none"
	}
}
class Resources extends Component {

  constructor(props) { 
	super(props);

	this.state = {
		click : false,
		resources : []
	}
  }

  linkClicked() {
  	this.setState({
  		click : !this.state.click
  	})
  }

  resourceSubmitted() {

  	let rsc = this.state.resources;
  	rsc = rsc.concat(this.element.value);
  	this.setState({
  		resources : rsc
  	});
  }

  render() {

  	let Resources = [];

  	if(this.state.resources.length){
  		Resources = this.state.resources.map((resource, index) => {
  			return(
  				<span>{resource}</span>
  			);
  		})
    }

	return(
	<div>
	 <div>
         <a href="#" onClick={this.linkClicked.bind(this)}>
         	Specify Resources 
         </a>
        <form onSubmit={this.resourceSubmitted.bind(this)} style={this.state.click? styles.clicked : styles.notclicked}>
			<input type="text" ref={el => this.element = el} />
			<input type="submit" />
		</form>
	 </div>
	 <div>
	 	Resources : {Resources}
	 </div>
	</div>
	);
  }
}

export default Resources;
