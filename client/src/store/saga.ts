import { all } from 'redux-saga/effects'
import { productsSaga } from './ducks/product/sagas'
import { cartSaga } from './ducks/cart/sagas'

export default function* rootSaga() {
	yield all([productsSaga(), cartSaga()])
}
