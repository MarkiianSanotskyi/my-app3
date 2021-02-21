import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar className="appBarBox" title="Enter Personal Details" />
          <div className="center">
            <TextField
              hintText="Enter Your Occupation"
              floatingLabelText="Occupation"
              onChange={handleChange("occupation")}
              defaultValue={values.occupation}
            />
            <br />
            <TextField
              hintText="Enter Your City"
              floatingLabelText="City"
              onChange={handleChange("city")}
              defaultValue={values.city}
            />
            <br />
            <TextField
              hintText="Enter Your Bio"
              floatingLabelText="Bio"
              onChange={handleChange("bio")}
              defaultValue={values.bio}
            />
            <br />
            <RaisedButton
              className="marginBtn"
              label="Continue"
              primary={true}
              onClick={this.continue}
            />
            <RaisedButton
              className="marginBtn"
              label="Back"
              primary={false}
              onClick={this.back}
            />
          </div>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default FormPersonalDetails;
