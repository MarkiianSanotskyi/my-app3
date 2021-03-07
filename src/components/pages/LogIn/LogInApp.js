import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Security, SecureRoute } from "@okta/okta-react";
import { ImplicitCallback } from "@okta/okta-react";

import HomeLogin from "./authLogin/pagesLogin/HomeLogin";
import StaffLogin from "./authLogin/pagesLogin/StaffLogin";
import NavbarLogin from "./layoutLogin/NavbarLogin";
import Login from "./authLogin/Login";

function onAuthRequired({ history }) {
  history.push("/home-login");
}

export class LoginApp extends Component {
  render() {
    return (
      <Router>
        <Security
          issuer="https://dev-17777440.okta.com/oauth2/default"
          client_id="0oaawzq5xi8mda2ad5d6"
          redirect_uri={window.location.origin + "/implicit/callback"}
          onAuthRequired={onAuthRequired}
        >
          <div className="AppLogin">
            <NavbarLogin />
            <div className="container">
              <Route path="/home-login" exact={true} component={HomeLogin} />
              <SecureRoute
                path="/staff-login"
                exact={true}
                component={StaffLogin}
              />
              <Route
                path="/home-login"
                render={() => <Login baseUrl="https://dev-17777440.okta.com" />}
              />
              <Route path="/implicit/callback" component={ImplicitCallback} />
            </div>
          </div>
        </Security>
      </Router>
    );
  }
}

export default LoginApp;
