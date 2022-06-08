import { useState, useEffect } from 'react';
import CartCard from './CartCard';
import CartCheckout from './CartCheckout';
import { Navigate } from 'react-router-dom';


export default function CartView(props) {

	const { cartData, fetchData} = props;

	const [ cartItems, setCartItems ] = useState([])
	const [ productTotal, setProductTotal ] = useState(0)

	useEffect(() => {
		let productSum = 0
		const cartItemsArr = cartData.map(cartItem => {
			productSum += cartItem.subTotal;
			return(
				<>
				<CartCard key={cartItem._id} cartProp={cartItem} fetchData={fetchData} />
				<CartCheckout key={cartItem._id} cartProp={cartItem} fetchData={fetchData} />
				</>
			)
		})
		setProductTotal(productSum)
		setCartItems(cartItemsArr)
	}, [props])

	return(
		<>
			<h1>Cart View</h1>
			{ cartItems }

			<h3>Total</h3> 
			<>
			{ productTotal }
			</>
		</>
		)
}