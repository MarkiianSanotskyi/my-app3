import React from "react";
import { ItemUlRating, ItemLiRating } from "./style";
import ItemRatingImg from "../../../../../../../assets/star.png";

const ItemRating = () => (
  <ItemUlRating>
    <ItemLiRating>
      <img src={ItemRatingImg} alt="ItemRatingImg" />
    </ItemLiRating>
    <ItemLiRating>
      <img src={ItemRatingImg} alt="ItemRatingImg" />
    </ItemLiRating>
    <ItemLiRating>
      <img src={ItemRatingImg} alt="ItemRatingImg" />
    </ItemLiRating>
    <ItemLiRating>
      <img src={ItemRatingImg} alt="ItemRatingImg" />
    </ItemLiRating>
    <ItemLiRating>
      <img src={ItemRatingImg} alt="ItemRatingImg" />
    </ItemLiRating>
  </ItemUlRating>
);

export default ItemRating;
