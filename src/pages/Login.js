import { useState, useEffect, useContext } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Navigate, useNavigate, Link } from 'react-router-dom';
import UserContext from '../UserContext';
import Swal from 'sweetalert2';


export default function Login() {


	const navigate = useNavigate()
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

		fetch('http://localhost:4000/users/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				email: email,
				password: password
			})
		})
		.then(res => res.json())
		.then(data => {
			if(data.accessToken !== undefined){
				localStorage.setItem('accessToken', data.accessToken);
				setUser({
					accessToken: data.accessToken
				})

				Swal.fire({
					title: 'Login Success',
					icon: 'success',
					text: 'You are now login!'
				})

				fetch('http://localhost:4000/users/details', {
					headers: {
						Authorization: `Bearer ${data.accessToken}`
					}
				})
				.then(res => res.json())
				.then(data => {
					if(data.isAdmin === true){
						localStorage.setItem('isAdmin', data.isAdmin)

						setUser({
							isAdmin:data.isAdmin
						})
						navigate('/products')
					}else{
						navigate('/')
					}
				})
				
			}else{
				Swal.fire({
					title: 'Failed To Login',
					icon: 'error',
					text: 'Something went wrong. Check your Credentials'
				})
			}
			setEmail('')
			setPassword('')
		})

	}

	return (
		(user.accessToken !== null)?
		<Navigate to="/products" />

		:
		<Form onSubmit={e => authentication(e)}>
			<Row className="justify-content-center mx-auto viewheight">
				<Col md={8} className="image-bg">

				</Col>
				<Col md={4} className="p-3">
					<Row>
						<Col className="p-5">
							<h3>Login</h3>
							<Form.Group>
								<Form.Label>Email</Form.Label>
								<Form.Control 
									type="email"
									placeholder="Please enter your email"
									required
									value={email}
									onChange={e => setEmail(e.target.value)}
								/>
							</Form.Group>

							<Form.Group>
								<Form.Label>Password</Form.Label>
								<Form.Control 
									type="password"
									placeholder="Please enter your password"
									required
									value={password}
									onChange={e => setPassword(e.target.value)}
								/>
							</Form.Group>
							{ isActive?
								<Button variant="danger" type="submit" className="mt-3">Submit</Button>
								:
								<Button variant="danger" type="submit" className="mt-3" disabled>Submit</Button>
							}
							<p className="mt-2">No account yet?<Button variant="link" className="text-danger pt-0" as={ Link } to="/register">Register Here!</Button></p>
						</Col>
					</Row>
				</Col>
			</Row>
		</Form>
		)
}