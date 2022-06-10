import UserContext from '../UserContext';
import FeatureView from '../components/FeatureView';
import { useContext, useEffect, useState } from 'react';


export default function Feature() {

	const [ allProducts, setAllProducts ] = useState([])

	const fetchData = () => {
		fetch('https://agribusinessecommerce.herokuapp.com/products/feature')
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