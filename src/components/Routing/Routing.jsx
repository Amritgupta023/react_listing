import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

import About from "./About";
import Dashboard from "./Dashboard";
import Home from "./Home";

class Routing extends Component {
  // state = {  }
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Routing</h1>
        {/* <ul>
          <li>Home</li>
          <li>About</li>
          <li>DashBoard</li>
        </ul> */}
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="dashboard">Dashboard</Link>
              </li>
            </ul>
          </div>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Routing;
