import {
	FetchProductsActionInterface,
	GetProductActionInterface,
	ProductActionsType,
	SetFilterDataActionInterface,
	SetProductActionInterface,
	SetProductsActionInterface,
	SetProductsLoadingStateActionInterface,
} from './contracts/actionTypes'
import { FilterData, IProduct, LoadingState, ProductsState } from './contracts/state'

export const setProducts = (payload: ProductsState['items']): SetProductsActionInterface => ({
	type: ProductActionsType.SET_PRODUCTS,
	payload,
})
export const setProduct = (payload: IProduct | null): SetProductActionInterface => ({
	type: ProductActionsType.SET_PRODUCT,
	payload,
})
export const setFilterDate = (payload: FilterData | null): SetFilterDataActionInterface => ({
	type: ProductActionsType.SET_FILTER_DATA,
	payload,
})
export const fetchProducts = (): FetchProductsActionInterface => ({
	type: ProductActionsType.FETCH_PRODUCTS,
})
export const getProduct = (id: string): GetProductActionInterface => ({
	type: ProductActionsType.GET_PRODUCT,
	id,
})
export const setProductsLoadingState = (payload: LoadingState): SetProductsLoadingStateActionInterface => ({
	type: ProductActionsType.SET_LOADING_STATE,
	payload,
})

export type ProductsActions =
	| SetFilterDataActionInterface
	| SetProductActionInterface
	| GetProductActionInterface
	| SetProductsActionInterface
	| FetchProductsActionInterface
	| SetProductsLoadingStateActionInterface
