import { useState, useEffect, useContext } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
// import Swal from 'sweetalert2';

export default function Register() {

	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ verifyPassword, setVerifyPassword ] = useState('');
	const [ firstName, setFirstName ] = useState('');
	const [ lastName, setLastName ] = useState('');
	const [ contactNo, setContactNo ] = useState('')

	return(
		<Container>
		<Row className="justify-content-center viewheight">
			<Col md={8} className="p-5">
				<h4>Register New Account</h4>
				<Row className="whitebg mt-4 justify-content-center p-3">
					<Col md={6}>
						<Form.Group className="mb-2">
							<Form.Label>Email Address</Form.Label>
							<Form.Control 
								type="email"
								placeholder="Email Address"
								required
								value={email}
							/>
						</Form.Group>

						<Form.Group className="mb-2">
							<Form.Label>Password</Form.Label>
							<Form.Control 
								type="password"
								placeholder="Password"
								required
								value={password}
							/>
						</Form.Group>

						<Form.Group className="mb-2">
							<Form.Label>Verify Password</Form.Label>
							<Form.Control 
								type="password"
								placeholder="Verify Password"
								required
								value={verifyPassword}
							/>
						</Form.Group>
					</Col>
					<Col md={6}>	
						<Form.Group className="mb-2">
						<Form.Label>First Name</Form.Label>
						<Form.Control 
							type="string"
							placeholder="First Name"
							required
							value={firstName}
						/>
						</Form.Group>
						<Form.Group className="mb-2">
						<Form.Label>Last Name</Form.Label>
						<Form.Control 
							type="string"
							placeholder="Last Name"
							required
							value={lastName}
						/>
						</Form.Group>
						<Form.Group className="mb-2">
						<Form.Label>Contact Number</Form.Label>
						<Form.Control 
							type="number"
							placeholder="Phone Number"
							required
							value={contactNo}
						/>
						</Form.Group>
							<p className="mt-3 text-black-50">By proceeding to sign up, I acknowledge that I have read and consented to the Terms of Use and Privacy Policy</p>
							<Button variant="dark" type="submit">Submit</Button>
							<p className="mt-2">Already have an account? Sign in</p>
					</Col>
				</Row>
			</Col>
		</Row>
		</Container>
		)
}