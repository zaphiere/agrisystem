import { useContext, useEffect, useState } from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import UserContext from '../UserContext';
import { Link } from 'react-router-dom';
import {Container } from 'react-bootstrap';



export default function HistoryCard({productProp}) {
	const { _id, name, price, quantity, subtotal } = productProp;
	const { user } = useContext(UserContext);


	return(
		<li>
			<Row>
				<Col>
					{ name }
				</Col>
				<Col>
					x { quantity }
				</Col>
				<Col>
					₱{ price }
				</Col>
			</Row>
		</li>
		
		

		)

} 
