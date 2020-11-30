import * as React from 'react'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getProduct, setProduct } from '../../store/ducks/product/actionCreators'
import { ProductDetail } from '../../components/products/ProductDetail/ProductDetail'
import { selectSingleProductData } from '../../store/ducks/product/selectors'

export const CatalogDetail: React.FC = () => {
	const dispatch = useDispatch()
	const params: { id?: string } = useParams()
	const id = params.id
	const singleProduct = useSelector(selectSingleProductData)

	useEffect(() => {
		if (id) {
			dispatch(getProduct(id))
		}

		return () => {
			dispatch(setProduct(null))
		}
	}, [dispatch, id])

	return (
		<>
			<section className="section">
				<div className="container">
					<ProductDetail item={singleProduct} />
				</div>
			</section>
		</>
	)
}
