import React from "react";
import { Footer, Container, Test } from "./style";
import CopyrightBar from "./CopyrightBar/CopyrightBar";
import NavigationBar from "../HeaderBar/NavigationBar/NavigationBar";
import FooterPayment from "./FooterPayment/FooterPayment";

const FooterBar = () => (
  <Footer>
    <Container>
      <CopyrightBar />
      <Test>
        <NavigationBar />
      </Test>
      <FooterPayment />
    </Container>
  </Footer>
);

export default FooterBar;
