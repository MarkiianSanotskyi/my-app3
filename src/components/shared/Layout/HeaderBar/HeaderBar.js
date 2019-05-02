import React from "react";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";

import { Header, Container } from "./style";

const HeaderBar = () => ( <
    Header >
    <
    Container className = "container" >
    <
    Logo / >
    <
    SearchBar / >
    <
    /Container>{" "} <
    /Header>
);

export default HeaderBar;