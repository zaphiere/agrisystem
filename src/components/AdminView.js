import { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { Row, Col, Container } from 'react-bootstrap';
import ArchiveProduct from './ArchiveProduct';
import EditProduct from './EditProduct';
import DeleteProduct from './DeleteProduct';


export default function AdminView(props) {

	const { productData, fetchData} = props;

	const [ products, setProducts ] = useState([])

	useEffect(() => {

		const productArr = productData.map(product => {
			return(
				<tr key={product._id}>
					<td>{product._id}</td>
					<td>{product.productName}</td>
					<td>{product.description}</td>
					<td>{product.price}</td>
					<td className={product.isActive ? "text-success" : "text-danger"}>
						{product.isActive ? "Available" : "Unavailable"}
					</td>
					<td>
						<EditProduct product={product._id} fetchData={fetchData} />
					</td>
					<td>
						<ArchiveProduct product={product._id} isActive={product.isActive} fetchData={fetchData} />
					</td>
					<td>
						<DeleteProduct product={product._id} fetchData={fetchData} />
					</td>
				</tr>
			)
		}) 
		setProducts(productArr)
	}, [productData])

	return(
		<Container>
			<div className="text-center my-4">
				<h1>Admin Dashboard</h1>
			</div>
			<Table striped bordered hover responsive>
				<thead className="bg-dark text-white">
					<tr>
						<th>ID</th>
						<th>NAME</th>
						<th>DESCRIPTION</th>
						<th>PRICE</th>
						<th>AVAILABILITY</th>
						<th>ACTIONS</th>
						<th>ARCHIVE</th>
						<th>DELETE</th>
					</tr>
				</thead>

				<tbody>
					{ products }
				</tbody>
			</Table>
		</Container>
		

		)
}

