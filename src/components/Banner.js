import { Button, Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';
export default function Banner() {
	return(
		<Row className="whitebg mx-auto">
			<Col>
				<Container>
					<Row>
						<Col md={8}>
							<Carousel>
								<Carousel.Item>
									<img
									      className="d-block w-100"
									      src="https://via.placeholder.com/800x300.png"
									      alt="First slide"
									    />
									    <Carousel.Caption>
									      <h3>First slide label</h3>
									      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
									    </Carousel.Caption>
								</Carousel.Item>
								<Carousel.Item>
									<img
									      className="d-block w-100"
									      src="https://via.placeholder.com/800x300.png"
									      alt="First slide"
									    />
									    <Carousel.Caption>
									      <h3>Second slide label</h3>
									      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
									    </Carousel.Caption>
								</Carousel.Item>
							</Carousel>
						</Col>
						<Col md={4} className="p-5">
							<h1 className="mb-3">Welcome To Agri Farm</h1>
							<p className="mb-3">For your agricultural Needs</p>
							<Button variant="dark">Shop Now!</Button>
						</Col>
					</Row>
				</Container>
			</Col>
		</Row>
		)
}