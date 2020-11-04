import { RootState } from '../../store'
import { CartState } from './contracts/state'
import { createSelector } from 'reselect'

export const selectCart = (state: RootState): CartState => state.cart

export const selectCartProductsSum = createSelector(selectCart, ({ cart }) => {
	let sum = 0

	for (let i = 0; i < cart.length; i++) {
		sum += cart[i].count * cart[i].price
	}

	return sum
})
