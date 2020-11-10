import { RootState } from '../../store'
import { IProduct, ProductsState } from './contracts/state'
import { createSelector } from 'reselect'

export const selectProducts = (state: RootState): ProductsState => state.products

export const selectSingleProductData = (state: RootState): IProduct | null => selectProducts(state).singleProduct

// eslint-disable-next-line
export const selectProductsFilterItems = createSelector(selectProducts, ({ items, filter }) => {
	const filteredItems = []

	if (!filter) {
		return items
	}

	for (let i = 0; i < items.length; i++) {
		const isInColors = filter.color.length ? filter.color.includes(items[i].color) : true
		const isInDiagonal = filter.diagonal.length ? filter.diagonal.includes(items[i].diagonal) : true
		const isInCategory = filter.category.length ? filter.category.includes(items[i].category) : true
		const isInRating = filter.rating.min <= items[i].rating && filter.rating.max >= items[i].rating
		const isInPrice = filter.price.min <= items[i].price && filter.price.max >= items[i].price

		if (isInColors && isInDiagonal && isInCategory && isInRating && isInPrice) {
			filteredItems.push(items[i])
		}
	}

	return filteredItems
})
