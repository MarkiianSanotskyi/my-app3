import React from "react";
import styled from "styled-components";
import IconSearch from "../../icons/SearchIcon/SearchIcon";
import searchImage from "../../../../assets/search.png";

const Styles = styled.div`
  .mail {
    display: none;
  }
  .searchBox {
    padding-top: 35px;
  }
  .searchBox {
    posiotion: relative;
    .svg-box {
      position: absolute;
      top: 7px;
      left: 10px;
    }
    svg {
      fill: #cfd8dc;
      background: red;
      -webkit-background-clip: text;
    }
  }
  .searchBox input {
    height: 40px;
    padding: 0 45px 0 20px;
    font-size: 14px;
    outline: none;
    box-shadow: none;
    border: 1px solid transparent;
    background: #eceff1;

    transition: background 0.25s ease, box-shadow-color 0.25s ease,
      border-color 0.75s ease;
    border-radius: 3px;
    padding-left: 50px;
    width: 100%;
    outline: none;

    :focus {
      background-color: #fff;
      border: 1px solid #2196f3;
      box-shadow: none;
    }
  }

  .searchBoxForSvg:focus,
  .searchBoxForSvg:active {
    svg {
      fill: #2196f3;
    }
  }

  .searchInput {
    position: absolute;
    right: 0px;
    top: 0px;
    width: 40px !important;
    height: 40px !important;
    border-radius: 3px;
    padding: 0px !important;
    outline: none;
    cursor: pointer;
    z-index: 3;
    background: url(${searchImage}) no-repeat 50% 50% !important;
    background-size: 50% !important;
    background-color: #f4511e !important;
  }

  form {
    position: relative;
  }
`;

const styles = {
  fontFamily: "sans-serif"
};

const ReactSearchSvg = () => (
  <div style={styles} className="svg-box">
    <IconSearch
      fill="#fff"
      width={30}
      className="SeachIcon"
      style={{ background: "rgba (0 0 0 0)", padding: "6px" }}
    />
  </div>
);

const SearchBar = () => (
  <div>
    <Styles>
      <div className="searchBox">
        <form>
          <div id="searchBoxForSvg2" className="searchBoxForSvg">
            <ReactSearchSvg />
            <input type="search" />
          </div>{" "}
          <input className="searchInput" type="submit" value="" />
        </form>{" "}
      </div>{" "}
    </Styles>{" "}
  </div>
);

export default SearchBar;
