import UserContext from '../UserContext';
import { useContext, useEffect, useState } from 'react';
import UserView from '../components/UserView';
import { useParams, Link, Navigate, useNavigate } from 'react-router-dom';


export default function ProductSearch() {

	const navigate = useNavigate()
	const { productName } = useParams();
	const [ allProducts, setAllProducts ] = useState([])

	const fetchData = () => {
	console.log(productName)
		fetch(`http://localhost:4000/products/active/${productName}`)
		.then(res => res.json())
		.then(data => {
			if(data === false){
				navigate('/noproduct')
			}else{
				setAllProducts(data)
			}
		})
	}

	useEffect(() => {
		fetchData()
	}, [])

	fetchData()

	const { user } = useContext(UserContext);
	return(

		<>		
				<UserView  productData={allProducts}/>

		</>

		)
}

