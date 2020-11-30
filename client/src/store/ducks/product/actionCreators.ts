import {
	DeleteProductItemActionInterface,
	FetchProductsActionInterface,
	GetFilterActionInterface,
	GetProductActionInterface,
	ProductActionsType,
	SetFilterActionInterface,
	SetFilterDataActionInterface,
	SetProductActionInterface,
	SetProductFormDataActionInterface,
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
export const getProductsFilter = (payload: FilterData | null): GetFilterActionInterface => ({
	type: ProductActionsType.GET_FILTER,
	payload,
})
export const setProductsFilter = (payload: FilterData | null): SetFilterActionInterface => ({
	type: ProductActionsType.SET_FILTER,
	payload,
})
export const setProductFormData = (payload: IProduct | null): SetProductFormDataActionInterface => ({
	type: ProductActionsType.SET_PRODUCT_FORM_DATA,
	payload,
})
export const deleteProduct = (id: string): DeleteProductItemActionInterface => ({
	type: ProductActionsType.DELETE_PRODUCT,
	id,
})

export type ProductsActions =
	| DeleteProductItemActionInterface
	| SetProductFormDataActionInterface
	| SetFilterActionInterface
	| GetFilterActionInterface
	| SetFilterDataActionInterface
	| SetProductActionInterface
	| GetProductActionInterface
	| SetProductsActionInterface
	| FetchProductsActionInterface
	| SetProductsLoadingStateActionInterface
