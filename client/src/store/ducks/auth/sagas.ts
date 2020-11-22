import { put, takeLatest, select, call } from 'redux-saga/effects'
import { AuthActionsType, LoginActionInterface, RegisterActionInterface } from './contracts/actionTypes'
import { AuthApi } from '../../../services/api/authApi'
import { setUser } from './actionCreators'

export function* loginRequest({ payload }: LoginActionInterface) {
	try {
		const user = yield call(AuthApi.login, payload)

		yield put(setUser(user))
	} catch (error) {}
}

export function* registerRequest({ payload }: RegisterActionInterface) {
	try {
		const user = yield call(AuthApi.register, payload)

		yield put(setUser(user))
	} catch (error) {}
}

export function* authSaga() {
	yield takeLatest(AuthActionsType.LOGIN, loginRequest)
	yield takeLatest(AuthActionsType.REGISTER, registerRequest)
}
