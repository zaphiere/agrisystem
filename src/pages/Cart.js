import CartView from '../components/CartView'
import CartCard from '../components/CartCard'
import { Container } from 'react-bootstrap';
import { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import UserContext from '../UserContext';



export default function Cart() {

	const [ cartItems, setCartItems ] = useState([])

	const fetchData = () => {
		fetch('http://localhost:4000/carts/view', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${ localStorage.getItem('accessToken') }`
			}
		})
		.then(res => res.json())
		.then(data => {
			console.log(data)
			if(data){
				setCartItems(data)
			}else{
				return(
					<Navigate to="/products" />
					)
			}
		})
	}
	useEffect(() => {
		fetchData()
	}, [])

	const { user } = useContext(UserContext);

	return(
		<>
			{(user.isAdmin === true) ?
				<Navigate to="/products" />
				:
				<Container>
					<CartView cartData={cartItems} fetchData={fetchData}/>
				</Container>
			}
				
			
		</>
		)
}