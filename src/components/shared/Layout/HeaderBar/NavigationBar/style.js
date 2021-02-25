import styled from "styled-components";
import IconSearch from "../../../icons/SearchIcon/SearchIcon";

export const UlListBar = styled.ul`
  margin: 0px 0px 0px 0px;
  font-size: 0px;
  display: grid;
  grid-column-gap: 20px;
  grid-template-columns: auto auto auto auto auto auto;
`;

export const LiListBar = styled.li`
  list-style: none;
  font-size: 14px;
  display: flex;
  align-items: center;
`;

export const IconSearchBox = styled(IconSearch)`
  width: 20px;
  background: none;
  outline: none;
`;
