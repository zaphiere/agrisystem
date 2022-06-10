import { Row, Col, Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default  function ProductSearchView(){
	return(
		<Container>
			<Row className="viewheight">
				<Col>
					<h1>Product does not exist </h1>
					<Button variant="danger" as={ Link } to="/">Back Home</Button>
				</Col>
			</Row>
		</Container>
		)
}

	

