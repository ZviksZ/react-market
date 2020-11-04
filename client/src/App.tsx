import React, { useEffect } from 'react'
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { useRoutes } from './routes'
import { useDispatch } from 'react-redux'
import { fetchProducts } from './store/ducks/product/actionCreators'
import { getCart } from './store/ducks/cart/actionCreators'

export const App: React.FC = () => {
	const dispatch = useDispatch()
	const routes = useRoutes(false)

	useEffect(() => {
		dispatch(fetchProducts())
		dispatch(getCart())
	}, [dispatch])

	return (
		<div className="body">
			<Navbar />
			{routes}
			<Footer />
		</div>
	)
}
