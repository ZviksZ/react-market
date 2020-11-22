import { Action } from 'redux'
import { User } from './state'

export enum AuthActionsType {
	REGISTER = 'auth/REGISTER',
	LOGIN = 'auth/LOGIN',
	SET_USER = 'auth/SET_USER',
	GET_ME = 'auth/GET_ME',
	LOGOUT = 'auth/LOGOUT',
}

export interface LoginData {
	username: string
	password: string
}
export interface RegisterData {
	username: string
	fullname: string
	email: string
	password: string
	password2: string
}

export interface GetAuthMeActionInterface extends Action<AuthActionsType> {
	type: AuthActionsType.GET_ME
}
export interface LogoutActionInterface extends Action<AuthActionsType> {
	type: AuthActionsType.LOGOUT
}
export interface LoginActionInterface extends Action<AuthActionsType> {
	type: AuthActionsType.LOGIN
	payload: LoginData
}
export interface RegisterActionInterface extends Action<AuthActionsType> {
	type: AuthActionsType.REGISTER
	payload: RegisterData
}
export interface SetUserActionInterface extends Action<AuthActionsType> {
	type: AuthActionsType.SET_USER
	payload: User | null
}
