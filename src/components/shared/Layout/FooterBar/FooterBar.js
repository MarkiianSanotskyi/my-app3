import React from "react";
import { Footer, Container } from "./style";
import CopyrightBar from "../CopyrightBar/CopyrightBar";
import FooterNavigationBar from "../FooterNavigationBar/FooterNavigationBar";
import FooterPayment from "../FooterPayment/FooterPayment";

const FooterBar = () => (
  <Footer>
    <Container>
      <CopyrightBar />
      <FooterNavigationBar />
      <FooterPayment />
    </Container>
  </Footer>
);

export default FooterBar;
