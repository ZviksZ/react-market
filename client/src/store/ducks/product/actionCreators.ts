import {
	AddToCartActionInterface,
	FetchProductsActionInterface, GetCartActionInterface,
	GetProductActionInterface,
	ProductActionsType,
	SetProductActionInterface,
	SetProductsActionInterface,
	SetProductsLoadingStateActionInterface, SetToCartActionInterface,
} from './contracts/actionTypes'
import { CartProduct, IProduct, LoadingState, ProductsState } from './contracts/state'

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
export const getCart = (): GetCartActionInterface => ({
	type: ProductActionsType.GET_CART,
})
export const getProduct = (id: string): GetProductActionInterface => ({
	type: ProductActionsType.GET_PRODUCT,
	id,
})
export const setProductsLoadingState = (payload: LoadingState): SetProductsLoadingStateActionInterface => ({
	type: ProductActionsType.SET_LOADING_STATE,
	payload,
})
export const addProductToCart = (item: IProduct): AddToCartActionInterface => ({
	type: ProductActionsType.ADD_TO_CART,
	item,
})
export const setProductToCart = (payload: CartProduct[]): SetToCartActionInterface => ({
	type: ProductActionsType.SET_TO_CART,
	payload,
})

export type ProductsActions =
	| SetProductActionInterface
	| GetProductActionInterface
	| SetProductsActionInterface
	| FetchProductsActionInterface
	| SetProductsLoadingStateActionInterface
	| AddToCartActionInterface
	| SetToCartActionInterface
