import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // Process API
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio }
    } = this.props;
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
          <AppBar className="appBarBox" title="Confirm User Data" />
          <div className="center">
            <List>
              <ListItem primaryText="First Name" secondaryText={firstName} />
              <ListItem primaryText="Last Name" secondaryText={lastName} />
              <ListItem primaryText="Email" secondaryText={email} />
              <ListItem primaryText="Occupation" secondaryText={occupation} />
              <ListItem primaryText="City" secondaryText={city} />
              <ListItem primaryText="BIO" secondaryText={bio} />
            </List>
            <ButtonGroup className="button-box">
              <ButtonStyledContinue
                label="Confirm & Continue"
                className="marginBtn"
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

export default Confirm;
