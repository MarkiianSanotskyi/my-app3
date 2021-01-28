import React from "react";
import ItemBottomInfo from "./ItemBottomInfo/ItemBottomInfo";
import ItemTopInfo from "./ItemTopInfo/ItemTopInfo";

const ItemInfoBox = props => {
  return (
    <div>
      <ItemTopInfo
        description={props.description}
        productName={props.productName}
        likeState={props.likeState}
        rating={props.rating}
        className="topInfoBox"
      />
      <ItemBottomInfo />
    </div>
  );
};

export default ItemInfoBox;
