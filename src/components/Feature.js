import UserContext from '../UserContext';
import FeatureView from '../components/FeatureView';
import { useContext, useEffect, useState } from 'react';


export default function Feature() {

	const [ allProducts, setAllProducts ] = useState([])

	const fetchData = () => {
		fetch('http://localhost:4000/products/feature')
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

			<FeatureView  productData={allProducts}/>


		)
}