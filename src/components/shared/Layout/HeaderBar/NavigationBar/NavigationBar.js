import React from "react";
import { UlListBar, LiListBar, LinkListBar } from "./style";

const NavigationBar = () => <UlListBar>{iconSearchList}</UlListBar>;

let iconSearchList = [];

const pageNames = ["Home", "Gallery", "AboutUs", "Contact"];

for (let i = 0; i < pageNames.length; i++) {
  iconSearchList.push(
    <LiListBar key={"LiListBar" + i}>
      <LinkListBar href="/">{pageNames[i]}</LinkListBar>
    </LiListBar>
  );
}

export default NavigationBar;
