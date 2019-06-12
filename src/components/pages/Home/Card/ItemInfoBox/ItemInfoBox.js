import React from "react";
import { Box } from "./style";
import ItemTopInfo from "./ItemTopInfo/ItemTopInfo";
import ItemBottomInfo from "./ItemBottomInfo/ItemBottomInfo";

const ItemInfoBox = () => (
  <Box>
    <ItemTopInfo />
    <ItemBottomInfo />
  </Box>
);

export default ItemInfoBox;
