import { Action } from 'redux'
import { FilterData, IProduct, LoadingState, ProductsState } from './state'

export enum ProductActionsType {
	SET_PRODUCTS = 'product/SET_PRODUCTS',
	SET_PRODUCT = 'product/SET_PRODUCT',
	FETCH_PRODUCTS = 'product/FETCH_PRODUCTS',
	SET_LOADING_STATE = 'product/SET_LOADING_STATE',
	GET_PRODUCT = 'product/GET_PRODUCT',
	SET_FILTER_DATA = 'product/SET_FILTER_DATA',
	GET_FILTER = 'product/GET_FILTER',
	SET_FILTER = 'product/SET_FILTER',
	SET_PRODUCT_FORM_DATA = 'product/SET_PRODUCT_FORM_DATA',
	UPDATE_PRODUCT = 'product/UPDATE_PRODUCT',
	DELETE_PRODUCT = 'product/DELETE_PRODUCT',
	CREATE_PRODUCT = 'product/CREATE_PRODUCT',
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
	type: ProductActionsType.GET_PRODUCT
	id: string
}
export interface SetProductsLoadingStateActionInterface extends Action<ProductActionsType> {
	type: ProductActionsType.SET_LOADING_STATE
	payload: LoadingState
}
export interface SetFilterDataActionInterface extends Action<ProductActionsType> {
	type: ProductActionsType.SET_FILTER_DATA
	payload: FilterData | null
}

export interface GetFilterActionInterface extends Action<ProductActionsType> {
	type: ProductActionsType.GET_FILTER
	payload: FilterData | null
}
export interface SetFilterActionInterface extends Action<ProductActionsType> {
	type: ProductActionsType.SET_FILTER
	payload: FilterData | null
}
export interface SetProductFormDataActionInterface extends Action<ProductActionsType> {
	type: ProductActionsType.SET_PRODUCT_FORM_DATA
	payload: IProduct | null
}
export interface CreateProductActionInterface extends Action<ProductActionsType> {
	type: ProductActionsType.CREATE_PRODUCT
	data: any
}
export interface UpdateProductActionInterface extends Action<ProductActionsType> {
	type: ProductActionsType.UPDATE_PRODUCT
	id: string
	data: any
	isImageUpdated: boolean
}
export interface DeleteProductItemActionInterface extends Action<ProductActionsType> {
	type: ProductActionsType.DELETE_PRODUCT
	id: string
}
