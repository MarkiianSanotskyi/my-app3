import React from "react";
import HeaderBar from "./HeaderBar/HeaderBar";
import FooterBar from "./FooterBar/FooterBar";

export const Layout = props => (
  <React.Fragment>
    <HeaderBar />
    {props.children}
    <FooterBar />
  </React.Fragment>
);
