import { useState, useEffect } from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function ProductCard({productProp}) {
	const { _id, productName, picture, price } = productProp;

	return(
		<Col md={3} className="mb-4" >
		<Card>
			<Card.Img
				src= "https://via.placeholder.com/180x180.png"
			/>
			<Card.Body>
				<Card.Title> { productName } </Card.Title>
				<Card.Text>Php { price }</Card.Text>
				<Button variant="primary" as={ Link } to={`/products/${_id}`}>Check</Button>
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