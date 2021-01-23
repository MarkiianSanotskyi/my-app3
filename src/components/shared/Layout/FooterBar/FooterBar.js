import React from "react";
import { Footer, Container } from "./style";
import CopyrightBar from "./CopyrightBar/CopyrightBar";
import NavigationBar from "../NavigationBar/NavigationBar";
import FooterPayment from "./FooterPayment/FooterPayment";

const FooterBar = () => (
  <Footer>
    <Container>
      <CopyrightBar />
      <NavigationBar />
      <FooterPayment />
    </Container>
  </Footer>
);

export default FooterBar;
