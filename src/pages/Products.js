import ProductCard from '../components/ProductCard';
import productData from '../mockData/productData';
import { Row, Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

export default function Products() {
	const products = productData.map(singleProduct => {

		return(
			<ProductCard key={ singleProduct.id } productProp={ singleProduct }/>
			)
	})

	return(
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


		)
}