import React from "react";
import "./style.css";
//import api from "../../../../api";

import ItemImageBox from "./ItemImageBox/ItemImageBox";
import ItemInfoBox from "./ItemInfoBox/ItemInfoBox";

const Card = props => {
  console.log(props.rating);
  return (
    <div className="item-list-container">
      <ItemImageBox />
      <ItemInfoBox
        itemId={props.itemId}
        productName={props.productName}
        description={props.description}
        likeState={props.likeState}
        rating={props.rating}
        price={props.price}
      />
    </div>
  );
};

export default Card;
