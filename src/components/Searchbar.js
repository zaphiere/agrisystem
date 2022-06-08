import { useState } from 'react';
// import { Navbar, Nav } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import { InputGroup, Button, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function SearchBar() {
	return(

		<Row className=" backgroundColor justify-content-center mb-3 mt-1" > 
			<Col xs md={1}>
				<h2>Logo</h2>
			</Col>
			<Col md ={8}>
					<InputGroup className="pt-2">
						   <Button variant="outline-secondary" id="button-addon1">
						    <i className="bi bi-search"></i>
						   </Button>
						   <FormControl
						     aria-label="Example text with button addon"
						     aria-describedby="basic-addon1"
						   />
					</InputGroup>
			</Col>
			<Col md={1}>
				<Button variant="link" as={ Link } to={"/cart"}>	
					<i className="bi bi-cart4 text-secondary" style={{ fontSize: 25 }  }></i>
				</Button>
			</Col>
		</Row>
		)
}