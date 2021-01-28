import React, { useState } from "react";
import like from "../../../../../../../assets/heart.png";
import liked from "../../../../../../../assets/heartActive.png";

const follow = { like, liked };

const FollowBox = props => {
  const followData = props.likeState;
  let originalLike = follow.like;

  if (followData === true) {
    originalLike = follow.liked;
  }

  const [selected, setSelected] = useState(originalLike);

  const followTogler = () => {
    if (selected === follow.like) {
      setSelected(follow.liked);
    } else {
      setSelected(follow.like);
    }
  };

  return (
    <button onClick={followTogler} className="right">
      <img src={selected} alt="like" />
    </button>
  );
};

export default FollowBox;
