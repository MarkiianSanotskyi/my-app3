import React from "react";
import { ItemUlRating, ItemLiRating } from "./style";
import ItemRatingImg from "../../../../../../../assets/star.png";

const ItemRating = () => <ItemUlRating>{raitingList}</ItemUlRating>;

let raitingList = [];

for (let i = 0; i < 5; i++) {
  raitingList.push(
    <ItemLiRating>
      <img src={ItemRatingImg} alt="ItemRatingImg" />
    </ItemLiRating>
  );
}

export default ItemRating;
