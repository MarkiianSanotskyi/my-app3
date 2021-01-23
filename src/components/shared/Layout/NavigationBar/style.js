import styled from "styled-components";
import IconSearch from "../../icons/SearchIcon/SearchIcon";

export const UlListBar = styled.ul`
  margin: 0px 0px 0px 0px;
  padding: 40px 0px 0px 0px;
  font-size: 0px;
  display: grid;
  grid-column-gap: 20px;
  grid-column: 5;
  grid-template-columns: auto auto auto auto auto auto;
`;

export const LiListBar = styled.li`
  list-style: none;
  font-size: 20px;
`;

export const LinkListBar = styled.a`
  text-decoration: none;
  color: black;
  transition: 0.3s;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

  &:hover,
  &:active {
    color: #f4511e !important;
    text-decoration: underline;
  }
`;
export const IconSearchBox = styled(IconSearch)`
  width: 20px;
  background: none;
  outline: none;
`;
