import { combineReducers } from 'redux'
import { productsReducer } from './ducks/product/reducer'

export const rootReducer = combineReducers({
	products: productsReducer,
})
