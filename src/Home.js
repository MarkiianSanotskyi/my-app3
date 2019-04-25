import React from 'react'
import { CardDeck } from 'react-bootstrap';
import { CardComponent } from './components/CardComponent';

export const Home = () => (

		<div>
			<CardDeck>
			<CardComponent />
			<CardComponent />
			<CardComponent />
					
			</CardDeck>
				
				<CardDeck>
				<CardComponent />
				<CardComponent />	
				</CardDeck>
		</div>
		);
