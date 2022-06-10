import { useState, useEffect } from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';


export default function UserCheckoutCards({CheckoutProp}){
		const { _id, productName, picture, price } = CheckoutProp;

		return(
		
			<Card>
				<Card.Body>
					<Card.Title> { productName } </Card.Title>
					<Card.Text>Php { price }</Card.Text>
				</Card.Body>
			</Card>
			)

	
}