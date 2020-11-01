import * as React from 'react'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getProduct, setProduct } from '../../store/ducks/product/actionCreators'
import { RootState } from '../../store/store'
import { ProductDetail } from '../../components/products/ProductDetail/ProductDetail'

export const CatalogDetail: React.FC = () => {
	const dispatch = useDispatch()
	const params: { id?: string } = useParams()
	const id = params.id
	const singleProduct = useSelector((state: RootState) => state.products.singleProduct)

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
			<div className="container">
				<ProductDetail item={singleProduct} />
			</div>
		</>
	)
}
