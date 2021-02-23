import React from "react";
import { UlListBar, LiListBar, LinkListBar } from "./style";

const NavigationBar = () => <UlListBar>{iconSearchList}</UlListBar>;

let iconSearchList = [];

const pageNames = ["Home", "Gallery", "AboutUs", "Contact"];

for (let i = 0; i < pageNames.length; i++) {
  if (i === 0) {
    iconSearchList.push(
      <LiListBar key={"LiListBar" + i}>
        <LinkListBar href="/my-app3">{pageNames[i]}</LinkListBar>
      </LiListBar>
    );
  } else {
    iconSearchList.push(
      <LiListBar key={"LiListBar" + i}>
        <LinkListBar href={`/${pageNames[i]}`}>{pageNames[i]}</LinkListBar>
      </LiListBar>
    );
  }
}

export default NavigationBar;
