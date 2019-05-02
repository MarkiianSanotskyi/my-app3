import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  p {
    color: white;
    font-size: 10px;
  }
`;

const CopyrightBar = () => (
  <Styles>
    <p>
      © 2019 Info Global Services Ltd. All Rights Reserved Privacy Policy Refund
      Policy Terms Secure Payment:
    </p>
  </Styles>
);

export default CopyrightBar;
