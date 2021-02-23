import React, { Component } from "react";
import { Link } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

export class Success extends Component {
  continue = e => {
    e.preventDefault();
    // Process Form //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar className="appBarBox" title="Success" />
          <div className="center additionDesctiption">
            <h1>Thank You For Your Submission</h1>
            <p>You will get an email with further instruction</p>
            <Link className="btn-white" to="/my-app3">
              Back To Home
            </Link>
          </div>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;
