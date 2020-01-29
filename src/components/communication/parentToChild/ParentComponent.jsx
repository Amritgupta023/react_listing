import React, { Component } from "react";
import ChildComponent from "./ChildComponent";
class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
  }

  handleParentBtn() {
    this.setState({
      message: "updated message" + Math.floor(Math.random() * 10)
    });
  }
  render() {
    return (
      <div>
        <ChildComponent message={this.state.message} />
        <button
          className="btn btn-primary"
          onClick={() => {
            this.handleParentBtn();
          }}
        >
          Btn
        </button>
      </div>
    );
  }
}

export default ParentComponent;
