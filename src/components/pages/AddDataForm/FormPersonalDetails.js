import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

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
    const useStyles = makeStyles({
      root: {
        backgroundColor: "#f4511e",
        marginTop: "15px",
        color: "white",
        borderRadius: "0"
      }
    });

    const useStylesSecond = makeStyles({
      root: {
        backgroundColor: "white",
        marginTop: "15px",
        color: "#f4511e",
        borderRadius: "0"
      }
    });

    const ButtonStyledContinue = () => {
      const classes = useStyles();
      return (
        <Button
          color="primary"
          className={classes.root}
          onClick={this.continue}
        >
          Continue
        </Button>
      );
    };
    const ButtonStyledBack = () => {
      const classes = useStylesSecond();
      return (
        <Button className={classes.root} onClick={this.back}>
          Back
        </Button>
      );
    };
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar className="appBarBox" title="Enter Personal Details" />
          <div className="center">
            <TextField
              className="form-input"
              variant="outlined"
              type="text"
              label="Enter Your Occupation"
              onChange={handleChange("occupation")}
              defaultValue={values.occupation}
            />
            <br />
            <TextField
              className="form-input"
              variant="outlined"
              type="text"
              label="Enter Your City"
              onChange={handleChange("city")}
              defaultValue={values.city}
            />
            <br />
            <TextField
              className="form-input"
              variant="outlined"
              type="text"
              label="Enter Your Bio"
              onChange={handleChange("bio")}
              defaultValue={values.bio}
            />
            <br />
            <ButtonGroup className="button-box">
              <ButtonStyledContinue
                className="marginBtn"
                label="Continue"
                primary={true}
                onClick={this.continue}
              />
              <ButtonStyledBack
                className="marginBtn"
                label="Back"
                primary={false}
                onClick={this.back}
              />
            </ButtonGroup>
          </div>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default FormPersonalDetails;
