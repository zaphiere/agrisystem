import { useState, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import UserCheckoutCards from './UserCheckoutCards'

export default function UserCheckoutHistory(checkoutData){
	console.log(checkoutData)
	const [checkouts, setCheckouts] = useState([])
	useEffect(() => {
		
		const checkoutArr = checkoutData.map(checkout => {

			return(
				<UserCheckoutCards key={checkout._id} checkoutProp={checkout} />
				)
		})

		setCheckouts(checkoutArr)

	}, [checkoutData])

	return(

		<Container>
			{/*{ checkouts }*/}
			<h1>Hello</h1>
		</Container>

		)

}