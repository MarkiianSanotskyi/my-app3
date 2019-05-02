import React from "react";
import { Container, StyledUl, StyledLi } from "./style";
import Card from "./Card/Card";

export const Home = () => (
  <div>
    <Container>
      <StyledUl>
        <StyledLi>
          <Card />
        </StyledLi>
        <StyledLi>
          <Card />
        </StyledLi>
        <StyledLi>
          <Card />
        </StyledLi>
        <StyledLi>
          <Card />
        </StyledLi>
        <StyledLi>
          <Card />
        </StyledLi>
        <StyledLi>
          <Card />
        </StyledLi>
        <StyledLi>
          <Card />
        </StyledLi>
      </StyledUl>
    </Container>
  </div>
);
