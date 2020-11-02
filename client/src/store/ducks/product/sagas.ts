import { call, put, takeLatest, select } from 'redux-saga/effects'
import { setProduct, setProducts, setProductsLoadingState, setProductToCart } from './actionCreators'
import { AddToCartActionInterface, GetProductActionInterface, ProductActionsType } from './contracts/actionTypes'
import { CartProduct, LoadingState } from './contracts/state'
import { ProductsApi } from '../../../services/api/productsApi'
import { RootState } from '../../store'
import { Cookie } from '../../../services/helpers/cookie'

export function* fetchProductsRequest() {
	try {
		const items = yield call(ProductsApi.fetchProducts)
		yield put(setProducts(items))
	} catch (error) {
		yield put(setProductsLoadingState(LoadingState.ERROR))
	}
}
export function* getProductRequest({ id }: GetProductActionInterface) {
	try {
		const product = yield call(ProductsApi.fetchProductData, id)
		yield put(setProduct(product[0]))
	} catch (error) {
		yield put(setProductsLoadingState(LoadingState.ERROR))
	}
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

		let cart = yield select((state: RootState) => state.products.cart)
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

		console.log(cart)
		yield put(setProductToCart(cart))
	} catch (error) {
		yield put(setProductsLoadingState(LoadingState.ERROR))
	}
}
export function* getCartRequest() {
	try {
		const cookies = Cookie.getCookie('productsCart')
		const data = JSON.parse(cookies + '')

		console.log(data)
		if (data) {
			yield put(setProductToCart(data))
		}
	} catch (error) {
		yield put(setProductsLoadingState(LoadingState.ERROR))
	}
}
export function* productsSaga() {
	yield takeLatest(ProductActionsType.FETCH_PRODUCTS, fetchProductsRequest)
	yield takeLatest(ProductActionsType.GET_PRODUCT, getProductRequest)
	yield takeLatest(ProductActionsType.ADD_TO_CART, addToCartRequest)
	yield takeLatest(ProductActionsType.GET_CART, getCartRequest)
}
