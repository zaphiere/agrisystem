import { useState, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import ProductCard from './ProductCard'

export default function FeatureView({productData}) {

	const [products, setProducts] = useState([])

	useEffect(() => {
		const productsArr = productData.map(product => {
			if(product.isActive === true) {
				return(
					<ProductCard key={product._id} productProp={product} />
					)

			}else{
				return null;
			}
		})

		setProducts(productsArr)

	}, [productData])

	return(
		<>
			
		<Container className="my-4 px-4" >
		<Row className="mt-3">
			<Col>
				<h3 className="text-danger mb-3">Featured Products</h3>
				<Row>
					<Col>
						<Row>
							{ products }
						</Row>
					</Col>
				</Row>
			</Col>
		</Row>
		</Container>
		</>


		)
}

