import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import GalleryNavBar from "./GalleryNavBar/GalleryNavBar";
import GallerySearch from "./GallerySearch/GallerySearch";

export class Gallery extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <GalleryNavBar />
          <GallerySearch />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Gallery;
