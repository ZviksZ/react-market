import * as React from 'react'
import s from '../Navbar.module.scss'
import { IconButton } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import { CartProduct } from '../../../store/ducks/cart/contracts/state'
import { useDispatch } from 'react-redux'
import { decreaseProductCount, deleteCartProduct, increaseProductCount } from '../../../store/ducks/cart/actionCreators'

type Props = {
	item: CartProduct
}

export const NavbarCartItem: React.FC<Props> = ({ item }) => {
	const dispatch = useDispatch()

	const increase = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		dispatch(increaseProductCount(item._id))
	}
	const decrease = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		dispatch(decreaseProductCount(item._id))
	}
	const deleteProduct = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		dispatch(deleteCartProduct(item._id))
	}

	const newImagePath = item?.image.replace(/\\/g, '/')
	return (
		<div className={s.cartItem}>
			<div className={s.image} style={{ backgroundImage: 'url(/' + newImagePath + ')' }}></div>
			<div className={s.info}>
				<div className={s.left}>
					<div className={s.name}>{item.name}</div>
					<div className={s.price}>Price: {item.price}$</div>
				</div>
				<div className={s.right}>
					<div className={s.count}>
						<button onClick={decrease}>-</button>
						<span>{item.count}</span>
						<button onClick={increase}>+</button>
					</div>
					<IconButton aria-label="delete" onClick={deleteProduct}>
						<DeleteIcon fontSize="small" />
					</IconButton>
				</div>
			</div>
		</div>
	)
}
