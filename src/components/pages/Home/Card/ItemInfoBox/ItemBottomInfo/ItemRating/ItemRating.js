import React from "react";
import { ItemUlRating, ItemLiRating } from "./style";
import ItemRatingImg from "../../../../../../../assets/star.png";
import ItemRatingImgActive from "../../../../../../../assets/star-active.png";

const ItemRating = props => {
  let raitingList = [];

  if (props.rating.rated === true) {
    for (let i = 0; i < props.rating.number; i++) {
      raitingList.push(
        <ItemLiRating key={props.itemId + i}>
          <img src={ItemRatingImgActive} alt="ItemRatingImg" />
        </ItemLiRating>
      );
    }
    for (let j = props.rating.number; j < 5; j++) {
      raitingList.push(
        <ItemLiRating key={props.itemId + j}>
          <img src={ItemRatingImg} alt="ItemRatingImg" />
        </ItemLiRating>
      );
    }
  } else {
    for (let j = props.rating.number; j < 5; j++) {
      raitingList.push(
        <ItemLiRating key={props.itemId + j}>
          <img src={ItemRatingImg} alt="ItemRatingImg" />
        </ItemLiRating>
      );
    }
  }

  return <ItemUlRating>{raitingList}</ItemUlRating>;
};

export default ItemRating;
