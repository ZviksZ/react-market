import * as React         from 'react'
import { useSelector }    from 'react-redux'
import { ProductList }    from '../../components/products/ProductList/ProductList'
import { NavLink }        from 'react-router-dom'
import { Button }         from '@material-ui/core'
import { Loader }         from '../../components/Loader/Loader'
import { LoadingState }   from '../../store/ducks/product/contracts/state'
import { selectProducts } from '../../store/ducks/product/selectors'

export const Home: React.FC = () => {
	const { loadingState, items } = useSelector(selectProducts)

	if (loadingState === LoadingState.LOADING) {
		return <Loader />
	}

	return (
		<>
			<section className="section">
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
			</section>
		</>
	)
}
