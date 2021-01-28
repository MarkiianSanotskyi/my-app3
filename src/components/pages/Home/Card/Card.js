import React from "react";
import "./style.css";
//import api from "../../../../api";

import ItemImageBox from "./ItemImageBox/ItemImageBox";
import ItemInfoBox from "./ItemInfoBox/ItemInfoBox";

const Card = props => {
  console.log(props.rating);
  return (
    <div>
      <ItemImageBox />
      <ItemInfoBox
        itemId={props.itemId}
        productName={props.productName}
        description={props.description}
        likeState={props.likeState}
        rating={props.rating}
      />
    </div>
  );
};

export default Card;
