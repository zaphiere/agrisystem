import { useState, useEffect } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import UserContext from '../UserContext';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';



export default function CartCard({cartProp}) {
	
	const { _id, name, price, quantity, subTotal } = cartProp;

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
				document.location.reload();
			}else{
				Swal.fire({
					title: 'error!',
					icon: 'error',
					text: 'Something went wrong, please try again'
				})
			}
		})
	}


	return(
		<Form>
		<Card className="mt-3">
			<Card.Body>
				<Card.Title> { name } </Card.Title>
				<Card.Subtitle>Price:</Card.Subtitle>
				<Card.Text> { price } </Card.Text>
				<Card.Subtitle>Quantity:</Card.Subtitle>
				<Card.Text> { quantity } </Card.Text>
				<Card.Subtitle> Subtotal: </Card.Subtitle>
				<Card.Text> { subTotal } </Card.Text>
				<Card.Subtitle> Delete: </Card.Subtitle>
				<Card.Text> <Button variant="danger" size="sm" onClick={() => deleteCartItem(_id)}>DELETE</Button> </Card.Text>
			</Card.Body>
		</Card>
		</Form>

		)
}