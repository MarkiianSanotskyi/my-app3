import React from "react";
import { Link } from "react-router-dom";
import { Footer, Container, Test } from "./style";
import "./style.css";
import CopyrightBar from "./CopyrightBar/CopyrightBar";
import NavigationBar from "../HeaderBar/NavigationBar/NavigationBar";
import FooterPayment from "./FooterPayment/FooterPayment";

const FooterBar = () => (
  <Footer>
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
