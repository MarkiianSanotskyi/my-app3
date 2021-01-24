/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../style.css";

let imageUrl = "https://picsum.photos/350/256";

function ItemImageBox() {
  return (
    <div className="imageBox">
      <a href="/">
        <img src={imageUrl} alt="good.name" />
      </a>
    </div>
  );
}

export default ItemImageBox;
