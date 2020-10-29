import { all } from 'redux-saga/effects'
import { productsSaga } from './ducks/product/sagas'

export default function* rootSaga() {
	yield all([productsSaga()])
}
