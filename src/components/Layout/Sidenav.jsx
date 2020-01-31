import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  NavLink as Link,
  Route
} from "react-router-dom";

class Sidenav extends Component {
  state = {};
  render() {
    return (
      <div>
        <ul className="sidenav-ul">
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/forms">Forms</Link>
          </li>
          <li>
            <Link to="/communication">Communication</Link>
          </li>
          <li>
            <Link to="/functional_component">Functional Component</Link>
          </li>
          <li>
            <Link to="/lifecycle">Life Cycle</Link>
          </li>
          <li>
            <Link to="/hoc">HOC</Link>
          </li>
          <li>
            <Link to="/redux">Redux</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidenav;
