import * as React         from 'react'
import { useSelector }    from 'react-redux'
import { RootState }      from '../../store/store'
import { ProductList }    from '../../components/products/ProductList/ProductList'
import { LoadingState }   from '../../store/ducks/product/contracts/state'
import { Loader }         from '../../components/Loader/Loader'
import { selectProducts } from '../../store/ducks/product/selectors'

export const Catalog: React.FC = () => {
	const { loadingState, items } = useSelector(selectProducts)

	if (loadingState === LoadingState.LOADING) {
		return <Loader />
	}

	return (
		<>
			<section className="section">
				<div className="container">
					<h2 className="h1">Catalog</h2>
					<ProductList products={items} isHorizontal={true} />
				</div>
			</section>
		</>
	)
}
