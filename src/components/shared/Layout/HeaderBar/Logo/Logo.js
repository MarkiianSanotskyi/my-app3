import React from "react";
import styled from "styled-components";
import logoImage from "../../../../../assets/logo.png";

const Styles = styled.div`
  text-align: center;
  a,
  img {
    max-width: 100px;
  }
`;

const Logo = () => (
  <Styles>
    <a href="/" className="logo">
      <img src={logoImage} alt="logo" />
    </a>
  </Styles>
);

export default Logo;
