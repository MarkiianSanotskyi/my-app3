import React from "react";
import { UlListBar, LiListBar } from "./style";
import Logo from "../../HeaderBar/Logo/Logo";

const FooterPayment = () => (
  <UlListBar>
    <LiListBar>Secure Payment:</LiListBar>
    {linksFooterPayments}
  </UlListBar>
);

let linksFooterPayments = [];

for (let i = 0; i < 3; i++) {
  linksFooterPayments.push(
    <LiListBar key={"LiListBar" + i}>
      <Logo />
    </LiListBar>
  );
}

export default FooterPayment;
