import { Navbar, Nav } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import AppNavbar from './AppNavbar';
import SearchBar from './Searchbar';
import { Container } from 'react-bootstrap'

export default function StickyNav() {
	return(
		<Row className=" backgroundColor justify-content-center mx-auto sticky-top" > 
			<Col md={12}>
				<AppNavbar />
			</Col>
			<Col md={12}>
				<SearchBar />
			</Col>
			
		</Row>
		)
}