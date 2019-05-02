import React from "react";
import { Container } from "./style";
import Card from "./Card/Card";
import styled from "styled-components";

const Styles = styled.div`
  .container {
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
  }
`;

export const Home = () => (
  <div>
    <Styles>
      <Container className="container">
        <ul>
          <li>
            <Card />
          </li>
          <li>
            <Card />
          </li>
          <li>
            <Card />
          </li>
          <li>
            <Card />
          </li>
          <li>
            <Card />
          </li>
          <li>
            <Card />
          </li>
          <li>
            <Card />
          </li>
          <li>
            <Card />
          </li>
        </ul>
      </Container>
    </Styles>
  </div>
);
