import React from 'react'
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'

export const App: React.FC = () => {
	return (
		<div className="body">
			<Navbar />

			<Footer />
		</div>
	)
}
