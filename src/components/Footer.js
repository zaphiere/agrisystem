import { Row, Col, Container } from 'react-bootstrap';

export default function Footer() {
	return(
		<Row className="whitebg border-top mx-auto">
			<Col>
				<Container className="pt-4 text-secondary">
					<Row>
						<Col>
							<p>Copyright ©  2022 Cluckers Agricultural Supply®. All rights reserved.</p>
						</Col>
						<Col>
							
						</Col>
					</Row>
				</Container>
			</Col>
		</Row>
		)
}