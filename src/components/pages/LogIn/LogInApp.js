import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeLogin from "./authLogin/pagesLogin/HomeLogin";
import StaffLogin from "./authLogin/pagesLogin/StaffLogin";
import NavbarLogin from "./layoutLogin/NavbarLogin";

export class LoginApp extends Component {
  render() {
    return (
      <Router>
        <div className="AppLogin">
          <NavbarLogin />
          <div className="container">
            <Route path="/home-login" exact={true} component={HomeLogin} />
            <Route path="/staff-login" exact={true} component={StaffLogin} />
          </div>
        </div>
      </Router>
    );
  }
}

export default LoginApp;
