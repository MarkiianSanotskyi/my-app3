import React from 'react';
import { Image } from 'react-bootstrap';
import styled from 'styled-components';
import logoImage from '../../assets/logo.png';




const Styles = styled.div`
a, img{ max-width:100px;


}


`;

export const Logo = () => (

    <Styles>

    	<a href="/" className="logo">
    	 <Image src={ logoImage } alt="logo" />
    	 </a>
    	

    </Styles>

)