import { FetchProductsActionInterface, ProductActionsType, SetProductsActionInterface, SetProductsLoadingStateActionInterface } from './contracts/actionTypes'
import { LoadingState, ProductsState } from './contracts/state'

export const setProducts = (payload: ProductsState['items']): SetProductsActionInterface => ({
	type: ProductActionsType.SET_PRODUCTS,
	payload,
})
export const fetchProducts = (): FetchProductsActionInterface => ({
	type: ProductActionsType.FETCH_PRODUCTS,
})
export const setProductsLoadingState = (payload: LoadingState): SetProductsLoadingStateActionInterface => ({
	type: ProductActionsType.SET_LOADING_STATE,
	payload,
})

export type ProductsActions = SetProductsActionInterface | FetchProductsActionInterface | SetProductsLoadingStateActionInterface
