import * as React from 'react'
import s from '../AdminTable.module.scss'
import { Button } from '@material-ui/core'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import { IProduct } from '../../../store/ducks/product/contracts/state'
import { useDispatch } from 'react-redux'
import { SetProductFormData } from '../../../store/ducks/product/actionCreators'

type Props = {
	item: IProduct
}

export const AdminTableRow: React.FC<Props> = ({ item }) => {
	const dispatch = useDispatch()

	const openForm = () => {
		dispatch(SetProductFormData(item))
	}
	return (
		<TableRow>
			<TableCell className={s.tableTd} component="th" scope="item">
				{item._id}
			</TableCell>
			<TableCell className={s.tableTd} component="th" scope="item">
				<img width={100} src={item.image} alt="" />
			</TableCell>
			<TableCell className={s.tableTd} component="th" scope="item">
				{item.price}
			</TableCell>
			<TableCell className={s.tableTd} component="th" scope="item">
				{item.purchase}
			</TableCell>
			<TableCell className={s.tableTd} component="th" scope="item">
				{item.rating}
			</TableCell>
			<TableCell className={s.tableTd} component="th" scope="item">
				{item.category}
			</TableCell>
			<TableCell className={s.tableTd} component="th" scope="item">
				{item.color}
			</TableCell>
			<TableCell className={s.tableTd} component="th" scope="item">
				{item.diagonal}
			</TableCell>
			<TableCell className={s.tableTd} component="th" scope="item">
				{item.text}
			</TableCell>
			<TableCell className={s.tableTd} component="th" scope="item">
				<Button variant="contained" size="small" color="secondary" onClick={openForm}>
					update
				</Button>
			</TableCell>
			<TableCell className={s.tableTd} component="th" scope="item">
				<Button variant="contained" size="small" color="secondary">
					delete
				</Button>
			</TableCell>
		</TableRow>
	)
}
