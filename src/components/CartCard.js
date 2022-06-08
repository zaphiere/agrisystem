import { useState, useEffect } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
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
		<Card className="mt-3">
			<Card.Body>
				<Card.Title> { name } </Card.Title>
				<Card.Subtitle>Price:</Card.Subtitle>
				<Card.Text> { price } </Card.Text>
				<Card.Subtitle>Quantity:</Card.Subtitle>
				<Form.Control
					type="number"
					required
					value={cartQuantity}
					onChange={e => setCartQuantity(e.target.value)}
				/>
				<Button variant="dark" type="submit" size="sm">Update Quantity</Button>
				<Card.Subtitle> Subtotal: </Card.Subtitle>
				<Card.Text> { subTotal } </Card.Text>
				<Card.Subtitle> Delete: </Card.Subtitle>
				<Card.Text> <Button variant="danger" size="sm" onClick={() => deleteCartItem(_id)}>DELETE</Button> </Card.Text>
			</Card.Body>
		</Card>
		</Form>

		)
}