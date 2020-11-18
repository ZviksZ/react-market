import { call, put, takeLatest } from 'redux-saga/effects'
import { setFilterDate, setProduct, setProducts, setProductsFilter, setProductsLoadingState } from './actionCreators'
import { GetProductActionInterface, ProductActionsType } from './contracts/actionTypes'
import { FilterData, IProduct, LoadingState } from './contracts/state'
import { ProductsApi } from '../../../services/api/productsApi'
import { getChoosenFilter, getFilterData } from '../../../services/helpers/helpers'

export function* fetchProductsRequest() {
	try {
		const items = yield call(ProductsApi.fetchProducts)

		const sortedItems = yield items.sort((a: IProduct, b: IProduct) => b.rating - a.rating)

		const itemsFilterData = yield getFilterData(sortedItems)

		/*itemsFilterData*/

		yield put(setProducts(sortedItems))
		yield put(setFilterDate(itemsFilterData))
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

export function* getProductFilterRequest({ payload }: any) {
	if (payload) {
		const data = yield getChoosenFilter(payload)

		yield put(setProductsFilter(data))
	} else {
		yield put(setProductsFilter(null))
	}
}

export function* productsSaga() {
	yield takeLatest(ProductActionsType.FETCH_PRODUCTS, fetchProductsRequest)
	yield takeLatest(ProductActionsType.GET_PRODUCT, getProductRequest)
	yield takeLatest(ProductActionsType.GET_FILTER, getProductFilterRequest)
}
