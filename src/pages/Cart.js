import CartView from '../components/CartView'
import CartCard from '../components/CartCard'
import { Container } from 'react-bootstrap';
import { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import UserContext from '../UserContext';



export default function Cart() {

	const [ cartItems, setCartItems ] = useState([])

	const fetchData = () => {
		fetch('https://agribusinessecommerce.herokuapp.com/carts/view', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${ localStorage.getItem('accessToken') }`
			}
		})
		.then(res => res.json())
		.then(data => {
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
			{user.accessToken !== null  ?
				<Container>
					<CartView cartData={cartItems} fetchData={fetchData}/>
				</Container>
				:
				<Navigate to="/login" />
			}
						
		</>
		)
}