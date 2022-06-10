import { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import Swal from 'sweetalert2'


export default function EditProduct({ product, fetchData }){

	const [ showEdit, setShowEdit ] = useState(false)

	const [productId, setProductId] = useState('');
	const [productName, setProductName] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState(0);


	const openEdit = (productId) => {
		fetch(`https://agribusinessecommerce.herokuapp.com/${ productId }`)
		.then(res => res.json())
		.then(data => {

			setProductId(data._id)
			setProductName(data.productName)
			setDescription(data.description)
			setPrice(data.price)
		})

		setShowEdit(true)
	}


	const closeEdit = () => {
		setShowEdit(false)
		setProductName('')
		setDescription('')
		setPrice('')
	}

	const editProduct = (e) => {
		e.preventDefault();

		fetch(`https://agribusinessecommerce.herokuapp.com/products/${ productId }`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${ localStorage.getItem('accessToken') 
				}`
			},
			body: JSON.stringify({
				productName: productName,
				description: description,
				price: price
			})
		})
		.then(res => res.json())
		.then(data => {
			if(data){
				Swal.fire({
					title: 'Success',
					icon: 'success',
					text: 'Product successfully updated'
				})
				fetchData()
				closeEdit()
			}else {
				Swal.fire({
					title: 'error',
					icon: 'error',
					text: 'Something went wrong'
				})
				fetchData()
				closeEdit()
			}
		})
	}

	return(
		<>
			<Button variant="primary" size="sm" onClick={() => openEdit(product)}>Update</Button>

		{/*Edit Modal*/}

			<Modal show={showEdit} onHide={closeEdit}>
				<Form onSubmit ={e => editProduct(e, productId)}>
					<Modal.Header closeButton>
						<Modal.Title>Add Product</Modal.Title>
					</Modal.Header>

					<Modal.Body>
						<Form.Group>
							<Form.Label>Name</Form.Label>
							<Form.Control 
							      type="text"
							      required
							      value={productName}
							      onChange={e => setProductName(e.target.value)}
							 />
						</Form.Group>

						<Form.Group>
							<Form.Label>Description</Form.Label>
							<Form.Control 
							      type="text"
							      required
							      value={description}
							      onChange={e => setDescription(e.target.value)}
							 />
						</Form.Group>

						<Form.Group>
							<Form.Label>Price</Form.Label>
							<Form.Control 
							      type="number"
							      required
							      value={price}
							      onChange={e => setPrice(e.target.value)}
							 />
						</Form.Group>
					</Modal.Body>

					<Modal.Footer>
						<Button variant="secondary" onClick={closeEdit}>Close</Button>
						<Button variant="success" type="submit">Submit</Button>
					</Modal.Footer>

				</Form>
			</Modal>

		</>


		)
}