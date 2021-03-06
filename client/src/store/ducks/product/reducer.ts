import produce, { Draft } from 'immer'
import { ProductsActions } from './actionCreators'
import { ProductActionsType } from './contracts/actionTypes'
import { LoadingState, ProductsState } from './contracts/state'

const initialProductsState: ProductsState = {
	items: [],
	loadingState: LoadingState.NEVER,
	singleProduct: null,
	filterData: null,
	filter: null,
	productFormData: null,
}
export const productsReducer = produce((draft: Draft<ProductsState>, action: ProductsActions) => {
	switch (action.type) {
		case ProductActionsType.SET_PRODUCTS:
			draft.items = action.payload
			draft.loadingState = LoadingState.LOADED
			break
		case ProductActionsType.SET_PRODUCT:
			draft.singleProduct = action.payload
			draft.loadingState = LoadingState.LOADED
			break
		case ProductActionsType.FETCH_PRODUCTS:
			draft.items = []
			draft.loadingState = LoadingState.LOADING
			break
		case ProductActionsType.GET_PRODUCT:
			draft.loadingState = LoadingState.LOADING
			break
		case ProductActionsType.SET_LOADING_STATE:
			draft.loadingState = action.payload
			break
		case ProductActionsType.SET_FILTER_DATA:
			draft.filterData = action.payload
			break
		case ProductActionsType.SET_FILTER:
			draft.filter = action.payload
			break
		case ProductActionsType.SET_PRODUCT_FORM_DATA:
			draft.productFormData = action.payload
			break
		default:
			break
	}
}, initialProductsState)
