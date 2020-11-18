export enum LoadingState {
	LOADED = 'LOADED',
	LOADING = 'LOADING',
	ERROR = 'ERROR',
	NEVER = 'NEVER',
}

export interface FilterData {
	diagonal: number[]
	color: string[]
	price: {
		min: number
		max: number
	}
	rating: {
		min: number
		max: number
	}
	category: string[]
}

export interface IProduct {
	_id: string
	name: string
	price: number
	text: string
	image: string
	purchase: number
	rating: number
	category: string
	color: string
	diagonal: number
}

export interface ProductsState {
	items: IProduct[]
	loadingState: LoadingState
	singleProduct: IProduct | null
	filterData: FilterData | null
	filter: FilterData | null
}
