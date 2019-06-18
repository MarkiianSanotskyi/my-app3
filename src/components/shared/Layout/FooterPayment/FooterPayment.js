import React from "react";
import { UlListBar, LiListBar } from "./style";
import Logo from "../Logo/Logo";

const FooterPayment = () => (
  <UlListBar>
    <LiListBar>Secure Payment:</LiListBar>
    {linksFooterPayments}
  </UlListBar>
);

let linksFooterPayments = [];

for (let i = 0; i < 5; i++) {
  linksFooterPayments.push(
    <LiListBar>
      <Logo />
    </LiListBar>
  );
}

export default FooterPayment;
