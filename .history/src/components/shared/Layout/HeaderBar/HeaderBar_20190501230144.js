import React from "react";
import styled from "styled-components";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";

const Styles = styled.div`
  #header {
    background: #fff;
    z-index: 70;
    position: relative;
    border-bottom: 1px solid rgba(36, 50, 56, 0.2);
  }
`;

const HeaderBar = () => (
  <Styles>
    <header id="header">
      <Logo />
      <SearchBar />
    </header>
  </Styles>
);

export default HeaderBar;
