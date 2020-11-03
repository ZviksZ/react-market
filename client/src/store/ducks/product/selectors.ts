import { RootState } from '../../store'
import { IProduct, ProductsState } from './contracts/state'

export const selectProducts = (state: RootState): ProductsState => state.products

export const selectSingleProductData = (state: RootState): IProduct | null => selectProducts(state).singleProduct
