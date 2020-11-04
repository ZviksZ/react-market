export interface CartProduct {
	_id: string
	name: string
	price: number
	image: string
	count: number
}

export interface CartState {
	cart: CartProduct[]
}
