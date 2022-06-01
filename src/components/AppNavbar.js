import { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function AppNavbar() {
	return(
		<Navbar className="backgroundColor" expand="lg" variant="dark" sticky="top">
			<Navbar.Toggle aria-controls="basic-navbar-nav"/>
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ms-auto">
					<Nav.Link as={Link} to="/">Home</Nav.Link>
					<Nav.Link as={Link} to="/products">Products</Nav.Link>
					<Nav.Link as={Link} to="/register">Sign Up</Nav.Link>
					<Nav.Link as={Link} to="/login">Login</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
		)
}