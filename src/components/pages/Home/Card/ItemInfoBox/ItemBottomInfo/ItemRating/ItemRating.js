import React from "react";
import { ItemUlRating, ItemLiRating } from "./style";
import RatingIcon from "../../../../../../shared/icons/RatingIcon/RatingIcon";

const ItemRating = () => <ItemUlRating>{raitingList}</ItemUlRating>;

let raitingList = [];

for (let i = 0; i < 5; i++) {
  raitingList.push(
    <ItemLiRating key={"ItemRaiting" + i}>
      <RatingIcon />
    </ItemLiRating>
  );
}

export default ItemRating;
