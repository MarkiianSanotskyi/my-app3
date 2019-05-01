import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  .footer {
    background-color: #222;
    height: 50px;
    line-height: 50px;
    margin-top: 80px;
    p {
      color: white;
      text-align: center;
    }
  }
`;

const FooterBar = () => (
  <Styles>
    <div className="footer">
      <p>Footer and copyright in it!</p>
    </div>
  </Styles>
);

export default FooterBar;
