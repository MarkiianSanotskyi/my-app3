import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  ul {
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 0px;
    font-size: 0px;
    display: grid;
    grid-column-gap: 20px;
    grid-columns: 5;
    grid-template-columns: auto auto auto auto auto auto;
    li {
      list-style: none;
      font-size: 20px;
    }
  }
`;

const FooterNavigationBar = () => (
  <Styles>
    <div>
      <ul className="NavigationList">{linksFooter}</ul>
    </div>
  </Styles>
);

let linksFooter = [];

for (let i = 0; i < 3; i++) {
  linksFooter.push(
    <li>
      <a href="/">Bla </a>
    </li>
  );
}

export default FooterNavigationBar;
