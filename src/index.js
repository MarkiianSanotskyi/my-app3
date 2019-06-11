import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import styled from "styled-components";

styled.body`
  div#root {
    background-color: red;
  }
`;
ReactDOM.render(<App />, document.getElementById("root"));
