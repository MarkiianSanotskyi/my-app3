import styled from "styled-components";

export const Box = styled.div`
  position: relative;
  .clearfix {
    padding: 15px 10px 0px 10px;
    border-top: 1px solid grey;
  }
  .right {
    width: 20px;
    height: 20px;
    position: absolute;
    right: 10px;
    top: 17px;
    border: none;
    background: none;
    padding: 0px;

    &: focus {
      background: none;
      outline: none;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }
`;
