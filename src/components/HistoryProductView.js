import { useState, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import HistoryProductCard from './HistoryProductCard'

export default function HistoryProductView({productData}) {

	const [products, setProducts] = useState([])

	useEffect(() => {
		const productsArr = productData.map(product => {
				return(
					<HistoryProductCard key={product._id} productProp={product} />
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

