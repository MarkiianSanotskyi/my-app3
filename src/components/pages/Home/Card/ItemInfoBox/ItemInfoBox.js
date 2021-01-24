import React, { Component } from "react";
// import ItemTopInfo from "./ItemTopInfo/ItemTopInfo";
// import ItemBottomInfo from "./ItemBottomInfo/ItemBottomInfo";

class ItemInfoBox extends Component {
  render() {
    let avatarUrl = "https://i.pravatar.cc/300";
    let like = "../../../../../assets/heart.png";
    console.log("items", this.props.good.productName);
    return (
      <div>
        <div className="topInfoBox">
          <div className="left">
            <div className="avatar">
              <a href="/">
                <img src={avatarUrl} alt="avatarUrl" />
              </a>
            </div>
            <div className="info">
              <h1>
                <a href="/">{this.props.good.id}</a>
              </h1>
              <p>{this.props.description}</p>
            </div>
          </div>
          <div className="right">
            <img src={like} alt="like" />
          </div>
        </div>
        <div className="bottomInfoBox">
          <div className="left">{this.props.rating}</div>
          <div className="right">{this.props.price} $</div>
        </div>
      </div>
    );
  }
}

export default ItemInfoBox;
