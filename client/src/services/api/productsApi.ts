import axios from 'axios'
import { IProduct } from '../../store/ducks/product/contracts/state'

interface Response<T> {
	status: string
	data: T
}

export const ProductsApi = {
	async fetchProducts(): Promise<IProduct[]> {
		const { data } = await axios.get<Response<IProduct[]>>('/products')
		return data.data
	},
	async fetchProductData(id: string): Promise<IProduct> {
		const { data } = await axios.get<Response<IProduct>>('/products/' + id)
		return data.data
	},
	/*async fetchProducts(): Promise<IProduct[]> {
		const { data } = await axios.get<Response<IProduct[]>>('/products')
		return data.data
	},
	async fetchTweetData(id: string): Promise<Tweet> {
		const { data } = await axios.get<Response<Tweet>>('/tweets/' + id);
		return data.data;
	},
	async addTweet(payload: string): Promise<Tweet> {
		const { data } = await axios.post<Response<Tweet>>('/tweets', { text: payload });
		return data.data;
	},*/
}
