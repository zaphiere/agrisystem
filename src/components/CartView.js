import { useState, useEffect } from 'react';
import CartCard from './CartCard'
import { Navigate } from 'react-router-dom';


export default function CartView({cartData}) {

	const { cartStuff, fetchData} = cartData;

	const [ cartItems, setCartItems ] = useState([])
	const [ productTotal, setProductTotal ] = useState(0)

	useEffect(() => {
		let productSum = 0
		const cartItemsArr = cartData.map(cartItem => {
			productSum += cartItem.subTotal;
			return(
				<CartCard key={cartItem._id} cartProp={cartItem} fetchData={fetchData} />
				
			)
		})
		setProductTotal(productSum)
		setCartItems(cartItemsArr)
	}, [cartData])

	return(
		<>
			<h1>Cart View</h1>
			{ cartItems }

			<h3>Total</h3> 
			{ productTotal }
		</>
		)
}