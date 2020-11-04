import produce, { Draft } from 'immer'
import { CartActions } from './actionCreators'
import { CartState } from './contracts/state'
import { CartActionsType } from './contracts/actionTypes'

const initialCartState: CartState = {
	cart: [],
}
export const cartReducer = produce((draft: Draft<CartState>, action: CartActions) => {
	switch (action.type) {
		case CartActionsType.SET_TO_CART:
			draft.cart = action.payload
			break

		default:
			break
	}
}, initialCartState)
