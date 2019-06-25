import React from "react";
import { Box, BoxImg } from "./style";
import HeartIcon from "../../../../../../shared/icons/HeartIcon/HeartIcon";

export default class ItemFollowBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { addClass: false };
  }

  toggleClass() {
    this.setState({ addClass: !this.state.addClass });
  }

  render() {
    let colorHeart = "#000";

    if (this.state.addClass) {
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
