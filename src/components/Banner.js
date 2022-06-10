import { Button, Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function Banner() {
	return(
		<Row className="whitebg mx-auto">
			<Col>
				<Container>
					<Row>
						<Col>
							<Carousel>
								<Carousel.Item>
									<img
									      className="d-block w-100"
									      src="https://i.ibb.co/QnZ18Vd/banner1.jpg"
									      alt="First slide"
									    />
									    
								</Carousel.Item>
								<Carousel.Item>
									<img
									      className="d-block w-100"
									      src="https://i.ibb.co/VpGqKjY/banner-2.jpg"
									      alt="First slide"
									    />
									   
								</Carousel.Item><Carousel.Item>
									<img
									      className="d-block w-100"
									      src="https://i.ibb.co/QvXxz2D/banner-3.jpg"
									      alt="First slide"
									    />
									    
								</Carousel.Item>
							</Carousel>
						</Col>
					</Row>
				</Container>
			</Col>
		</Row>
		)
}