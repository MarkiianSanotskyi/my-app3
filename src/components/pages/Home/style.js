import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-column-gap: 20px;
  grid-template-columns: auto auto auto auto;
  ul {
    margin-top: 50px;
    display: grid;
    width: 100%;

    grid-column-gap: 20px;
    grid-template-columns: auto auto auto auto;
    li {
      margin-bottom: 25px;
      margin-top: 25px;
      list-style: none;
    }
  }
`;
