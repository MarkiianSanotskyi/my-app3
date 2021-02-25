import React from "react";
import { Link } from "react-router-dom";
import { UlListBar, LiListBar } from "./style";
import "./style.css";

const NavigationBar = () => <UlListBar>{iconSearchList}</UlListBar>;

let iconSearchList = [];

const pageNames = ["home", "gallery", "aboutUs", "contact"];

for (let i = 0; i < pageNames.length; i++) {
  if (i === 0) {
    iconSearchList.push(
      <LiListBar key={"LiListBar" + i}>
        <Link className="link-list-bar" to="/my-app3">
          {pageNames[i]}
        </Link>
      </LiListBar>
    );
  } else {
    iconSearchList.push(
      <LiListBar key={"LiListBar" + i}>
        <Link className="link-list-bar" to={`/${pageNames[i]}`}>
          {pageNames[i]}
        </Link>
      </LiListBar>
    );
  }
}

export default NavigationBar;
