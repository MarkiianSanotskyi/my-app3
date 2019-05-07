import React from "react";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import SelectLangBar from "../SelectLangBar/SelectLangBar";
import { Header, Container } from "./style";
import NavigationBar from "../NavigationBar/NavigationBar";
const HeaderBar = () => (
  <Header>
    <Container>
      <Logo />
      <SearchBar />
      <SelectLangBar />
      <NavigationBar />
    </Container>
  </Header>
);

export default HeaderBar;
