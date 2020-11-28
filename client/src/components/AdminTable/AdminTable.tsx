import * as React from 'react'
import { useSelector } from 'react-redux'
import { selectProductsFilterItems } from '../../store/ducks/product/selectors'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { IProduct } from '../../store/ducks/product/contracts/state'
import { Button } from '@material-ui/core'
import s from './AdminTable.module.scss'

export const AdminTable: React.FC = () => {
	const catalogFilterItems = useSelector(selectProductsFilterItems)

	return (
		<TableContainer component={Paper}>
			<Table size="small" className={s.table}>
				<TableHead>
					<TableRow>
						<TableCell className={s.tableTh}>Id</TableCell>
						<TableCell className={s.tableTh}>image</TableCell>
						<TableCell className={s.tableTh}>price</TableCell>
						<TableCell className={s.tableTh}>purchase</TableCell>
						<TableCell className={s.tableTh}>rating</TableCell>
						<TableCell className={s.tableTh}>category</TableCell>
						<TableCell className={s.tableTh}>color</TableCell>
						<TableCell className={s.tableTh}>diagonal</TableCell>
						<TableCell className={s.tableTh}>text</TableCell>
						<TableCell className={s.tableTh}></TableCell>
						<TableCell className={s.tableTh}></TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{catalogFilterItems.map((row: IProduct) => (
						<TableRow key={row._id}>
							<TableCell className={s.tableTd} component="th" scope="row">
								{row._id}
							</TableCell>
							<TableCell className={s.tableTd} component="th" scope="row">
								<img width={100} src={row.image} alt="" />
							</TableCell>
							<TableCell className={s.tableTd} component="th" scope="row">
								{row.price}
							</TableCell>
							<TableCell className={s.tableTd} component="th" scope="row">
								{row.purchase}
							</TableCell>
							<TableCell className={s.tableTd} component="th" scope="row">
								{row.rating}
							</TableCell>
							<TableCell className={s.tableTd} component="th" scope="row">
								{row.category}
							</TableCell>
							<TableCell className={s.tableTd} component="th" scope="row">
								{row.color}
							</TableCell>
							<TableCell className={s.tableTd} component="th" scope="row">
								{row.diagonal}
							</TableCell>
							<TableCell className={s.tableTd} component="th" scope="row">
								{row.text}
							</TableCell>
							<TableCell className={s.tableTd} component="th" scope="row">
								<Button variant="contained" size="small" color="secondary">
									update
								</Button>
							</TableCell>
							<TableCell className={s.tableTd} component="th" scope="row">
								<Button variant="contained" size="small" color="secondary">
									delete
								</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	)
}
