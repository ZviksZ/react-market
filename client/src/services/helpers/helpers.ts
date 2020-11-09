import { FilterData, IProduct } from '../../store/ducks/product/contracts/state'
import _ from 'lodash'

export const getFilterData = (data: IProduct[]) => {
	const filterData: FilterData = {
		diagonal: [],
		color: [],
		price: {
			min: 0,
			max: 0,
		},
		rating: {
			min: 0,
			max: 0,
		},
		category: [],
	}

	for (let i = 0; i < data.length; i++) {
		if (!filterData.diagonal.includes(data[i].diagonal)) {
			filterData.diagonal = [...filterData.diagonal, data[i].diagonal]
		}
		if (!filterData.color.includes(data[i].color)) {
			filterData.color = [...filterData.color, data[i].color]
		}
		if (!filterData.category.includes(data[i].category)) {
			filterData.category = [...filterData.category, data[i].category]
		}
		if (!filterData.price.min || filterData.price.min > data[i].price) {
			filterData.price.min = data[i].price
		}
		if (!filterData.price.max || filterData.price.max < data[i].price) {
			filterData.price.max = data[i].price
		}

		if (!filterData.rating.min || filterData.rating.min > data[i].rating) {
			filterData.rating.min = data[i].rating
		}
		if (!filterData.rating.max || filterData.rating.max < data[i].rating) {
			filterData.rating.max = data[i].rating
		}
	}

	filterData.diagonal = filterData.diagonal.sort((a: number, b: number) => a - b)

	return filterData
}
