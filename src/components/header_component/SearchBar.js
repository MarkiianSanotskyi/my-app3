import React, { Component } from 'react';
import { } from 'react-bootstrap';
import styled from 'styled-components';





const Styles = styled.div`



`;


class SearchBar extends Component {
	state = {
		query: '',
		data: [],
		searchString: []
	}

handleInputChange = (event) => {
    this.setState({
        query: event.target.value
    },()=>{
  this.filterArray();
})

}




}


export default SearchBar;