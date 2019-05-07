import React from "react";
import { UlListBar, LiListBar, LinkListBar, IconSearchBox } from "./style";

const NavigationBar = () => (
  <UlListBar>
    <LiListBar>
      <LinkListBar href="/">
        <IconSearchBox />
      </LinkListBar>
    </LiListBar>
    <LiListBar>
      <LinkListBar href="/">
        <IconSearchBox />
      </LinkListBar>
    </LiListBar>
    <LiListBar>
      <LinkListBar href="/">
        <IconSearchBox />
      </LinkListBar>
    </LiListBar>
    <LiListBar>
      <LinkListBar href="/">
        <IconSearchBox />
      </LinkListBar>
    </LiListBar>
    <LiListBar>
      <LinkListBar href="/">
        <IconSearchBox />
      </LinkListBar>
    </LiListBar>
  </UlListBar>
);

export default NavigationBar;
