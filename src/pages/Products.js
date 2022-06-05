import UserContext from '../UserContext';
import AdminView from '../components/AdminView';
import UserView from '../components/UserView';
import { useContext, useEffect, useState } from 'react';


export default function Products() {

	const { user } = useContext(UserContext);
	const [ allProducts, setAllProducts ] = useState([])

	const fetchData = () => {
		fetch('http://localhost:4000/products/all')
		.then(res => res.json())
		.then(data => {
			console.log(data)
			setAllProducts(data)
		})
	}
	useEffect(() => {
		fetchData()
	}, [])

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