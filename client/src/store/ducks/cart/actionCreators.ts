import { IProduct } from '../product/contracts/state'
import {
	AddToCartActionInterface,
	GetCartActionInterface,
	CartActionsType,
	SetToCartActionInterface,
	DecreaseProductCountActionInterface,
	IncreaseProductCountActionInterface,
	ClearCartActionInterface, DeleteProductActionInterface,
} from './contracts/actionTypes'
import { CartProduct } from './contracts/state'

export const getCart = (): GetCartActionInterface => ({
	type: CartActionsType.GET_CART,
})
export const addProductToCart = (item: IProduct): AddToCartActionInterface => ({
	type: CartActionsType.ADD_TO_CART,
	item,
})
export const setProductToCart = (payload: CartProduct[]): SetToCartActionInterface => ({
	type: CartActionsType.SET_TO_CART,
	payload,
})
export const decreaseProductCount = (id: string): DecreaseProductCountActionInterface => ({
	type: CartActionsType.DECREASE_COUNT,
	id,
})
export const increaseProductCount = (id: string): IncreaseProductCountActionInterface => ({
	type: CartActionsType.INCREASE_COUNT,
	id,
})
export const clearCart = (): ClearCartActionInterface => ({
	type: CartActionsType.CLEAR_CART,
})
export const deleteCartProduct = (id: string): DeleteProductActionInterface => ({
	type: CartActionsType.DELETE_CART_PRODUCT,
	id,
})

export type CartActions =
	| ClearCartActionInterface
	| GetCartActionInterface
	| AddToCartActionInterface
	| SetToCartActionInterface
	| DecreaseProductCountActionInterface
	| IncreaseProductCountActionInterface
