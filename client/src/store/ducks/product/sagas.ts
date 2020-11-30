import { call, put, takeLatest } from 'redux-saga/effects'
import { setFilterDate, setProduct, setProducts, setProductsFilter, setProductsLoadingState } from './actionCreators'
import { DeleteProductItemActionInterface, GetProductActionInterface, ProductActionsType } from './contracts/actionTypes'
import { IProduct, LoadingState } from './contracts/state'
import { ProductsApi } from '../../../services/api/productsApi'
import { getChoosenFilter, getFilterData } from '../../../services/helpers/helpers'
import { setGlobalMessage } from '../auth/actionCreators'

export function* fetchProductsRequest() {
	try {
		const items = yield call(ProductsApi.fetchProducts)

		const sortedItems = yield items.sort((a: IProduct, b: IProduct) => b.rating - a.rating)

		const itemsFilterData = yield getFilterData(sortedItems)

		yield put(setProducts(sortedItems))
		yield put(setFilterDate(itemsFilterData))
	} catch (error) {
		yield put(setProductsLoadingState(LoadingState.ERROR))
	}
}

export function* getProductRequest({ id }: GetProductActionInterface) {
	try {
		const product = yield call(ProductsApi.fetchProductData, id)

		yield put(setProduct(product))
	} catch (error) {
		yield put(setProductsLoadingState(LoadingState.ERROR))
	}
}

export function* getProductFilterRequest({ payload }: any) {
	if (payload) {
		const data = yield getChoosenFilter(payload)

		yield put(setProductsFilter(data))
	} else {
		yield put(setProductsFilter(null))
	}
}

export function* deleteProductRequest({ id }: DeleteProductItemActionInterface) {
	try {
		yield call(ProductsApi.deleteProduct, id)
		yield call(fetchProductsRequest)

		yield put(setGlobalMessage({ text: `Product ${id} has been removed`, type: 'success' }))
	} catch (error) {
		yield put(setGlobalMessage({ text: 'Deleting error. Try again', type: 'error' }))
	}
}

export function* productsSaga() {
	yield takeLatest(ProductActionsType.FETCH_PRODUCTS, fetchProductsRequest)
	yield takeLatest(ProductActionsType.GET_PRODUCT, getProductRequest)
	yield takeLatest(ProductActionsType.GET_FILTER, getProductFilterRequest)
	yield takeLatest(ProductActionsType.DELETE_PRODUCT, deleteProductRequest)
}
