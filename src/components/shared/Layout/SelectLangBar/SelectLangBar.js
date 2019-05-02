import React from "react";
import styled from "styled-components";


const Styles = styled.div`
  a,
  img {
    max-width: 100px;
  }
  select{
      margin-top:45px
  }
`;

const SearchLogoBar = () => (
  <Styles>
    <select>
      <option>EN</option>
      <option>RU</option>
      <option>UA</option>
    </select>
  </Styles>
);

export default SearchLogoBar;
