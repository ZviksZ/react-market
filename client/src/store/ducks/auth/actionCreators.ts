import {
	AuthActionsType,
	GetAuthMeActionInterface,
	LoginActionInterface,
	LoginData,
	LogoutActionInterface,
	RegisterActionInterface,
	RegisterData,
	SetGlobalMessageActionInterface,
	SetUserActionInterface,
} from './contracts/actionTypes'
import { ProductsState } from '../product/contracts/state'
import { ProductActionsType, SetProductsActionInterface } from '../product/contracts/actionTypes'
import { GlobalMessage, User } from './contracts/state'

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
export const getMe = (): GetAuthMeActionInterface => ({
	type: AuthActionsType.GET_ME,
})
export const setGlobalMessage = (payload: GlobalMessage | null): SetGlobalMessageActionInterface => ({
	type: AuthActionsType.SET_GLOBAL_MESSAGE,
	payload,
})

export type AuthActions = SetGlobalMessageActionInterface | LogoutActionInterface | GetAuthMeActionInterface | LoginActionInterface | RegisterActionInterface | SetUserActionInterface
