import React from "react";
import { ItemBox } from "./style";
import ItemImageBox from "./ItemImageBox/ItemImageBox";
import ItemInfoBox from "./ItemInfoBox/ItemInfoBox";

const Card = () => (
  <ItemBox>
    <ItemImageBox />
    <ItemInfoBox />
  </ItemBox>
);

export default Card;
