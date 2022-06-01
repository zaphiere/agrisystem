import { useState, useEffect } from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function ProductCard({productProp}) {
	const { name, picture, price } = productProp;

	return(
		<Col md={3} className="mb-4" >
		<Card>
			<Card.Img
				src= { picture }
			/>
			<Card.Body>
				<Card.Title> { name } </Card.Title>
				<Card.Text>Php { price }</Card.Text>
				<Button>Check</Button>
			</Card.Body>
		</Card>
		</Col>
		)

} 

ProductCard.propTypes = {
	courseProp: PropTypes.shape({
		name: PropTypes.string.isRequired,
		picture: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired
	})
}