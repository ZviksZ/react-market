import * as React from 'react'
import s from '../AdminTable.module.scss'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'

export const AdminTableHead: React.FC = () => {
	return (
		<TableHead>
			<TableRow>
				<TableCell className={s.tableTh}>Id</TableCell>
				<TableCell className={s.tableTh}>Name</TableCell>
				<TableCell className={s.tableTh}>image</TableCell>
				<TableCell className={s.tableTh}>price</TableCell>
				<TableCell className={s.tableTh}>purchase</TableCell>
				<TableCell className={s.tableTh}>rating</TableCell>
				<TableCell className={s.tableTh}>category</TableCell>
				<TableCell className={s.tableTh}>color</TableCell>
				<TableCell className={s.tableTh}>diagonal</TableCell>
				<TableCell className={s.tableTh}></TableCell>
				<TableCell className={s.tableTh}></TableCell>
			</TableRow>
		</TableHead>
	)
}
