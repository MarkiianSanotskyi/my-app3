import styled from "styled-components";
import IconSearch from "../../icons/SearchIcon/SearchIcon";
import searchImage from "../../../../assets/search.png";

export const SearchBox = styled.div`
  padding-top: 35px;
  position: relative;
`;

export const FormBox = styled.form`
  position: relative;
`;

export const SearchBoxForSvg = styled.form`
  :focus,
  :active {
    svg {
      fill: #2196f3;
    }
  }
`;

export const SvgBox = styled.div`
  position: absolute;
  top: 7px;
  left: 10px;
`;

export const IconSearchBox = styled(IconSearch)`
  fill: #cfd8dc;
  background: none;
  -webkit-background-clip: text;
  width: 20px;
`;

export const InputSearch = styled.input`
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
`;

export const SearchInputSubmit = styled.input`
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
  border: none;
`;
