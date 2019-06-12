import React from "react";
import { Box } from "./style";
import ItemLogoBox from "./ItemLogoBox/ItemLogoBox";
import ItemTextBox from "./ItemTextBox/ItemTextBox";
import ItemFollowBox from "./ItemFollowBox/ItemFollowBox";

const ItemTopInfo = () => (
  <Box>
    <ItemLogoBox />
    <ItemTextBox />
    <ItemFollowBox />
  </Box>
);

export default ItemTopInfo;
