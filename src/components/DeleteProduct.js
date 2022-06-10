import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

export default function DeleteProduct({ product, fetchData }) {

	const deleteItem = (productId) => {
		Swal.fire({
		  title: 'Are you sure?',
		  text: "You won't be able to revert this!",
		  icon: 'warning',
		  showCancelButton: true,
		  confirmButtonColor: '#3085d6',
		  cancelButtonColor: '#d33',
		  confirmButtonText: 'Delete'
		}).then((result) => {
		  if (result.isConfirmed) {
			fetch(`https://agribusinessecommerce.herokuapp.com/${ productId }/delete`,{
				method: 'DELETE',
				headers: {
					Authorization: `Bearer ${ localStorage.getItem('accessToken')}`
				}
			})
			.then(res => res.json())
			.then(data => {
				if(data){
					Swal.fire({
						title: 'Delete Success',
						icon: 'success',
						text: 'product Successfully Deleted'
					})
					fetchData()
				}else{
					Swal.fire({
						title: 'error',
						icon: 'error',
						text: 'Something went wrong'
					})
					fetchData()
				}
			})
		    
		  }
		})

	}
	return(
		<Button variant="danger" size="sm" onClick={() => deleteItem(product)}>DELETE</Button>
		)
}
