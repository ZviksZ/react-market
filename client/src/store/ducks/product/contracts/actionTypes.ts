import { Action } from 'redux'
import { IProduct, LoadingState, ProductsState } from './state'

export enum ProductActionsType {
	SET_PRODUCTS = 'product/SET_PRODUCTS',
	SET_PRODUCT = 'product/SET_PRODUCT',
	FETCH_PRODUCTS = 'product/FETCH_PRODUCTS',
	SET_LOADING_STATE = 'product/SET_LOADING_STATE',
	ADD_TO_CART = 'product/ADD_TO_CART',
	GET_PRODUCT = 'product/GET_PRODUCT',
}

export interface SetProductsActionInterface extends Action<ProductActionsType> {
	type: ProductActionsType.SET_PRODUCTS
	payload: ProductsState['items']
}
export interface SetProductActionInterface extends Action<ProductActionsType> {
	type: ProductActionsType.SET_PRODUCT
	payload: IProduct | null
}
export interface FetchProductsActionInterface extends Action<ProductActionsType> {
	type: ProductActionsType.FETCH_PRODUCTS
}
export interface GetProductActionInterface extends Action<ProductActionsType> {
	type: ProductActionsType.GET_PRODUCT,
	id: string
}
export interface SetProductsLoadingStateActionInterface extends Action<ProductActionsType> {
	type: ProductActionsType.SET_LOADING_STATE
	payload: LoadingState
}
export interface AddToCartActionInterface extends Action<ProductActionsType> {
	type: ProductActionsType.ADD_TO_CART
	payload: IProduct
}
