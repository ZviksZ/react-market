import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from './rootReducer'
import rootSaga from './saga'
import { ProductsState } from './ducks/product/contracts/state'
import { CartState } from './ducks/cart/contracts/state'
import { AuthState } from './ducks/auth/contracts/state'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const sagaMiddleware = createSagaMiddleware()

export interface RootState {
	products: ProductsState
	cart: CartState
	auth: AuthState
}

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)
