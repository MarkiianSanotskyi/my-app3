import React, { Component } from "react";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import axios from "axios";
import ImageResults from "../ImageResults/ImageResults";
import TextField from "@material-ui/core/TextField";

class GallerySearch extends Component {
  state = {
    searchText: "",
    amount: 15,
    apiUrl: "https://pixabay.com/api",
    apiKey: "18956034-d8a7f16db0ad304d7a03d4e5f",
    images: []
  };

  onTextChange = e => {
    const val = e.target.value;
    this.setState({ [e.target.name]: val }, () => {
      if (val === "") {
        this.setState({ images: [] });
      } else {
        axios
          .get(
            `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${
              this.state.searchText
            }&image_type=photo&per_page=${this.state.amount}&safesearch=true`
          )
          .then(res => this.setState({ images: res.data.hits }))
          .catch(err => console.log(err));
      }
    });
  };

  onAmountChange = (e, index, value) => this.setState({ amount: value });
  render() {
    console.log(this.state.images);
    return (
      <div>
        <div className="pixabay-box">
          <TextField
            className="form-input"
            variant="outlined"
            type="text"
            label="Search For Images"
            name="searchText"
            value={this.state.searchText}
            onChange={this.onTextChange}
            fullWidth={true}
          />
          <br />
          <SelectField
            name="amount"
            floatingLabelText="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          >
            <MenuItem value={5} primaryText="5" />
            <MenuItem value={10} primaryText="10" />
            <MenuItem value={15} primaryText="15" />
            <MenuItem value={30} primaryText="30" />
            <MenuItem value={50} primaryText="50" />
          </SelectField>
        </div>
        <br />
        {this.state.images.length > 0 ? (
          <ImageResults images={this.state.images} />
        ) : null}
      </div>
    );
  }
}

export default GallerySearch;
