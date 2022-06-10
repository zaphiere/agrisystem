import { useState, useEffect } from 'react';
import CartCard from './CartCard';
import CartCheckout from './CartCheckout';
import { Navigate } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap';


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
				</>
			)
		})
		setProductTotal(productSum)
		setCartItems(cartItemsArr)
	}, [props])

	return(
		<Row className="mt-3">
			<Col md={12}>
				<h2 className="text-danger">Shopping Cart</h2>
				{ cartItems }
			</Col>
			<Col md={12}>
			<Row className="py-4">
				<Col md={1}>
					<h5 style={{float: 'left'}}>Total:</h5> 
				</Col>
				<Col md={2} className="ps-0" >
					<h3 className="text-danger" >₱ { productTotal }</h3>
				</Col>
				<Col md={{ span: 5, offset: 4 }} >
					<CartCheckout />
				</Col>
			</Row>

				
			</Col>
		</Row>

		)
}