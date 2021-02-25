import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import "./style.css";
import AppBar from "material-ui/AppBar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
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

    const ButtonStyled = () => {
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
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar className="appBarBox" title="Enter User Details" />
          <div className="center">
            <TextField
              className="form-input"
              variant="outlined"
              type="text"
              label="Enter Your First Name"
              onChange={handleChange("firstName")}
              defaultValue={values.firstName}
            />
            <br />
            <TextField
              className="form-input"
              variant="outlined"
              type="text"
              label="Enter Your Last Name"
              onChange={handleChange("lastName")}
              defaultValue={values.lastName}
            />
            <br />
            <TextField
              className="form-input"
              variant="outlined"
              type="email"
              label="Enter Your Email"
              onChange={handleChange("email")}
              defaultValue={values.email}
            />
            <br />
            <ButtonStyled>Continue</ButtonStyled>
          </div>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;
