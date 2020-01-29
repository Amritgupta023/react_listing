import React, { Component } from "react";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "before child component pass data"
    };
  }

  handleDataFromChild(data) {
    this.setState({
      message: `data from child component ${data}`
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <ChildComp
          onPassingData={data => {
            this.handleDataFromChild(data);
          }}
        />
      </div>
    );
  }
}

class ChildComp extends Component {
  state = {};
  render() {
    console.log("The props will be:", this.props);
    return (
      <div>
        Child to ParentComp
        <button
          className="btn btn-primary"
          onClick={() => {
            this.props.onPassingData(Math.random() * 10);
          }}
        >
          Btn
        </button>
      </div>
    );
  }
}

// export default ChildComp;

export default ParentComp;
