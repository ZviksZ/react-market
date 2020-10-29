import { Action } from 'redux'
import { LoadingState, ProductsState } from './state'

export enum ProductActionsType {
	SET_PRODUCTS = 'product/SET_PRODUCTS',
	FETCH_PRODUCTS = 'product/FETCH_PRODUCTS',
	SET_LOADING_STATE = 'product/SET_LOADING_STATE',
}

export interface SetProductsActionInterface extends Action<ProductActionsType> {
	type: ProductActionsType.SET_PRODUCTS
	payload: ProductsState['items']
}
export interface FetchProductsActionInterface extends Action<ProductActionsType> {
	type: ProductActionsType.FETCH_PRODUCTS
}
export interface SetProductsLoadingStateActionInterface extends Action<ProductActionsType> {
	type: ProductActionsType.SET_LOADING_STATE
	payload: LoadingState
}
