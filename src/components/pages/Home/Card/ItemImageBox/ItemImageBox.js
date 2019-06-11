import React from "react";
import { ImageBox } from "./style";
import ItemImage from "../../../../../assets/item2.jpg";

const ItemImageBox = () => (
  <a href="#">
    <ImageBox>
      <img src={ItemImage} alt="ItemImage" />
    </ImageBox>
  </a>
);

export default ItemImageBox;
