import * as React from 'react'
import { useSelector } from 'react-redux'
import { selectProducts, selectProductsFilterItems } from '../../store/ducks/product/selectors'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableContainer from '@material-ui/core/TableContainer'
import Paper from '@material-ui/core/Paper'
import { IProduct } from '../../store/ducks/product/contracts/state'
import { Button } from '@material-ui/core'
import s from './AdminTable.module.scss'
import { AdminTableRow } from './AdminTableRow/AdminTableRow'
import { AdminTableHead } from './AdminTableHead/AdminTableHead'
import { ModalBlock } from '../ModalBlock/ModalBlock'
import { useEffect, useState } from 'react'
import { AdminTableForm } from '../forms/AdminTableForm/AdminTableForm'

export const AdminTable: React.FC = () => {
	const catalogFilterItems = useSelector(selectProductsFilterItems)
	const { productFormData } = useSelector(selectProducts)
	const [openForm, setOpenForm] = useState(false)

	useEffect(() => {
		if (productFormData) {
			setOpenForm(true)
		}
	}, [productFormData])

	return (
		<>
			<div className="header-with-filter">
				<h1 className="h1">Admin page</h1>
				<Button variant="contained" size="small" color="primary" onClick={() => setOpenForm(true)}>
					add product
				</Button>
			</div>
			<TableContainer component={Paper} className={s.tableWrap}>
				<Table size="small" className={s.table}>
					<AdminTableHead />
					<TableBody>
						{catalogFilterItems.map((item: IProduct) => (
							<AdminTableRow key={item._id} item={item} />
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<ModalBlock visible={openForm} onClose={() => setOpenForm(false)} title="Product form add/update">
				<AdminTableForm />
			</ModalBlock>
		</>
	)
}
