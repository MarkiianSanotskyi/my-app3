import styled from "styled-components";

export const UlListBar = styled.ul`
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  font-size: 0px;
  display: grid;
  grid-column-gap: 20px;
  grid-template-columns: auto auto auto auto auto auto;
`;

export const LiListBar = styled.li`
  list-style: none;
  font-size: 20px;
  max-width: 40px;
  img {
    max-width: 100%;
  }
  :first-child {
    max-width: 100px;
    color: white;
    font-size: 10px;
  }
`;
