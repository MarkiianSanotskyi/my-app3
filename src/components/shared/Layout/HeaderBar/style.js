import styled from "styled-components";

export const Header = styled.header `
  background: #fff;
  z-index: 70;
  position: relative;
  border-bottom: 1px solid rgba(36, 50, 56, 0.2);
`;

export const Container = styled.div `
 display: grid;
 grid-column-gap: 20px;
 grid-template-columns: auto auto auto auto;
`;