import axios from 'axios'
import { IProduct } from '../../store/ducks/product/contracts/state'

interface Response<T> {
	status: string
	data: T
}

const URI = '/products/'

export const ProductsApi = {
	async fetchProducts(): Promise<IProduct[]> {
		const { data } = await axios.get<Response<IProduct[]>>(URI)
		return data.data
	},
	async fetchProductData(id: string): Promise<IProduct> {
		const { data } = await axios.get<Response<IProduct>>(URI + id)
		return data.data
	},
	async createProduct(productData: any): Promise<IProduct> {
		const { data } = await axios.post<Response<IProduct>>(URI + 'create', { ...productData })
		return data.data
	},
	async updateProduct(id: string, productData: any): Promise<IProduct> {
		const { data } = await axios.patch<Response<IProduct>>(URI + id, { ...productData })
		return data.data
	},
	async deleteProduct(id: string): Promise<IProduct> {
		const { data } = await axios.delete<Response<IProduct>>(URI + id)
		return data.data
	},
}
