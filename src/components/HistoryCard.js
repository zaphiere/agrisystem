import { useContext, useEffect, useState } from 'react';
import { Card, Button, Col, Row, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import UserContext from '../UserContext';
import HistoryProductView from '../components/HistoryProductView';
import { Link } from 'react-router-dom';



export default function HistoryCard({productProp}) {
	const { _id, firstName, lastName, totalAmount, purchasedOn } = productProp;
	const { user } = useContext(UserContext);

	const [ userCheckout, setUserCheckout ] = useState([])

	const fetchData = () => {
		fetch(`https://agribusinessecommerce.herokuapp.com/checkouts/${ _id }/viewproducts/`, {
			method: 'GET',
			headers: {
				'Content-Type' : 'application/json',
				Authorization: `Bearer ${ localStorage.getItem('accessToken') }`
			},
		})
		.then(res => res.json())
		.then(data => {
			console.log(data)
			setUserCheckout(data)
		})
	}
	useEffect(() => {
		fetchData()
	}, [])

	return(
		<Container className="mb-2 border">
			<Row>
				<Col md={12} className="bg-danger">
					<p className="text-white mb-2 mt-1">Order Date: {purchasedOn} </p>
				</Col>
				<Col md={12}>
					<p>Items:</p>
					<ul>
						{ <HistoryProductView productData={userCheckout} fetchData={fetchData}/> }
					</ul>
				</Col>
				<Col>
					<p>Total:</p> <p className="text-danger">₱ { totalAmount }</p>
				</Col>
			</Row>
		</Container>
		)

} 
