import styled from "styled-components";

export const Footer = styled.footer`
  background-color: #222;
  height: 50px;
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

export const AddData = styled.button`
  background-color: #f4511e;
  outline: none;
  border: none;
  border-raidus: 5px;
  color: white;
  margin: 0px;
  padding: 0px;
  :focus {
    outline: none;
  }
  :hover {
    opacity: 0.8;
  }
`;
