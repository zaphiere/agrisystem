import { useState, useEffect } from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function ProductCard({productProp}) {
	const { _id, productName, image, price } = productProp;

	return(
		<Col xs={6} md={3} className="mb-4" >
		<Card>
			<Card.Img
				src= {`http://localhost:4000/${ image }`}
			/>
			<Card.Body className="pb-0">
				<Row>
					<Col>
						<h6 className="mb-0"> { productName } </h6>
						<h4 className="text-danger">₱{ price }</h4>
					</Col>
				</Row>
			</Card.Body>
			<Button variant="outline-danger" as={ Link } to={`/products/${_id}`}>Check</Button>
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