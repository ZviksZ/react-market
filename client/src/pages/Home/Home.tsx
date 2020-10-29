import * as React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProductList } from '../../components/products/ProductList/ProductList'
import { fetchProducts } from '../../store/ducks/product/actionCreators'
import { RootState } from '../../store/store'

export const Home: React.FC = () => {
	const dispatch = useDispatch()
	const products = useSelector((state: RootState) => state.products.items)

	useEffect(() => {
		dispatch(fetchProducts())
	}, [dispatch])

	return (
		<>
			<div className="container">
				<h2 className="h2">Best sellers</h2>
				<ProductList maxCount={4} products={products} />
			</div>
		</>
	)
}
