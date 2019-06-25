import React from "react";
import { ItemUlRating, ItemLiRating } from "./style";
import RatingIcon from "../../../../../../shared/icons/RatingIcon/RatingIcon";

export default class ItemRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = { choosedRating: false };
  }

  toggleClass() {
    this.setState({ choosedRating: !this.state.choosedRating });
  }

  render() {
    let colorRating = "#000";

    if (this.state.choosedRating) {
      colorRating = "red";
    }

    const ItemRating = () => <ItemUlRating>{raitingList}</ItemUlRating>;

    let raitingList = [];

    for (let i = 0; i < 5; i++) {
      raitingList.push(
        <ItemLiRating
          className="bla"
          key={"ItemRaiting" + (i + 1)}
          data-place={i}
          //onClick={this.toggleClass.bind(this)}
        >
          <RatingIcon fill={colorRating} />
        </ItemLiRating>
      );
    }

    return <ItemRating />;
  }
}
