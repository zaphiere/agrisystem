import { Row, Col, Card, Button } from 'react-bootstrap'
import { Container } from 'react-bootstrap';

export default function Feature() {
	return(
		<Container className="mt-3">
		<h3>Featured Product</h3>
		<Row className="mt-2 py-2 whitebg">
			<Col md={2}>
				<Card>
					<Card.Img
						src="https://via.placeholder.com/180x180.png"
					/>
					<Card.Body>
						<Card.Title>Test Product 1</Card.Title>
						<Card.Text>Php 1000</Card.Text>
						<Button>Check</Button>
					</Card.Body>
				</Card>
			</Col>
			<Col md={2}>
				<Card>
					<Card.Img
						src="https://via.placeholder.com/180x180.png"
					/>
					<Card.Body>
						<Card.Title>Test Product 1</Card.Title>
						<Card.Text>Php 1000</Card.Text>
						<Button>Check</Button>
					</Card.Body>
				</Card>
			</Col>
			<Col md={2}>
				<Card>
					<Card.Img
						src="https://via.placeholder.com/180x180.png"
					/>
					<Card.Body>
						<Card.Title>Test Product 1</Card.Title>
						<Card.Text>Php 1000</Card.Text>
						<Button>Check</Button>
					</Card.Body>
				</Card>
			</Col>
			<Col md={2}>
				<Card>
					<Card.Img
						src="https://via.placeholder.com/180x180.png"
					/>
					<Card.Body>
						<Card.Title>Test Product 1</Card.Title>
						<Card.Text>Php 1000</Card.Text>
						<Button>Check</Button>
					</Card.Body>
				</Card>
			</Col>
			<Col md={2}>
				<Card>
					<Card.Img
						src="https://via.placeholder.com/180x180.png"
					/>
					<Card.Body>
						<Card.Title>Test Product 1</Card.Title>
						<Card.Text>Php 1000</Card.Text>
						<Button>Check</Button>
					</Card.Body>
				</Card>
			</Col>
			<Col md={2}>
				<Card>
					<Card.Img
						src="https://via.placeholder.com/180x180.png"
					/>
					<Card.Body>
						<Card.Title>Test Product 1</Card.Title>
						<Card.Text>Php 1000</Card.Text>
						<Button>Check</Button>
					</Card.Body>
				</Card>
			</Col>
			
		</Row>
		</Container>
		)
}