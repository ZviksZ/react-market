import {
	AddToCartActionInterface,
	FetchProductsActionInterface,
	GetProductActionInterface,
	ProductActionsType, SetProductActionInterface,
	SetProductsActionInterface,
	SetProductsLoadingStateActionInterface,
} from './contracts/actionTypes'
import { IProduct, LoadingState, ProductsState } from './contracts/state'

export const setProducts = (payload: ProductsState['items']): SetProductsActionInterface => ({
	type: ProductActionsType.SET_PRODUCTS,
	payload,
})
export const setProduct = (payload: IProduct | null): SetProductActionInterface => ({
	type: ProductActionsType.SET_PRODUCT,
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
export const addProductToCart = (payload: IProduct): AddToCartActionInterface => ({
	type: ProductActionsType.ADD_TO_CART,
	payload,
})

export type ProductsActions = SetProductActionInterface | GetProductActionInterface | SetProductsActionInterface | FetchProductsActionInterface | SetProductsLoadingStateActionInterface | AddToCartActionInterface
