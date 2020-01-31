import React, { Component } from "react";
import "./login.css";
class LoginComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: "",
      email: ""
    };
  }

  handleEmailInput(event) {
    this.setState({ email: event.target.value });
  }
  handlePasswordInput(event) {
    this.setState({ password: event.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log("The state will be:", this.state);
  }

  render() {
    return (
      <div className="login-container">
        <div className="login-box">
          <form
            onSubmit={e => {
              this.handleSubmit(e);
            }}
          >
            <div className="row">
              <div className="col-12 margin-top-20" align="center">
                <label htmlFor="Email Id">Email Id</label>
                <br />
                <input
                  type="text"
                  className="email-input"
                  value={this.state.email}
                  name="email"
                  id=""
                  onChange={e => {
                    this.handleEmailInput(e);
                  }}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12 margin-top-20" align="center">
                <label htmlFor="password">password</label>
                <br />
                <input
                  type="text"
                  className="password-input"
                  value={this.state.password}
                  name="password"
                  id=""
                  onChange={e => {
                    this.handlePasswordInput(e);
                  }}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12 margin-top-20" align="center">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginComponent;
