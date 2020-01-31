import React from "react";

import "./App.css";
import AuthComponent from "./components/Auth";
import Layout from "./components/Layout/index";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/auth">
            <AuthComponent />
          </Route>
          <Route path="/">
            <Layout />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
