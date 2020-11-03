import * as React from 'react'
import { CartProduct } from '../../../store/ducks/product/contracts/state'
import s from '../Navbar.module.scss'
import { IconButton } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'

type Props = {
	item: CartProduct
}

export const NavbarCartItem: React.FC<Props> = ({ item }) => {
	return (
		<div className={s.cartItem}>
			<div className={s.image} style={{ backgroundImage: 'url(' + item.image + ')' }}></div>
			<div className={s.info}>
				<div className={s.left}>
					<div className={s.name}>{item.name}</div>
					<div className={s.price}>Price: {item.price}$</div>
				</div>
				<div className={s.right}>
					<div className={s.count}>{item.count}</div>
					<IconButton aria-label="delete">
						<DeleteIcon fontSize="small" />
					</IconButton>
				</div>
			</div>
		</div>
	)
}
