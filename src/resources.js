import React, { Component } from 'react';
import './resources.css';

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

  addResource() {
  	let rsc = this.state.resources;
  	rsc = rsc.concat(this.refs.addresource.value);
  	this.setState({
  		resources : rsc
  	});

  }

  deleteResource() {
    const el = this.element.parentElement;
    el.style.display="none";

    const delresource = el.innerText.substring(0, el.innerText.length - 1);

    let rsc = this.state.resources;
    rsc = rsc.filter(resource => resource !== delresource)
    this.setState({
      resources : rsc
    })

  }

  render() {

  	let Resources = [];

  	if(this.state.resources.length > 0){
  		Resources = this.state.resources.map((resource, index) => {
  			return(
  				<div>
            		{resource}
            		<span className="close" onClick={this.deleteResource.bind(this)} ref={el => this.element = el}>x</span>
  			  	</div>
        );
  		})
    }

	return(
	 <div className="resources">
	   <div>
         +<a href="#" className="resources-link" onClick={this.linkClicked.bind(this)}> Specify Resources </a>
         <form onSubmit={this.addResource.bind(this)} style={this.state.click? styles.clicked : styles.notclicked}>
			     <input type="text" ref="addresource" />
			     <input type="submit" />
		     </form>
	   </div>
	   <span> | </span>
	   <div className="resources-list">
	 	   Resources : {Resources}
	   </div>
	 </div>
	);
  }
}

export default Resources;
