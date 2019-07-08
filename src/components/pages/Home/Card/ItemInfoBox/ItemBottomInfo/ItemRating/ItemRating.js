import React from "react";
import { ItemUlRating, ItemLiRating } from "./style";
import RatingIcon from "../../../../../../shared/icons/RatingIcon/RatingIcon";

export default class ItemRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedStar: 0
    };
  }

  handleStarClick = clickedStar => this.setState({ clickedStar: clickedStar });

  render() {
    const ItemRating = () => <ItemUlRating>{raitingList}</ItemUlRating>;

    let raitingList = [];

    let activeStar;

    for (let i = 1; i < 6; i++) {
      if (i > this.state.clickedStar) {
        activeStar = "#000";
      } else {
        activeStar = "orange";
      }

      raitingList.push(
        <ItemLiRating
          key={"ItemRaiting" + (i + 1)}
          onClick={() => this.handleStarClick(i)}
          data={i}
        >
          <RatingIcon fill={activeStar} />
        </ItemLiRating>
      );
    }

    return <ItemRating />;
  }
}
