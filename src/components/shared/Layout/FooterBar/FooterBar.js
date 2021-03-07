import React from "react";
import { Link } from "react-router-dom";
import { Footer, Container, Test } from "./style";
import "./style.css";
import CopyrightBar from "./CopyrightBar/CopyrightBar";
import NavigationBar from "../HeaderBar/NavigationBar/NavigationBar";
import FooterPayment from "./FooterPayment/FooterPayment";
import Facebook from "../../../buttons/Facebook";

const FooterBar = props => (
  <Footer>
    <div className="fb-footer">
      <Facebook />
    </div>
    <div className="sendToLogIn">
      <Link onClick={props.press} className="btn" to="/home-login">
        LogIn Component
      </Link>
    </div>
    <Container>
      <CopyrightBar />
      <Link className="btn addDataBtn" to="/add-data-form">
        Add Data
      </Link>
      <Test>
        <NavigationBar />
      </Test>
      <FooterPayment />
    </Container>
  </Footer>
);

export default FooterBar;
