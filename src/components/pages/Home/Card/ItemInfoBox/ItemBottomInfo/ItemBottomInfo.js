import React from "react";
import { Box } from "./style";
import ItemRating from "./ItemRating/ItemRating";
import ItemPrice from "./ItemPrice/ItemPrice";

const ItemBottomInfo = () => (
  <Box>
    <ItemRating />
    <ItemPrice />
  </Box>
);

export default ItemBottomInfo;
