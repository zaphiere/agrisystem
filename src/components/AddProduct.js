import { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import Swal from 'sweetalert2';
import axios from 'axios';



export default function AddProduct({fetchData}) {
	const [ name, setName ] = useState('');
	const [ description, setDescription ] = useState('');
	const [ price, setPrice ] = useState(0);
	const [ image, setImage ] = useState('')


	const [ showAdd, setShowAdd ] = useState(false);

	const handleChange = (e) => {
		console.log(e.target.files)
		setImage(e.target.files[0])
	}

	const openAdd = () => setShowAdd(true);
	const closeAdd = () => setShowAdd(false);

	const addProduct = (e) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append('name', name);
		formData.append('description', description);
		formData.append('price', price);
		formData.append('image', image);
	
		// const url = 'http://localhost:4000/products/create';
		axios.post("http://localhost:4000/products/create", formData, {
			headers: {
				"Content-Type": "multipart/form-data",
				Authorization: `Bearer ${ localStorage.getItem('accessToken') }`
			},
		})
		.then((res) => {
			Swal.fire({
					title: 'Success',
					icon: 'success',
					text: 'Product successfully added'
				})
				closeAdd()
				fetchData()
		})
		.catch((err) => {
			console.log("fail")
			console.log(err);
		})

		setName('')
		setDescription('')
		setPrice(0)

		/*fetch('http://localhost:4000/products/create', {
			method: 'POST',
			headers: {
				'Content-Type' : 'multipart/form-data',
				Authorization: `Bearer ${ localStorage.getItem('accessToken') }`
			},
			body: JSON.stringify({
				name: name,
				description: description,
				price: price,
			})
		})
		.then(res => res.json())
		.then(data => {

			if(data){
				Swal.fire({
					title: 'Success',
					icon: 'success',
					text: 'Product successfully added'
				})
				closeAdd()
				fetchData()
			}else{
				Swal.fire({
					title: 'error',
					icon: 'error',
					text: 'Please try again'
				})
				fetchData()
			}
			setName('')
			setDescription('')
			setPrice(0)
		})*/
	}

	return(
		<>
			<Button variant="primary" onClick={openAdd}>Add New Product</Button>

			<Modal show={showAdd} onHide={closeAdd}>
				<Form onSubmit={e => addProduct(e)}>
					<Modal.Header closeButton>
						<Modal.Title>Add Product</Modal.Title>
					</Modal.Header>

					<Modal.Body>
						<Form.Group>
							<Form.Label>Name</Form.Label>
							<Form.Control 
							      type="text"
							      required
							      value={name}
							      onChange={e => setName(e.target.value)}
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
						<Form.Group>
							<Form.Label>Image</Form.Label>
							<Form.Control 
							      type="file"
							      required
							      // value={image}
							      onChange={handleChange}

							 />
						</Form.Group>
					</Modal.Body>

					<Modal.Footer>
						<Button variant="secondary" onClick={closeAdd}>Close</Button>
						<Button variant="success" type="submit">Submit</Button>
					</Modal.Footer>

				</Form>
			</Modal>
		</>
		)
}