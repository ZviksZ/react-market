import { combineReducers } from 'redux'
import { cartReducer }     from './ducks/cart/reducer'
import { productsReducer } from './ducks/product/reducer'

export const rootReducer = combineReducers({
	products: productsReducer,
	cart: cartReducer,
})
