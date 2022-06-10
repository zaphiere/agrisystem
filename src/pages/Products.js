import UserContext from '../UserContext';
import AdminView from '../components/AdminView';
import UserView from '../components/UserView';
import { useContext, useEffect, useState } from 'react';


export default function Products() {

	const [ allProducts, setAllProducts ] = useState([])

	const fetchData = () => {
		fetch('https://agribusinessecommerce.herokuapp.com/products/all')
		.then(res => res.json())
		.then(data => {
			setAllProducts(data)
		})
	}
	useEffect(() => {
		fetchData()
	}, [])

	const { user } = useContext(UserContext);
	return(
		<>

			{(user.isAdmin === true) ?
				<AdminView productData={allProducts} fetchData={fetchData}/>
				:
				<UserView  productData={allProducts}/>
			}
		</>

		)
}