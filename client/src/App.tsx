import React from 'react'
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { Home } from './pages/Home/Home'

export const App: React.FC = () => {
	return (
		<div className="body">
			<Navbar />
			<Home />
			<Footer />
		</div>
	)
}
