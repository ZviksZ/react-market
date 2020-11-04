import { put, takeLatest, select } from 'redux-saga/effects'
import { setProductToCart } from './actionCreators'
import { AddToCartActionInterface, CartActionsType, DecreaseProductCountActionInterface, DeleteProductActionInterface, IncreaseProductCountActionInterface } from './contracts/actionTypes'
import { CartProduct } from './contracts/state'
import { RootState } from '../../store'
import { Cookie } from '../../../services/helpers/cookie'

export function* getCartRequest() {
	try {
		const cookies = Cookie.getCookie('productsCart')
		const data = JSON.parse(cookies + '')

		if (data) {
			yield put(setProductToCart(data))
		}
	} catch (error) {}
}

export function* addToCartRequest({ item }: AddToCartActionInterface) {
	try {
		const data = {
			_id: item._id,
			image: item.image,
			name: item.name,
			price: item.price,
			count: 1,
		}
		let isInCart = false

		let cart = yield select((state: RootState) => state.cart.cart)
		cart = cart.map((cartItem: CartProduct) => {
			if (cartItem._id === item._id) {
				isInCart = true
				return { ...cartItem, count: cartItem.count + 1 }
			}
			return cartItem
		})
		if (!isInCart) {
			cart.push(data)
		}

		const jsonResponse = JSON.stringify(cart)
		Cookie.setCookie('productsCart', jsonResponse, { expires: 2147483647 })

		yield put(setProductToCart(cart))
	} catch (error) {}
}

export function* increaseCountRequest({ id }: IncreaseProductCountActionInterface) {
	try {
		let cart = yield select((state: RootState) => state.cart.cart)
		cart = cart.map((cartItem: CartProduct) => {
			if (cartItem._id === id) {
				return { ...cartItem, count: cartItem.count + 1 }
			}
			return cartItem
		})
		const jsonResponse = JSON.stringify(cart)
		Cookie.setCookie('productsCart', jsonResponse, { expires: 2147483647 })

		yield put(setProductToCart(cart))
	} catch (error) {}
}

// eslint-disable-next-line
export function* decreaseCountRequest({ id }: DecreaseProductCountActionInterface) {
	try {
		let cart = yield select((state: RootState) => state.cart.cart)

		cart = cart
			.map((cartItem: CartProduct) => {
				if (cartItem._id === id) {
					if (cartItem.count > 1) {
						return { ...cartItem, count: cartItem.count - 1 }
					}
				} else {
					return cartItem
				}
			})
			.filter((cartItem: CartProduct) => cartItem !== undefined)

		const jsonResponse = JSON.stringify(cart)
		Cookie.setCookie('productsCart', jsonResponse, { expires: 2147483647 })

		yield put(setProductToCart(cart))
	} catch (error) {}
}

export function* clearCartRequest() {
	try {
		const jsonResponse = JSON.stringify([])
		Cookie.setCookie('productsCart', jsonResponse, { expires: 2147483647 })

		yield put(setProductToCart([]))
	} catch (error) {}
}

export function* deleteCartProductRequest({ id }: DeleteProductActionInterface) {
	try {
		let cart = yield select((state: RootState) => state.cart.cart)
		cart = cart.filter((cartItem: CartProduct) => cartItem._id !== id)

		const jsonResponse = JSON.stringify(cart)
		Cookie.setCookie('productsCart', jsonResponse, { expires: 2147483647 })

		yield put(setProductToCart(cart))
	} catch (error) {}
}

export function* cartSaga() {
	yield takeLatest(CartActionsType.ADD_TO_CART, addToCartRequest)
	yield takeLatest(CartActionsType.GET_CART, getCartRequest)
	yield takeLatest(CartActionsType.INCREASE_COUNT, increaseCountRequest)
	yield takeLatest(CartActionsType.DECREASE_COUNT, decreaseCountRequest)
	yield takeLatest(CartActionsType.CLEAR_CART, clearCartRequest)
	yield takeLatest(CartActionsType.DELETE_CART_PRODUCT, deleteCartProductRequest)
}
