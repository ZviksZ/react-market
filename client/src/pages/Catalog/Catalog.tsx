import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { ProductList } from '../../components/products/ProductList/ProductList'
import { useEffect } from 'react'
import { fetchProducts } from '../../store/ducks/product/actionCreators'

export const Catalog: React.FC = () => {
	const dispatch = useDispatch()
	const products = useSelector((state: RootState) => state.products.items)

	console.log(products)

	useEffect(() => {
		dispatch(fetchProducts())
	}, [dispatch])

	return (
		<>
			<div className="container">
				<h2 className="h1">Catalog</h2>
				<ProductList products={products} />
			</div>
		</>
	)
}
