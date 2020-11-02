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
	color: string
	diagonal: number
}
export interface CartProduct {
	_id: string
	name: string
	price: number
	image: string
	count: number
}

export interface ProductsState {
	items: IProduct[]
	loadingState: LoadingState
	cart: CartProduct[]
	singleProduct: IProduct | null
}
