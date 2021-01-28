import React from "react";
import { Box } from "./style";

import FollowBox from "./FollowBox/FollowBox";

const ItemTopInfo = props => {
  let avatarUrl = "https://i.pravatar.cc/300";

  return (
    <Box>
      <div className="clearfix">
        <div className="left">
          <div className="avatar">
            <a href="/">
              <img src={avatarUrl} alt="avatarUrl" />
            </a>
          </div>
          <div className="info">
            <h1>
              <a href="/">{props.productName}</a>
            </h1>
            <p>{props.description}</p>
          </div>
        </div>
        <FollowBox likeState={props.likeState} />
      </div>
    </Box>
  );
};

export default ItemTopInfo;
