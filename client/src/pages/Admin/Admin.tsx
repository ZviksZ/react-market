import * as React from 'react'
import { AdminTable } from '../../components/AdminTable/AdminTable'
import { ProductDetail } from '../../components/products/ProductDetail/ProductDetail'

export const Admin: React.FC = () => {
	return (
		<>
			<section className="section">
				<div className="container">
					<AdminTable />
				</div>
			</section>
		</>
	)
}
