import {
	AuthActionsType,
	GetAuthMeActionInterface,
	LoginActionInterface,
	LoginData,
	LogoutActionInterface,
	RegisterActionInterface,
	RegisterData,
	SetUserActionInterface,
} from './contracts/actionTypes'
import { ProductsState }                                                                                                                                      from '../product/contracts/state'
import { ProductActionsType, SetProductsActionInterface }                                                                                                     from '../product/contracts/actionTypes'
import { User }                                                                                                                                               from './contracts/state'

export const login = (payload: LoginData): LoginActionInterface => ({
	type: AuthActionsType.LOGIN,
	payload,
})
export const registerUser = (payload: RegisterData): RegisterActionInterface => ({
	type: AuthActionsType.REGISTER,
	payload,
})
export const setUser = (payload: User | null): SetUserActionInterface => ({
	type: AuthActionsType.SET_USER,
	payload,
})
export const logout = (): LogoutActionInterface => ({
	type: AuthActionsType.LOGOUT,
})
export type AuthActions = LogoutActionInterface | GetAuthMeActionInterface | LoginActionInterface | RegisterActionInterface | SetUserActionInterface
