import { useState, useContext, useEffect } from 'react';
import { Container, Card, Button, Form, Col, Row } from 'react-bootstrap';
import UserContext from '../UserContext';
import Swal from 'sweetalert2';
import { useParams, Link, useNavigate } from 'react-router-dom';

export default function SpecificProduct() {
	
	const navigate = useNavigate();
	const { productId } = useParams();
	const [ productName, setProductName ] = useState('');
	const [ description, setDescription ] = useState('');
	const [ image, setImage ] = useState('');
	const [ price, setPrice ] = useState(0);
	const [ quantity, setQuantity ] = useState(1);

	useEffect(() => {
		fetch(`http://localhost:4000/products/${ productId }`)
		.then(res => res.json())
		.then(data => {
			setProductName(data.productName)
			setDescription(data.description)
			setImage(data.image)
			setPrice(data.price)
		})
	}, [])
	
	console.log(price)

	const { user } = useContext(UserContext);

	const addCart = (productId, e) => {
		
		fetch('http://localhost:4000/carts/addcart', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${ localStorage.getItem('accessToken') }`
			},
			body: JSON.stringify({
				productId: productId,
				quantity: quantity
			})
		})
		.then(res => res.json())
		.then(data => {
			
			if(data){
				Swal.fire({
					title: 'Added To Cart!',
					icon: 'success',
					text: `Item added to cart`
				})

				navigate('/products')
			}else{
				Swal.fire({
					title: 'error!',
					icon: 'error',
					text: 'Something went wrong, please try again'
				})
			}
		})
	}

	return(
		<Container className="viewheight mt-4">
			<Form onSubmit={e => addCart(e)}>
				<Card>
					<Row>
						<Col md={4}>
							<Card.Img
								src= {`http://localhost:4000/${ image }`}
							/>
							
						</Col>
						<Col md={8}>
							<Card.Body>
								<h2>{ productName }</h2>
								<Card.Text>{ description }</Card.Text>
								<h5 className="text-danger">Price: ₱ { price }</h5>
								<Form.Group>
									<Row className="mb-5">
										<Col md={2}>
											<Form.Label>Quantity</Form.Label>
										</Col>
										<Col md={2}>
											<Form.Control 
										      type="number"
										      required
										      value={quantity}
										      onChange={e => setQuantity(e.target.value)}
										 />
										</Col>
									</Row>
									{ user.accessToken !== null ?
										<Button variant="danger" onClick={() => addCart(productId)}>Add To Cart</Button>
										:
										<Button variant="warning" as={ Link } to="/login">Login to Add to Cart</Button>
									 }
								</Form.Group>		
							</Card.Body>


						</Col>
					</Row>
				</Card>
			</Form>
		</Container>

		)
}