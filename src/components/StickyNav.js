import { Navbar, Nav } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import { useContext } from 'react';
import AppNavbar from './AppNavbar';
import SearchBar from './Searchbar';
import UserContext from '../UserContext';
import { Container } from 'react-bootstrap'

export default function StickyNav() {
	
	const { user } = useContext(UserContext);

	return(
		<>
			{(user.isAdmin === true) ?
				<Row className=" backgroundColor justify-content-center mx-auto sticky-top" > 
					<Col md={12}>
						<AppNavbar />
					</Col>
				</Row>
				:
				<Row className=" backgroundColor justify-content-center mx-auto sticky-top" > 
					<Col md={12}>
						<AppNavbar />
					</Col>
					<Col md={12}>
						<SearchBar />
					</Col>
				</Row>
				
			}
				
			
		</>


		)
}