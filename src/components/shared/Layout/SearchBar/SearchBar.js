import React from "react";
import {
  SearchBox,
  FormBox,
  SearchBoxForSvg,
  SvgBox,
  IconSearchBox,
  InputSearch,
  SearchInputSubmit
} from "./style";

const ReactSearchSvg = () => (
  <SvgBox>
    <IconSearchBox />
  </SvgBox>
);

const SearchBar = () => (
  <SearchBox>
    <FormBox>
      <SearchBoxForSvg>
        <ReactSearchSvg />
        <InputSearch type="search" />
      </SearchBoxForSvg>
      <SearchInputSubmit type="submit" value="" />
    </FormBox>
  </SearchBox>
);

export default SearchBar;
