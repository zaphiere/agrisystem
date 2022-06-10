import { useState, useEffect, useContext } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Navigate, useNavigate, Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import UserContext from '../UserContext'
import Swal from 'sweetalert2';
// import Swal from 'sweetalert2';

export default function Register() {
	const navigate = useNavigate()
	const { user } = useContext(UserContext);

	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ verifyPassword, setVerifyPassword ] = useState('');
	const [ firstName, setFirstName ] = useState('');
	const [ lastName, setLastName ] = useState('');
	const [ contactNo, setContactNo ] = useState('');

	const [ isActive, setIsActive ] = useState(true);

	useEffect(() => {
		if((email !== '' && password !== '' && firstName !== '' && lastName !== '' && contactNo !== '') && (password === verifyPassword)){
			setIsActive(true);
		}else{
			setIsActive(false);
		}
	},[email, password, verifyPassword, firstName, lastName, contactNo])

	function userRegistration(e){
		e.preventDefault()

		fetch('https://agribusinessecommerce.herokuapp.com/users/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				firstName: firstName,
				lastName: lastName,
				email: email,
				contactNo: contactNo,
				password: password,
			})
		})
		.then(res => res.json())
		.then(data => {
		
		if(data){
			Swal.fire({
					title: 'Successfully Registered',
					icon: 'success',
					text: 'You Have Successfully Registered Your Account'
				})
			navigate('/login')
		}else{
			Swal.fire({
					title: 'Error User Registration',
					icon: 'error',
					text: 'Please try again'
				})
		}

		setEmail('')
		setPassword('')
		setVerifyPassword('')
		setFirstName('')
		setLastName('')
		setContactNo('')
		})

	}

	return(
		(user.accessToken !== null)?
			<Navigate to="/products" />
			:

		<Form onSubmit={e => userRegistration(e)}>
		<Container>
			<Row className="justify-content-center viewheight">
				<Col md={8} className="p-5">
					<h4 className="text-danger">Register New Account</h4>
					<Row className="whitebg mt-4 justify-content-center p-3">
						<Col md={6}>
							<Form.Group className="mb-2">
								<Form.Label>Email Address</Form.Label>
								<Form.Control 
									type="email"
									placeholder="Email Address"
									required
									value={email}
									onChange={e => setEmail(e.target.value)}
								/>
							</Form.Group>

							<Form.Group className="mb-2">
								<Form.Label>Password</Form.Label>
								<Form.Control 
									type="password"
									placeholder="Password"
									required
									value={password}
									onChange={e => setPassword(e.target.value)}
								/>
							</Form.Group>

							<Form.Group className="mb-2">
								<Form.Label>Verify Password</Form.Label>
								<Form.Control 
									type="password"
									placeholder="Verify Password"
									required
									value={verifyPassword}
									onChange={e => setVerifyPassword(e.target.value)}
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
								onChange={e => setFirstName(e.target.value)}
							/>
							</Form.Group>
							<Form.Group className="mb-2">
							<Form.Label>Last Name</Form.Label>
							<Form.Control 
								type="string"
								placeholder="Last Name"
								required
								value={lastName}
								onChange={e => setLastName(e.target.value)}
							/>
							</Form.Group>
							<Form.Group className="mb-2">
							<Form.Label>Contact Number</Form.Label>
							<Form.Control 
								type="number"
								placeholder="Phone Number"
								required
								value={contactNo}
								onChange={e => setContactNo(e.target.value)}
							/>
							</Form.Group>
								<p className="mt-3 text-black-50">By proceeding to sign up, I acknowledge that I have read and consented to the Terms of Use and Privacy Policy</p>
								{isActive ?
									<Button variant="danger" type="submit">Submit</Button>
									:
									<Button variant="danger" type="submit" disabled>Submit</Button>
								}
								<p className="mt-2">Already have an account?<Button variant="link" className="text-danger pt-0" as={ Link } to="/login"> Sign in</Button></p>
						</Col>
					</Row>
				</Col>
			</Row>
		</Container>
		</Form>
		)
}