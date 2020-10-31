import * as React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProductList } from '../../components/products/ProductList/ProductList'
import { fetchProducts, setProducts } from '../../store/ducks/product/actionCreators'
import { RootState } from '../../store/store'
import { NavLink } from 'react-router-dom'
import { Button } from '@material-ui/core'
import { Loader } from '../../components/Loader/Loader'
import { LoadingState } from '../../store/ducks/product/contracts/state'

export const Home: React.FC = () => {
	const { loadingState, items } = useSelector((state: RootState) => state.products)

	if (loadingState === LoadingState.LOADING) {
		return <Loader />
	}

	return (
		<>
			<div className="section">
				<div className="container">
					<h2 className="h2">Best sellers</h2>
					<ProductList maxCount={4} products={items} />
					<div className="text-center">
						<NavLink to={'/catalog'}>
							<Button variant="contained" size="medium" color="secondary">
								Go to catalog
							</Button>
						</NavLink>
					</div>
				</div>
			</div>
		</>
	)
}
