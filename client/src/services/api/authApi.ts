import axios        from 'axios'
import { IProduct } from '../../store/ducks/product/contracts/state'

interface Response<T> {
	status: string
	data: T
}

export const AuthApi = {
	async register(formData: any): Promise<IProduct> {
		const { data } = await axios.post<Response<IProduct>>('/auth/register', formData)
		return data.data
	},
	async login(formData: any): Promise<IProduct> {
		const { data } = await axios.post<Response<IProduct>>('/auth/login', formData)
		return data.data
	},
	/*async me(formData: any): Promise<IProduct> {
		const { data } = await axios.post<Response<IProduct>>('/auth/login', formData)
		return data.data
	},*/
}
