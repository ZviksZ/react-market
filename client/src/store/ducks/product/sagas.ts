import { call, put, takeLatest, select } from 'redux-saga/effects'
import { setProduct, setProducts, setProductsLoadingState } from './actionCreators'
import { GetProductActionInterface, ProductActionsType } from './contracts/actionTypes'
import { LoadingState } from './contracts/state'
import { ProductsApi } from '../../../services/api/productsApi'

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

export function* productsSaga() {
	yield takeLatest(ProductActionsType.FETCH_PRODUCTS, fetchProductsRequest)
	yield takeLatest(ProductActionsType.GET_PRODUCT, getProductRequest)
}
