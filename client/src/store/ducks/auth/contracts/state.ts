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
	createdAt?: string
	updatedAt?: string
}

export interface GlobalMessage {
	text: string
	type: 'success' | 'info' | 'warning' | 'error' | undefined
}

export interface AuthState {
	user: User | null
	globalMessage: GlobalMessage | null
}
