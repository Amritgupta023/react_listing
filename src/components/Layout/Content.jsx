import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import DashBoard from "./../dashboard/Dashboard";
import FunctionalComponent from "../functionalComponent/functionalComponent";
import LifeCycleComponent from "../lifeCycle/lifeCycle";
import CommunicationComponent from "../communication/communication";
import FormsComponent from "../forms/forms";
import HOC from "../HOC/HOC";
class Content extends Component {
  state = {};
  render() {
    return (
      <Switch>
        <Route path="/dashboard">
          <DashBoard />
        </Route>
        <Route path="/forms">
          <FormsComponent />
        </Route>
        <Route path="/communication">
          <CommunicationComponent />
        </Route>
        <Route path="/functional_component">
          <FunctionalComponent />
        </Route>
        <Route path="/lifecycle">
          <LifeCycleComponent />
        </Route>
        <Route path="/hoc">
          <HOC />
        </Route>
      </Switch>
    );
  }
}

export default Content;
