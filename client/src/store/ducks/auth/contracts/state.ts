export interface User {
	_id: string
	email: string
	fullname: string
	username: string
	purchases: []
	location?: string
	confirmed?: boolean
	category?: string
	token?: string
}

export interface AuthState {
	user: User | null
}
