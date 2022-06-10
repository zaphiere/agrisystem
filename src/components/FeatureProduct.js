import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

export default function FeatureProduct({ product, isFeature, fetchData }) {

	const featureToggle = (productId) => {
		fetch (`http://localhost:4000/products/${ productId }/removefeature` ,{
			method: 'PUT',
			headers: {
				Authorization: `Bearer ${ localStorage.getItem('accessToken') }`
			}
		})
		.then(res => res.json())
		.then(data => {
			if(data) {
				Swal.fire({
					title: 'Confirmed',
					icon: 'success',
					text: 'Product successfully Featured'
				})
				fetchData()
			}else {
				Swal.fire({
					title: 'error',
					icon: 'error',
					text: 'Something went wrong'
				})
				fetchData()
			}
		})
	}

	const unFeatureToggle = (productId) => {
		fetch (`http://localhost:4000/products/${ productId }/featuring` ,{
			method: 'PUT',
			headers: {
				Authorization: `Bearer ${ localStorage.getItem('accessToken') }`
			}
		})
		.then(res => res.json())
		.then(data => {
			if(data) {
				Swal.fire({
					title: 'Confirmed',
					icon: 'success',
					text: 'Product no longer featured'
				})
				fetchData()
			}else {
				Swal.fire({
					title: 'error',
					icon: 'error',
					text: 'Something went wrong'
				})
				fetchData()
			}
		})
	}

	return(
		<>
			{isFeature  ?
				<Button variant="danger" size="sm" onClick={() => featureToggle(product)}>Unfeature</Button>

				:

				<Button variant="success" size="sm" onClick={() => unFeatureToggle(product)}>Feature</Button>

			}
		</>
		)
}