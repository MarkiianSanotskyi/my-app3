import React from "react";
import { Container, StyledUl, StyledLi } from "./style";
import Card from "./Card/Card";

export const Home = props => {
  const items = [
    {
      id: 1,
      productName: "Handmade Metal Keyboard",
      description: "Fresh",
      like: false,
      rating: {
        rated: true,
        number: 3
      },
      price: "126.00"
    },
    {
      id: 2,
      productName: "Licensed Rubber Bike",
      description: "Concrete",
      like: true,
      rating: {
        rated: true,
        number: 5
      },
      price: "548.00"
    },
    {
      id: 3,
      productName: "Fantastic Plastic Tuna",
      description: "Cotton",
      like: true,
      rating: {
        rated: false,
        number: 0
      },
      price: "291.00"
    },
    {
      id: 4,
      productName: "Generic Wooden Shoes",
      description: "Rubber",
      like: false,
      rating: {
        rated: false,
        number: 0
      },
      price: "985.00"
    },
    {
      id: 5,
      productName: "Small Plastic Chips",
      description: "Frozen",
      like: false,
      rating: {
        rated: false,
        number: 0
      },
      price: "592.00"
    },
    {
      id: 6,
      productName: "Fantastic Soft Towels",
      description: "Metal",
      like: true,
      rating: {
        rated: false,
        number: 0
      },
      price: "712.00"
    },
    {
      id: 7,
      productName: "Sleek Concrete Chicken",
      description: "Wooden",
      like: false,
      rating: {
        rated: true,
        number: 2
      },
      price: "601.00"
    },
    {
      id: 8,
      productName: "Handcrafted Granite Pants",
      description: "Fresh",
      like: false,
      rating: {
        rated: false,
        number: 0
      },
      price: "590.00"
    },
    {
      id: 9,
      productName: "Tasty Concrete Shirt",
      description: "Concrete",
      like: false,
      rating: {
        rated: false,
        number: 0
      },
      price: "316.00"
    }
  ];
  return (
    <Container>
      <StyledUl>
        {items.map(item => (
          <StyledLi key={item.id}>
            <Card
              itemId={item.id}
              productName={item.productName}
              description={item.description}
              likeState={item.like}
              rating={item.rating}
            />
          </StyledLi>
        ))}
      </StyledUl>
    </Container>
  );
};
