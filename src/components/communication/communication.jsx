import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import ParentComponent from "./parentToChild/ParentComponent";
import ChildToParent from "./ChildToParent";
class CommunicationComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        Communicationa Component
        <Router>
          <ul>
            <li>
              <Link to="/communication/parent-to-child">Parent To Child</Link>
            </li>
            <li>
              <Link to="/communication/child-to-parent">Child To Parent</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/communication/parent-to-child">
              <ParentComponent />
            </Route>
            <Route path="/communication/child-to-parent">
              <ChildToParent />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default CommunicationComponent;
