import { useState, useContext, useEffect } from 'react';
import { Container, Card, Button, Form } from 'react-bootstrap';
import UserContext from '../UserContext';
import Swal from 'sweetalert2';
import { useParams, Link, useNavigate } from 'react-router-dom';

export default function SpecificProduct() {
	
	const navigate = useNavigate();
	const { productId } = useParams();
	const [ productName, setProductName ] = useState('');
	const [ description, setDescription ] = useState('');
	const [ price, setPrice ] = useState(0);
	const [ quantity, setQuantity ] = useState(1);

	useEffect(() => {
		fetch(`http://localhost:4000/products/${ productId }`)
		.then(res => res.json())
		.then(data => {
			setProductName(data.productName)
			setDescription(data.description)
			setPrice(data.price)
		})
	}, [])
	
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
		<Container>
			<Form onSubmit={e => addCart(e)}>
				<Card>
					<Card.Header>
						<h4>{ productName }</h4>
					</Card.Header>

					<Card.Body>
						<Card.Text>{ description }</Card.Text>
						<h6>Price: Php { price }</h6>
					</Card.Body>
					<Form.Group>
						<Form.Label>quantity</Form.Label>
						<Form.Control 
						      type="number"
						      required
						      value={quantity}
						      onChange={e => setQuantity(e.target.value)}
						 />
					</Form.Group>
					<Card.Footer>
					{ user.accessToken !== null ?
						<Button variant="primary" onClick={() => addCart(productId)}>Add To Cart</Button>
						:
						<Button variant="warning" as={ Link } to="/login">Login to Add to Cart</Button>
					 }

					</Card.Footer>
				</Card>
			</Form>
		</Container>

		)
}