import React, { Component } from "react";
class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleMenuClick() {
    console.log("onClick hadle menu click");
  }
  render() {
    return (
      <div>
        {/* <div className="hamburger">
          <span className="single-menu"></span>
          <span className="single-menu"></span>
          <span className="single-menu"></span>
        </div> */}
        <button
          className="btn btn-primary btn-sm"
          onClick={() => {
            this.handleMenuClick();
          }}
        >
          Click
        </button>
      </div>
    );
  }
}

export default Header;
