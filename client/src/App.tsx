import React, { useEffect, useState } from 'react'
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { useRoutes } from './routes'
import { useDispatch } from 'react-redux'
import { fetchProducts } from './store/ducks/product/actionCreators'
import { getCart } from './store/ducks/cart/actionCreators'
import { ModalBlock } from './components/ModalBlock/ModalBlock'
import { LoginForm } from './components/forms/LoginForm/LoginForm'
import { RegisterForm } from './components/forms/RegisterForm/RegisterForm'
import { getMe } from './store/ducks/auth/actionCreators'

export const App: React.FC = () => {
	const dispatch = useDispatch()
	const routes = useRoutes(false)
	const [login, setLogin] = useState(false)
	const [register, setRegister] = useState(false)

	useEffect(() => {
		dispatch(getMe())
		dispatch(fetchProducts())
		dispatch(getCart())
	}, [dispatch])

	return (
		<div className="body">
			<Navbar setLogin={setLogin} setRegister={setRegister} />
			<ModalBlock visible={login} onClose={() => setLogin(false)} title="Login">
				<LoginForm closeModal={setLogin} />
			</ModalBlock>
			<ModalBlock visible={register} onClose={() => setRegister(false)} title="Register">
				<RegisterForm closeModal={setRegister} />
			</ModalBlock>
			{routes}
			<Footer />
		</div>
	)
}
