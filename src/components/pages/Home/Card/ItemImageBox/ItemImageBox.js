/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { ImageBox, GlobalImageBox } from "./style";
import ItemImage from "../../../../../assets/item2.jpg";

const ItemImageBox = () => (
  <GlobalImageBox>
    <a>
      <ImageBox>
        <img src={ItemImage} alt="ItemImage" />
      </ImageBox>
    </a>
  </GlobalImageBox>
);

export default ItemImageBox;
