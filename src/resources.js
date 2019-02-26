import React, { Component } from "react";
import "./resources.css";

let styles = {
  click: {
    display: "block"
  },
  notclicked: {
    display: "none"
  }
};
class Resources extends Component {
  constructor(props) {
    super(props);

    this.state = {
      click: false,
      resources: []
    };
  }

  linkClicked() {
    this.setState({
      click: !this.state.click
    });
  }

  addResource(event) {
    event.preventDefault();
    let rsc = this.state.resources;

    this.refs.addresource.value.split(",").forEach(function(resource) {
      rsc = rsc.concat(resource);
    });

    this.setState({
      resources: rsc
    });
  }

  deleteResource(event) {
    const ele = event.currentTarget.parentNode;
    const delresource = ele.innerText.substring(0, ele.innerText.length - 1);

    let rsc = this.state.resources;
    rsc = rsc.filter(resource => resource !== delresource);

    this.setState({
      resources: rsc
    });
  }

  render() {
    let Resources = [];

    if (this.state.resources.length > 0) {
      Resources = this.state.resources.map((resource, index) => {
        return (
          <div key={index} className="resources-list-space">
            {resource}
            <span
              className="close"
              onClick={this.deleteResource.bind(this)}
            >
              x
            </span>
          </div>
        );
      });
    }

    return (
      <div className="resources">
        <div>
          +
          <a
            href="javascript:void(0)"
            className="resources-link"
            onClick={this.linkClicked.bind(this)}
          >
            Specify Resources
          </a>
          <form
            onSubmit={this.addResource.bind(this)}
            style={this.state.click ? styles.clicked : styles.notclicked}
          >
            <input type="text" ref="addresource" />
            <input type="submit" />
          </form>
        </div>
        <span> | </span>
        <div className="resources-list">Resources: {Resources}</div>
      </div>
    );
  }
}

export default Resources;
