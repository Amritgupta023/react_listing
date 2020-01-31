import React, { Component } from "react";
class LifeCycleComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    console.log("constructor", props);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ message: "after 2 sec" });
    }, 2000);
    console.log("component did mount");
  }

  static getDerivedStateFromProps() {
    console.log("get derived state from props");
    return null;
  }

  //Update

  shouldComponentUpdate() {
    console.log("should component update");
    return true;
  }
  getSnapshotBeforeUpdate() {
    console.log("get snap shot before update");
    return null;
  }
  componentDidUpdate() {
    console.log("component did update");
  }

  //Unmounting

  componentWillUnmount() {
    console.log("component will unmount");
  }

  render() {
    console.log("render method");
    return <div>LifeCycleCompoent</div>;
  }
}

export default LifeCycleComponent;
