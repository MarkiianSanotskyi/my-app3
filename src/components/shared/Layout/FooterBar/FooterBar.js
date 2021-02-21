import React from "react";
import { Footer, Container, Test, AddData } from "./style";
import CopyrightBar from "./CopyrightBar/CopyrightBar";
import NavigationBar from "../HeaderBar/NavigationBar/NavigationBar";
import FooterPayment from "./FooterPayment/FooterPayment";

const FooterBar = () => (
  <Footer>
    <Container>
      <CopyrightBar />
      <AddData a="/">Add Data</AddData>
      <Test>
        <NavigationBar />
      </Test>
      <FooterPayment />
    </Container>
  </Footer>
);

export default FooterBar;
