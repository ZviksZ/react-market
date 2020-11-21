import { Action } from 'redux'

export enum AuthActionsType {
	REGISTER = 'auth/REGISTER',
	LOGIN = 'auth/LOGIN',
	SET_USER = 'auth/SET_USER',
	GET_ME = 'auth/GET_ME',
}

export interface GetAuthMeActionInterface extends Action<AuthActionsType> {
	type: AuthActionsType.GET_ME
}
