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

    let className;

    for (let i = 1; i < 6; i++) {
      if (i > this.state.clickedStar) {
        className = "ratingList";
      } else {
        className = "ratingList active";
      }

      raitingList.push(
        <ItemLiRating
          key={"ItemRaiting" + (i + 1)}
          onClick={() => this.handleStarClick(i)}
          data={i}
          className={className}
        >
          <RatingIcon />
        </ItemLiRating>
      );
    }

    return <ItemRating />;
  }
}
