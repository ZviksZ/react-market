import { Action } from 'redux'
import { IProduct } from '../../product/contracts/state'
import { CartProduct } from './state'

export enum CartActionsType {
	SET_TO_CART = 'product/SET_TO_CART',
	ADD_TO_CART = 'product/ADD_TO_CART',
	GET_CART = 'product/GET_CART',
	DECREASE_COUNT = 'product/DECREASE_COUNT',
	INCREASE_COUNT = 'product/INCREASE_COUNT',
	CLEAR_CART = 'product/CLEAR_CART',
	DELETE_CART_PRODUCT = 'product/DELETE_CART_PRODUCT',
}

export interface AddToCartActionInterface extends Action<CartActionsType> {
	type: CartActionsType.ADD_TO_CART
	item: IProduct
}
export interface GetCartActionInterface extends Action<CartActionsType> {
	type: CartActionsType.GET_CART
}
export interface SetToCartActionInterface extends Action<CartActionsType> {
	type: CartActionsType.SET_TO_CART
	payload: CartProduct[]
}
export interface DecreaseProductCountActionInterface extends Action<CartActionsType> {
	type: CartActionsType.DECREASE_COUNT
	id: string
}
export interface IncreaseProductCountActionInterface extends Action<CartActionsType> {
	type: CartActionsType.INCREASE_COUNT
	id: string
}
export interface ClearCartActionInterface extends Action<CartActionsType> {
	type: CartActionsType.CLEAR_CART
}
export interface DeleteProductActionInterface extends Action<CartActionsType> {
	type: CartActionsType.DELETE_CART_PRODUCT
	id: string
}
