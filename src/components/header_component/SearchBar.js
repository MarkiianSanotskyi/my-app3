import React, {Component} from 'react';
import { render } from 'react-dom';
import { Image } from 'react-bootstrap';
import styled from 'styled-components';
import SearchInput, {createFilter} from 'react-search-input';
import emails  from './mail';
import IconSearch from './SearchIcon';




const Styles = styled.div`
 .mail{
 	display:none;
 }
.searchBox {
	padding-top: 35px;
}
.searchBox{posiotion:relative;
	.svg-box{position:absolute;top:41px;left:25px;}
svg{ fill:#cfd8dc;  background: red;-webkit-background-clip: text;}
}
.searchBox input{

	    height: 40px;
    padding: 0 45px 0 20px;
    font-size: 14px;
    outline:none;
    box-shadow:none;
        border: 1px solid transparent;
            background: #eceff1;
    -webkit-box-shadow: inset 0 1px 0 0 #cfd8dc;
    -moz-box-shadow: inset 0 1px 0 0 #cfd8dc;
    box-shadow: inset 0 1px 0 0 #cfd8dc;
    transition: background .25s ease,box-shadow-color .25s ease,border-color .75s ease;
    border-radius:3px;
    padding-left:50px;
    width:100%;

  
    :focus {
    	background-color:#fff;
    	border: 1px solid #2196f3;
    	box-shadow:none;
    }

}

.searchBoxForSvg:focus,
.searchBoxForSvg:active {
	
		 svg{ fill: #2196f3;}
	
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

const KEYS_TO_FILTERS = ['user.name', 'subject', 'dest.name', 'id'];
 


class SearchBar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
    this.searchUpdated = this.searchUpdated.bind(this)
  }
 
  render () {
    const filteredEmails = emails.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
 
function addedClassSvgActive() {
  var element = document.getElementById("searchBoxForSvg2");

  if (element.classList) { 
    element.classList.toggle("active");
  } else {
    var classes = element.className.split(" ");
    var i = classes.indexOf("active");

    if (i >= 0) 
      classes.splice(i, 1);
    else 
      classes.push("active");
      element.className = classes.join(" "); 
  }
}


    return (
      <div>
      <Styles>
      		<div className="searchBox">
				<div id="searchBoxForSvg2" className="searchBoxForSvg">
        			<SearchInput className="search-input" onChange={this.searchUpdated} onClick={ addedClassSvgActive } placeholder="Search Within Results" />
        			<ReactSearchSvg />
				</div>
        	</div>
        {filteredEmails.map(email => {
          return (

            <div className="mail" key={email.id}>
              <div className="from">{email.user.name}</div>
              <div className="subject">{email.subject}</div>
            </div>

          )
        })}
         </Styles>
      </div>

    )
  }
 
  searchUpdated (term) {
    this.setState({searchTerm: term})
  }
}



export default SearchBar;