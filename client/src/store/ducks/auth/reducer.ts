import produce, { Draft } from 'immer'
import { AuthState } from './contracts/state'
import { AuthActions } from './actionCreators'

const initialAuthState: AuthState = {
	user: null,
}
export const authReducer = produce((draft: Draft<AuthState>, action: AuthActions) => {
	switch (action.type) {
		/*case CartActionsType.SET_TO_CART:
			draft.cart = action.payload
			break*/

		default:
			break
	}
}, initialAuthState)
