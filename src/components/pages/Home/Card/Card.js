import React, { Component } from "react";
import "./style.css";
//import api from "../../../../api";

import ItemImageBox from "./ItemImageBox/ItemImageBox";
import ItemInfoBox from "./ItemInfoBox/ItemInfoBox";

const api = [
  {
    id: "1",
    productName: "Handmade Metal Keyboard",
    description: "Fresh",
    like: false,
    rating: [],
    price: "126.00"
  },
  {
    id: "2",
    productName: "Licensed Rubber Bike",
    description: "Concrete",
    like: false,
    rating: [],
    price: "548.00"
  },
  {
    id: "3",
    productName: "Fantastic Plastic Tuna",
    description: "Cotton",
    like: false,
    rating: [],
    price: "291.00"
  },
  {
    id: "4",
    productName: "Generic Wooden Shoes",
    description: "Rubber",
    like: false,
    rating: [],
    price: "985.00"
  },
  {
    id: "5",
    productName: "Small Plastic Chips",
    description: "Frozen",
    like: false,
    rating: [],
    price: "592.00"
  },
  {
    id: "6",
    productName: "Fantastic Soft Towels",
    description: "Metal",
    like: false,
    rating: [],
    price: "712.00"
  },
  {
    id: "7",
    productName: "Sleek Concrete Chicken",
    description: "Wooden",
    like: false,
    rating: [],
    price: "601.00"
  },
  {
    id: "8",
    productName: "Handcrafted Granite Pants",
    description: "Fresh",
    like: false,
    rating: [],
    price: "590.00"
  },
  {
    id: "9",
    productName: "Tasty Concrete Shirt",
    description: "Concrete",
    like: false,
    rating: [],
    price: "316.00"
  }
];

class Card extends Component {
  render() {
    return (
      <div>
        <ItemImageBox />
        <ItemInfoBox good={api} />
      </div>
    );
  }
}

export default Card;
