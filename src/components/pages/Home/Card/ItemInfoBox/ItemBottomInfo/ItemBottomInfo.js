import React from "react";
import { Box } from "./style";
import ItemRating from "./ItemRating/ItemRating";
import ItemPrice from "./ItemPrice/ItemPrice";

const ItemBottomInfo = props => (
  <Box className="item-info-box">
    <div className="bottomInfoBox">
      <div className="left">
        <ItemRating rating={props.rating} itemId={props.itemId} />
      </div>
      <div className="right">
        <ItemPrice price={props.price} />
      </div>
    </div>
  </Box>
);

export default ItemBottomInfo;
