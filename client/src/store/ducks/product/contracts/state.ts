export enum LoadingState {
	LOADED = 'LOADED',
	LOADING = 'LOADING',
	ERROR = 'ERROR',
	NEVER = 'NEVER',
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
}

export interface ProductsState {
	items: IProduct[]
	loadingState: LoadingState
}
