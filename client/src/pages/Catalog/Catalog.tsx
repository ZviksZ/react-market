import * as React from 'react'
import { useSelector } from 'react-redux'
import { ProductList } from '../../components/products/ProductList/ProductList'
import { LoadingState } from '../../store/ducks/product/contracts/state'
import { Loader } from '../../components/Loader/Loader'
import { selectProducts, selectProductsFilterItems } from '../../store/ducks/product/selectors'
import { ProductFilter } from '../../components/products/ProductFilter/ProductFilter'
import { ModalBlock } from '../../components/ModalBlock/ModalBlock'
import Button from '@material-ui/core/Button'
import { useState } from 'react'

export const Catalog: React.FC = () => {
	const { loadingState, items } = useSelector(selectProducts)
	const catalogFilterItems = useSelector(selectProductsFilterItems)

	const [openFilter, setOpenFilter] = useState<boolean>(false)

	if (loadingState === LoadingState.LOADING) {
		return <Loader />
	}

	return (
		<>
			<section className="section">
				<div className="container">
					<div className="header-with-filter">
						<h1 className="h1">Catalog</h1>
						<Button variant="contained" size="small" color="secondary" onClick={() => setOpenFilter(true)}>
							filter
						</Button>
					</div>
					<ProductList products={catalogFilterItems} isHorizontal={true} />
				</div>
				<ModalBlock visible={openFilter} onClose={() => setOpenFilter(false)} title="Filter products">
					<ProductFilter onClose={() => setOpenFilter(false)} />
				</ModalBlock>
			</section>
		</>
	)
}
