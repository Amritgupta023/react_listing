import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import LoginComponent from "./login";
import SignUpComponent from "./Signup";

class AuthComponent extends Component {
  render() {
    return (
      <div>
        {/* <h1>Auth Component</h1> */}
        <Switch>
          <Route path="/auth/login">
            <LoginComponent />
          </Route>
          <Route path="/auth/signup">
            <SignUpComponent />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default AuthComponent;
