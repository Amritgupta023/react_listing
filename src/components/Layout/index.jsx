import React, { Component } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Sidenav from "./Sidenav";
import Content from "./Content";

import { BrowserRouter as Router } from "react-router-dom";

import "./layout.css";

class LayoutComponent extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div className="layout-container">
          <div className="header-container">
            <Header />
          </div>
          <div className="sidenav-container">
            <Sidenav />
          </div>
          <div className="content-container">
            <Content />
          </div>
          <div className="footer-container">
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default LayoutComponent;
