import React from "react";
import styled from "styled-components";
import { Footer, Container } from "./style";
import CopyrightBar from "../CopyrightBar/CopyrightBar";
import FooterNavigationBar from "../FooterNavigationBar/FooterNavigationBar";
import FooterPayment from "../FooterPayment/FooterPayment";

const Styles = styled.div`
  .footer {
    background-color: #222;
    height: 50px;
    line-height: 50px;
    margin-top: 80px;
    p {
      color: white;
      text-align: center;
    }
  }
`;

const FooterBar = () => (
  <Styles>
    <Footer>
      <Container className="container">
        <CopyrightBar />
        <FooterNavigationBar />
        <FooterPayment />
      </Container>
    </Footer>
  </Styles>
);

export default FooterBar;
