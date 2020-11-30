import * as React                            from 'react'
import s                                     from '../AdminTable.module.scss'
import { Button }                            from '@material-ui/core'
import TableRow                              from '@material-ui/core/TableRow'
import TableCell                             from '@material-ui/core/TableCell'
import { IProduct }                          from '../../../store/ducks/product/contracts/state'
import { useDispatch }                       from 'react-redux'
import { deleteProduct, setProductFormData } from '../../../store/ducks/product/actionCreators'
import IconButton                            from '@material-ui/core/IconButton'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
type Props = {
	item: IProduct
}

export const AdminTableRow: React.FC<Props> = ({ item }) => {
	const dispatch = useDispatch()

	const openForm = () => {
		dispatch(setProductFormData(item))
	}

	const deleteItem = () => {
		if (item._id) {
			dispatch(deleteProduct(item._id))
		}
	}
	return (
		<TableRow>
			<TableCell className={s.tableTd} component="th" scope="item">
				{item._id}
			</TableCell>
			<TableCell className={s.tableTd} component="th" scope="item">
				<b>{item.name}</b>
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
				<IconButton aria-label="" onClick={openForm}>
					<EditOutlinedIcon />
				</IconButton>
			</TableCell>
			<TableCell className={s.tableTd} component="th" scope="item">
				<IconButton aria-label="" onClick={deleteItem}>
					<DeleteForeverOutlinedIcon />
				</IconButton>
			</TableCell>
		</TableRow>
	)
}
