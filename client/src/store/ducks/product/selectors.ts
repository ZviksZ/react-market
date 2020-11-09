import { RootState } from '../../store'
import { IProduct, ProductsState } from './contracts/state'
import { createSelector } from 'reselect'
import { selectCart } from '../cart/selectors'

export const selectProducts = (state: RootState): ProductsState => state.products
export const selectProductsItems = (state: RootState): IProduct[] => state.products.items

export const selectSingleProductData = (state: RootState): IProduct | null => selectProducts(state).singleProduct

export const selectProductsFilterItems = createSelector(selectProductsItems, (items: IProduct[]) => {
	return items
})
