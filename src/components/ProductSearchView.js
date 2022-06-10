import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default  function ProductSearchView(){
	return(
		
		<Row>
			<Col>
				<h1>Product does not exist </h1>
				<Button variant="primary" as={ Link } to="/">Back Home</Button>
			</Col>
		</Row>
		)
}

	

