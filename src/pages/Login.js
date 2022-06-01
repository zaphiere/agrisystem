import { useState, useEffect, useContext } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';


export default function Login() {

	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	return (
		<Row className="justify-content-center mx-auto viewheight">
			<Col md={8} className="backgroundColor">
				
			</Col>
			<Col md={4} className="p-3">

				<h2>Login</h2>
				<Form.Group>
					<Form.Label>Email</Form.Label>
					<Form.Control 
						type="email"
						placeHolder="Please enter your email"
						required
						value={email}
					/>
				</Form.Group>

				<Form.Group>
					<Form.Label>Password</Form.Label>
					<Form.Control 
						type="password"
						placeHolder="Please enter your password"
						required
						value={password}
					/>
				</Form.Group>
				<Button variant="dark" type="submit" className="mt-3">Submit</Button>
				
			</Col>
		</Row>
		)
}