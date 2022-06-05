import { useState, useEffect, useContext } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import UserContext from '../UserContext';
import Swal from 'sweetalert2';


export default function Login() {

	const { user, setUser } = useContext(UserContext);

	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ isActive, setIsActive ] = useState(true);

	// [Button Toggle]
	useEffect(() => {
		if(email !=='' && password !=="") {
			setIsActive(true);
		}else{
			setIsActive(false)
		}
	}, [email, password])

	// [Login Authentication]
	function authentication(e) {
		e.preventDefault();

		localStorage.setItem('email',email);

		setUser({
			email: localStorage.getItem('email')
		})
		setEmail('');
		setPassword('');

		Swal.fire({
			title: 'Yay!',
			icon: 'success',
			text: `${email} has been verified! Welcome!`
		})
	}

	return (
		(user.email !== null)?
		<Navigate to="/products" />

		:
		<Form onSubmit={e => authentication(e)}>
			<Row className="justify-content-center mx-auto viewheight">
				<Col md={8} className="backgroundColor">
					
				</Col>
				<Col md={4} className="p-3">
					<Row>
						<Col className="p-5">
							<h3>Login</h3>
							<Form.Group>
								<Form.Label>Email</Form.Label>
								<Form.Control 
									type="email"
									placeHolder="Please enter your email"
									required
									value={email}
									onChange={e => setEmail(e.target.value)}
								/>
							</Form.Group>

							<Form.Group>
								<Form.Label>Password</Form.Label>
								<Form.Control 
									type="password"
									placeHolder="Please enter your password"
									required
									value={password}
									onChange={e => setPassword(e.target.value)}
								/>
							</Form.Group>
							{ isActive?
								<Button variant="dark" type="submit" className="mt-3">Submit</Button>
								:
								<Button variant="dark" type="submit" className="mt-3" disabled>Submit</Button>
							}
						</Col>
					</Row>
				</Col>
			</Row>
		</Form>
		)
}