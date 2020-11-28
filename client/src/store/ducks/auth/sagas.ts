import { put, takeLatest, select, call } from 'redux-saga/effects'
import { AuthActionsType, LoginActionInterface, RegisterActionInterface } from './contracts/actionTypes'
import { AuthApi } from '../../../services/api/authApi'
import { setGlobalMessage, setUser } from './actionCreators'
import { Cookie } from '../../../services/helpers/cookie'

export function* loginRequest({ payload }: LoginActionInterface) {
	try {
		const user = yield call(AuthApi.login, payload)

		const jsonResponse = JSON.stringify(user.token)
		Cookie.setCookie('token', jsonResponse, { expires: 2147483647 })

		yield put(setUser(user))
		yield put(setGlobalMessage({ text: 'Login is successful', type: 'success' }))
	} catch (error) {
		yield put(setGlobalMessage({ text: 'Login error. Try again', type: 'error' }))
	}
}
export function* registerRequest({ payload }: RegisterActionInterface) {
	try {
		const user = yield call(AuthApi.register, payload)

		yield put(setGlobalMessage({ text: 'Register is successful. Login now.', type: 'success' }))
	} catch (error) {
		yield put(setGlobalMessage({ text: 'Register error. Try again', type: 'error' }))
	}
}
export function* getMeRequest() {
	try {
		const cookies = Cookie.getCookie('token')
		const token = JSON.parse(cookies + '')

		if (token) {
			const user = yield call(AuthApi.getMe, token)

			yield put(setUser(user))
		}
	} catch (error) {}
}
export function* logoutRequest() {
	try {
		Cookie.deleteCookie('token')

		yield put(setUser(null))
	} catch (error) {}
}

export function* authSaga() {
	yield takeLatest(AuthActionsType.LOGIN, loginRequest)
	yield takeLatest(AuthActionsType.REGISTER, registerRequest)
	yield takeLatest(AuthActionsType.GET_ME, getMeRequest)
	yield takeLatest(AuthActionsType.LOGOUT, logoutRequest)
}
