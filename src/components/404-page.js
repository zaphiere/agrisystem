import { Row, Col, Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
	return(
		<Container>
			<Row className="viewheight">
				<Col>
					<h1>Error 404</h1>
					<p>Page not Fount</p>
					<Button variant="danger" as={ Link } to="/">Back Home</Button>
				</Col>
			</Row>
		</Container>
		)
}

export default PageNotFound

