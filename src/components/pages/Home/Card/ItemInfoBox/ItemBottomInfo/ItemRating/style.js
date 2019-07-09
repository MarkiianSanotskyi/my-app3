import styled from "styled-components";

export const ItemUlRating = styled.ul`
  margin: 0px;
  padding: 5px 0px 0px 0px;
  font-size: 0px;
  float: left;
  div {
    height: 100%;
    font-size: 10px;
    color: black;
    display: inline-block;
    vertical-align: top;
    margin-right: 5px;
    cursor: pointer;
  }
`;

export const ItemLiRating = styled.li`
  display: inline-block;
  vertical-align: top;
  list-style: none;
  width: 15px;
  height: 15px;
  cursor: pointer;
  margin-right: 5px;
  svg {
    width: 100%;
    height: 100%;
  }
`;

export const StyledIcon = styled.svg`
  fill: red;
`;
