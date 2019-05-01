import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { Logo } from './header_component/Logo';
import  SearchBar  from './header_component/SearchBar';



const Styles = styled.div`
#header{
    background: #FFF;
    z-index: 70;
    position: relative;
    border-bottom: 1px solid rgba(36,50,56,0.2);

}


`;

export const HeaderBar= () => (

    <Styles>


    	<header id="header">
    			<Container>
    			<Row>
    			<Col xs={2}>
    				<Logo />
    			</Col>
				<Col xs={4}>
    				<SearchBar />
    			</Col>				
    		</Row>

    		</Container>

    	</header>

    </Styles>

)