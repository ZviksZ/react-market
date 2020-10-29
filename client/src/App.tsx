import React from 'react'
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { useRoutes } from './routes'

export const App: React.FC = () => {
	const routes = useRoutes(false)

	return (
		<div className="body">
			<Navbar />
			{routes}
			<Footer />
		</div>
	)
}
