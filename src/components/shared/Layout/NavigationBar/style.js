import styled from "styled-components";
import IconSearch from "../../icons/SearchIcon/SearchIcon";

export const UlListBar = styled.ul`
  margin: 0px 0px 0px 0px;
  padding: 40px 0px 0px 0px;
  font-size: 0px;
  display: grid;
  grid-column-gap: 20px;
  grid-columns: 5;
  grid-template-columns: auto auto auto auto auto auto;
`;

export const LiListBar = styled.li`
  list-style: none;
  font-size: 20px;
`;
export const LinkListBar = styled.a``;
export const IconSearchBox = styled(IconSearch)`
  width: 20px;
  background: none;
`;
