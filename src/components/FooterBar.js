import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';


const Styles = styled.div`
  .footer{
  	background-color: #222;height:50px;line-height:50px;margin-top:80px;

  	p{color:white;text-align:center;}
  }


`;

export const FooterBar= () => (

    <Styles>

    	<div className="footer">
    		<p>Footer and copyright in it!</p>
    	</div>

    </Styles>

)