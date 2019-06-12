import React from "react";
import { ImageBox } from "./style";
import LogoImageItem from "../../../../../../../assets/LogoItem.jpg";

const ItemLogoBox = () => (
  <ImageBox>
    <img src={LogoImageItem} alt="LogoImageItem" />
  </ImageBox>
);

export default ItemLogoBox;
