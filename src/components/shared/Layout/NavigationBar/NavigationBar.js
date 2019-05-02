import React from "react";
import styled from "styled-components";
import IconSearch from "../../icons/SearchIcon/SearchIcon";

const Styles = styled.div`
  ul {
    margin: 0px 0px 0px 0px;
    padding: 40px 0px 0px 0px;
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

const NavigationBar = () => (
  <Styles>
    <div>
      <ul className="NavigationList">
        <li>
          <a href="/">
            <IconSearch
              fill="#fff"
              width={30}
              className="SeachIcon"
              style={{ background: "rgba (0 0 0 0)", padding: "6px" }}
            />
          </a>
        </li>
        <li>
          <a href="/">
            <IconSearch
              fill="#fff"
              width={30}
              className="SeachIcon"
              style={{ background: "rgba (0 0 0 0)", padding: "6px" }}
            />
          </a>
        </li>
        <li>
          <a href="/">
            <IconSearch
              fill="#fff"
              width={30}
              className="SeachIcon"
              style={{ background: "rgba (0 0 0 0)", padding: "6px" }}
            />
          </a>
        </li>
        <li>
          <a href="/">
            <IconSearch
              fill="#fff"
              width={30}
              className="SeachIcon"
              style={{ background: "rgba (0 0 0 0)", padding: "6px" }}
            />
          </a>
        </li>
        <li>
          <a href="/">
            <IconSearch
              fill="#fff"
              width={30}
              className="SeachIcon"
              style={{ background: "rgba (0 0 0 0)", padding: "6px" }}
            />
          </a>
        </li>
      </ul>
    </div>
  </Styles>
);

export default NavigationBar;
