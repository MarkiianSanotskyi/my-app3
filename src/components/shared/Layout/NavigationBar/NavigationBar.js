import React from "react";
import { UlListBar, LiListBar, LinkListBar, IconSearchBox } from "./style";

const NavigationBar = () => <UlListBar>{iconSearchList}</UlListBar>;

let iconSearchList = [];

for (let i = 0; i < 5; i++) {
  iconSearchList.push(
    <LiListBar key={"LiListBar" + i}>
      <LinkListBar href="/">
        <IconSearchBox fillRule="fff" />
      </LinkListBar>
    </LiListBar>
  );
}

export default NavigationBar;
