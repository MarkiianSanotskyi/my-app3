import React from "react";
import { ItemPriceBox } from "./style";

const ItemPrice = props => (
  <ItemPriceBox>
    {props.price} <strong>$</strong>
  </ItemPriceBox>
);

export default ItemPrice;
