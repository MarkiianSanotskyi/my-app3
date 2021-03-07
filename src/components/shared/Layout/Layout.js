import React from "react";
import HeaderBar from "./HeaderBar/HeaderBar";
import FooterBar from "./FooterBar/FooterBar";

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { class: "footer-login" };

    this.press = this.press.bind(this);
  }
  press() {
    let className =
      this.state.class === "footer-login" ? "footer-no-login" : "footer-login";
    this.setState({ class: className });
  }

  render() {
    return (
      <React.Fragment>
        <HeaderBar />
        {this.props.children}
        <div className={this.state.class}>
          <FooterBar press={this.press} />
        </div>
      </React.Fragment>
    );
  }
}

export default Layout;
