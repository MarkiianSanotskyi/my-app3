import React from "react";
import { Box } from "./style";
import ItemRating from "./ItemRating/ItemRating";
import ItemPrice from "./ItemPrice/ItemPrice";

const ItemBottomInfo = () => (
  <Box>
    <div className="bottomInfoBox">
      <div className="left" />
      <ItemRating />
    </div>
    <div className="right">
      <ItemPrice /> $
    </div>
  </Box>
);

export default ItemBottomInfo;
