import { useState, useEffect } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import UserContext from '../UserContext';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Navigate } from 'react-router-dom';


export default function CartCheckout({ checkout, fetchData}) {

	const userCheckout = () => {
		Swal.fire({
		  title: 'Are you sure?',
		  text: "Do you wanna check out?",
		  icon: 'warning',
		  showCancelButton: true,
		  confirmButtonColor: '#3085d6',
		  cancelButtonColor: '#d33',
		  confirmButtonText: 'Checkout'
		}).then((result) => {
		  if (result.isConfirmed) {
			fetch(`http://localhost:4000/checkouts/final`,{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${ localStorage.getItem('accessToken')}`
				},
				body: JSON.stringify({
					checking: true
				})
			})
			.then(res => res.json())
			.then(data => {
				if(data){
					Swal.fire({
						title: 'Successful checkout',
						icon: 'success',
						text: 'product Successfully checkout'
					})
					fetchData()
					
				}else{
					Swal.fire({
						title: 'error',
						icon: 'error',
						text: 'Something went wrong'
					})
					fetchData()
				}
			})
		    
		  }
		})

	}
	return(
		<Button variant="danger" size="sm" onClick={() => userCheckout(checkout)}>Checkout</Button>
		)
}
	
