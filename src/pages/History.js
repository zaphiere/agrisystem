import UserContext from '../UserContext';
import HistoryView from '../components/HistoryView';
import { useContext, useEffect, useState } from 'react';


export default function Products() {

	const [ userCheckout, setUserCheckout ] = useState([])

	const fetchData = () => {
		fetch('https://agribusinessecommerce.herokuapp.com/checkouts/view', {
			method: 'GET',
			headers: {
				'Content-Type' : 'application/json',
				Authorization: `Bearer ${ localStorage.getItem('accessToken') }`
			}
		})
		.then(res => res.json())
		.then(data => {
			setUserCheckout(data)
		})
	}
	useEffect(() => {
		fetchData()
	}, [])
	const { user } = useContext(UserContext);
	return(
			// <h1>Hello</h1>
			<HistoryView productData={userCheckout} fetchData={fetchData}/>

		)
}