import React from "react";
import { Link } from "react-router-dom";
import { Footer, Container, Test } from "./style";
import "./style.css";
import CopyrightBar from "./CopyrightBar/CopyrightBar";
import NavigationBar from "../HeaderBar/NavigationBar/NavigationBar";
import FooterPayment from "./FooterPayment/FooterPayment";
import Facebook from "../../../buttons/Facebook";

const FooterBar = () => (
  <Footer>
    <div
      className="fb-footer"
      style={{
        width: "100%",
        textAlign: "center",
        paddingBottom: "20px"
      }}
    >
      <Facebook />
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
