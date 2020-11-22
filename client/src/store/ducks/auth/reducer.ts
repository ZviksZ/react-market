import produce, { Draft }  from 'immer'
import { AuthState }       from './contracts/state'
import { AuthActions }     from './actionCreators'
import { AuthActionsType } from './contracts/actionTypes'

const initialAuthState: AuthState = {
	user: null,
}
export const authReducer = produce((draft: Draft<AuthState>, action: AuthActions) => {
	switch (action.type) {
		case AuthActionsType.SET_USER:
			draft.user = action.payload
			break
		default:
			break
	}
}, initialAuthState)
