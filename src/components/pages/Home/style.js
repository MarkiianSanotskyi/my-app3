import styled from "styled-components";

export const Container = styled.div`
  width: 960px;
  margin: 0px auto;
  display: grid;
  grid-column-gap: 20px;
  grid-template-columns: auto auto auto auto;
`;

export const StyledUl = styled.ul`
  margin-top: 50px;
  display: grid;
  width: 100%;

  grid-column-gap: 20px;
  grid-template-columns: auto auto auto auto;
`;
export const StyledLi = styled.li`
  margin-bottom: 25px;
  margin-top: 25px;
  list-style: none;
  background-color: #fff;
  height: 330px;
`;
