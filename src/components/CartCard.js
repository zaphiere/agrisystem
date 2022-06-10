import { useState, useEffect } from 'react';
import { Card, Button, Form, Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import UserContext from '../UserContext';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';



export default function CartCard({cartProp, fetchData}) {
	
	const { _id, name, price, quantity, subTotal } = cartProp;
	const [ cartQuantity, setCartQuantity ] = useState(quantity);

	

	const deleteCartItem = () => {
		
		fetch(`http://localhost:4000/carts/${ _id }/delete`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${ localStorage.getItem('accessToken') }`
			},
		})
		.then(res => res.json())
		.then(data => {
			
			if(data){
				// document.location.reload();
				fetchData();
			}else{
				Swal.fire({
					title: 'error!',
					icon: 'error',
					text: 'Something went wrong, please try again'
				})
			}
		})
	}

	
	const cartEdit = (e) => {
		e.preventDefault();

			fetch(`http://localhost:4000/carts/${ _id }`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${ localStorage.getItem('accessToken') 
					}`
				},
				body: JSON.stringify({
					quantity: cartQuantity
				})
			})
			.then(res => res.json())
			.then(data => {
				if(data){
					fetchData()
				}else {
					Swal.fire({
						title: 'error',
						icon: 'error',
						text: 'Something went wrong'
					})
					fetchData()
				}
			})
		}
	

	return(
		<Form onSubmit ={e => cartEdit(e, _id)}>
			<Card className="mt-3" key={_id}>
				<Row>
					<Col md={3} className="p-4">
						<Card.Title> { name } </Card.Title>
						<Card.Subtitle>Price:</Card.Subtitle>
						<Card.Text> ₱ { price } </Card.Text>
					</Col>
					<Col md={2} className="p-4">
						<Card.Subtitle>Quantity:</Card.Subtitle>
						<Form.Control
							type="number"
							required
							value={cartQuantity}
							onChange={e => setCartQuantity(e.target.value)}
						/>
						<Button variant="dark" type="submit" size="sm" className="mt-2">Update Quantity</Button>
					</Col>
					<Col md={3} className="p-4">
						<Card.Subtitle> Subtotal: </Card.Subtitle>
						<Card.Text> ₱ { subTotal } </Card.Text>
					</Col>
					<Col md={{ span: 2, offset: 2 }} className="p-4">
 						<Button variant="danger" onClick={() => deleteCartItem(_id)}>DELETE</Button> 
					</Col>
				</Row>
			</Card>
		</Form>

		)
}