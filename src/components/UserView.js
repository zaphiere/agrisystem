import { useState, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import ProductCard from './ProductCard'

export default function UserView({productData}) {

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
			
		<Container>
		<Row className="mt-3">
			<Col>
				<h3>Products</h3>
				<Row>
					<Col md={2}>
						<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit accusantium consectetur dolore excepturi at blanditiis magnam earum facere reprehenderit! Distinctio rem magnam, quod officiis! Odio quo corrupti accusamus ut porro.</p>  
					</Col>
					<Col md={10}>
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

