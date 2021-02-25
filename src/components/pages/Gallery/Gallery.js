import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import GalleryNavBar from "./GalleryNavBar/GalleryNavBar";
import GallerySearch from "./GallerySearch/GallerySearch";
import "./style.css";

export class Gallery extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <GalleryNavBar />
          <div>
            <GallerySearch />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Gallery;
