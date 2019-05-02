import React from "react";
import styled from "styled-components";
import Logo from "../Logo/Logo";
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
      max-width: 40px;
      img {
        max-width: 100%;
      }
    }
    li:first-child {
      max-width: 100px;
      color: white;
      font-size: 10px;
    }
  }
`;

const FooterPayment = () => (
  <Styles>
    <div>
      <ul className="NavigationList">
        <li>Secure Payment:</li>
        <li>
          <Logo />
        </li>
        <li>
          <Logo />
        </li>
        <li>
          <Logo />
        </li>
        <li>
          <Logo />
        </li>
        <li>
          <Logo />
        </li>
      </ul>
    </div>
  </Styles>
);

export default FooterPayment;
