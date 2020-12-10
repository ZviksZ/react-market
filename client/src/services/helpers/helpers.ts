import { FilterData, IProduct } from '../../store/ducks/product/contracts/state'

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

export const getChoosenFilter = (payload: any) => {
	const data: FilterData = {
		diagonal: [],
		category: [],
		color: [],
		rating: {
			min: payload.rating.min,
			max: payload.rating.max,
		},
		price: {
			min: payload.price.min,
			max: payload.price.max,
		},
	}

	// eslint-disable-next-line
	Object.keys(payload).forEach((item) => {
		if (item !== 'rating' && item !== 'price') {
			if (item.includes('color') && payload[item]) {
				const itemValue = item.split('-')[1]
				data.color.push(itemValue)
			}
			if (item.includes('diagonal') && payload[item]) {
				const itemValue = +item.split('-')[1]
				data.diagonal.push(itemValue)
			}
			if (item.includes('category') && payload[item]) {
				const itemValue = item.split('-')[1]
				data.category.push(itemValue)
			}
		}
	})

	return data
}


export function setFormData(args: any) {
	const formData = new FormData()

	for (const key in args) {
		if (Array.isArray(args[key])) {
			for (let i = 0; i < args[key].length; i++) {
				formData.append(key + '[]', args[key][i])
			}
		} else if (key == 'image') {
			console.log('111')
			formData.append(key, args[key])
		} else {
			formData.append(key, args[key])
		}
	}

	return formData
}
