import * as React from 'react'
import { AdminTable } from '../../components/AdminTable/AdminTable'

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
