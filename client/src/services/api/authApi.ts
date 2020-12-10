import { axios } from '../../core/axios';
import { IProduct } from '../../store/ducks/product/contracts/state'
import { LoginData, RegisterData } from '../../store/ducks/auth/contracts/actionTypes'
import { User } from '../../store/ducks/auth/contracts/state'

interface Response<T> {
	status: string
	data: T
}

export const AuthApi = {
	async register(formData: RegisterData): Promise<IProduct> {
		const { data } = await axios.post<Response<IProduct>>('/auth/register', formData)
		return data.data
	},
	async login(formData: LoginData): Promise<IProduct> {
		const { data } = await axios.post<Response<IProduct>>('/auth/login', formData)
		return data.data
	},
	async getMe(token: string): Promise<User> {
		const { data } = await axios.get<Response<User>>('/auth/me', {
			headers: {
				token: token,
			},
		})
		return data.data
	},
}
