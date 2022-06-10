import { useState } from 'react';
// import { Navbar, Nav } from 'react-bootstrap';
import { Row, Col, Form } from 'react-bootstrap';
import { InputGroup, Button, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Navigate, useNavigate } from 'react-router-dom';

export default function SearchBar() {

	const [ search, setSearch ] = useState('');
	const [ productName, setProductName] = useState('');

		
	function productSearch(e){
		e.preventDefault()
	}

	return(

		<Row className=" backgroundColor justify-content-center mb-3 mt-1" > 
			<Col md={1}>
				<img className="image" src="https://i.ibb.co/tzJGH9y/logo.png" />
			</Col>
			<Col xs={10} md ={8}>
					<Form  onSubmit={e => productSearch(e)}>
					<InputGroup className="pt-2">
						   <Button variant="outline-light link"  as={ Link } to={`/products/active/${search}`}id="button-addon1" type="submit">
						    <i className="bi bi-search"></i>
						   </Button>
						   <FormControl
						     aria-label="Example text with button addon"
						     aria-describedby="basic-addon1"
						     type="text"
						     value={search}
							 onChange={e => setSearch(e.target.value)}
						   />
					</InputGroup>
					</Form>
			</Col>
			<Col xs={2} md={1}>
				<Button variant="link" as={ Link } to={"/cart"}>	
					<i className="bi bi-cart4 text-white" style={{ fontSize: 25 }  }></i>
				</Button>
			</Col>
		</Row>
		)
}