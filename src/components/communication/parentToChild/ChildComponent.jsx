import React, { Component } from "react";
class ChildComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Before change"
    };
  }

  render() {
    console.log(this.props);
    return <div>{this.props.message || this.state.message}</div>;
  }
}

export default ChildComponent;
