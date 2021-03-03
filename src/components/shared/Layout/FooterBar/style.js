import styled from "styled-components";

export const Footer = styled.footer`
  background-color: #222;
  height: 100%;
  line-height: 50px;
  margin-top: 80px;
`;

export const Container = styled.div`
  width: 960px;
  margin: 0px auto;
  padding: 0px 15px;
  display: grid;
  grid-column-gap: 20px;
  grid-template-columns: auto auto auto auto;
`;
export const Test = styled.div`
  display: inline;
  li {
    font-size: 12px;

    a {
      color: white;
    }
  }
`;
