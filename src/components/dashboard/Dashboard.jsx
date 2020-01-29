import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import DashBoard1 from "./Dashboard1";
import Dashboard2 from "./Dashboard2";
import Dashboard3 from "./DAshboard3";

class DashboardComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    console.log("dashboard loaddd", Router);
    return (
      <div>
        <Router>
          <ul>
            <li>
              <Link to="/dashboard/dashboard1">Dashboard1</Link>
            </li>
            <li>
              <Link to="/dashboard/dashboard2">Dashboard2</Link>
            </li>
            <li>
              <Link to="/dashboard/dashboard3">Dashboard3</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/dashboard/dashboard1">
              <DashBoard1 />
            </Route>
            <Route path="/dashboard/dashboard2">
              <Dashboard2 />
            </Route>
            <Route path="/dashboard/dashboard3">
              <Dashboard3 />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default DashboardComponent;
