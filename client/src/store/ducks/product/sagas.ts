import { call, put, takeLatest } from 'redux-saga/effects'
import { setProducts, setProductsLoadingState } from './actionCreators'
import { ProductActionsType } from './contracts/actionTypes'
import { LoadingState } from './contracts/state'
import { ProductsApi } from '../../../services/api/productsApi'

export function* fetchTweetsRequest() {
	try {
		const items = yield call(ProductsApi.fetchProducts)
		console.log(items)
		yield put(setProducts(items))
	} catch (error) {
		yield put(setProductsLoadingState(LoadingState.ERROR))
	}
}

export function* productsSaga() {
	yield takeLatest(ProductActionsType.FETCH_PRODUCTS, fetchTweetsRequest)
}
