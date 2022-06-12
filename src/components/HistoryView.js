import { useState, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import HistoryCard from './HistoryCard'

export default function HistoryView({productData}) {

	const [products, setProducts] = useState([])

	useEffect(() => {
		const productsArr = productData.map(product => {
				return(
					<HistoryCard key={product._id} productProp={product} />
					)

		})

		setProducts(productsArr)

	}, [productData])

	return(
		<>
			{products}
		</>


		)
}

