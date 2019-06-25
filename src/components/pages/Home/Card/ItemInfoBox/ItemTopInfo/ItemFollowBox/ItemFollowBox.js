import React from "react";
import { Box, BoxImg } from "./style";
import HeartIcon from "../../../../../../shared/icons/HeartIcon/HeartIcon";

export default class ItemFollowBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { followedHeart: false };
  }

  toggleClass() {
    this.setState({ followedHeart: !this.state.followedHeart });
  }

  render() {
    let colorHeart = "#000";

    if (this.state.followedHeart) {
      colorHeart = "red";
    }

    return (
      <Box>
        <BoxImg onClick={this.toggleClass.bind(this)}>
          <HeartIcon fill={colorHeart} />
        </BoxImg>
      </Box>
    );
  }
}
