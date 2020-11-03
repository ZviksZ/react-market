import * as React from 'react'
import { CartProduct } from '../../../store/ducks/product/contracts/state'
import { Button } from '@material-ui/core'
import s from '../Navbar.module.scss'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import { NavbarCartItem } from './NavbarCartItem'

type Props = {
	cartItems: CartProduct[]
	cartCount: number
	setOpen: (isOpen: boolean) => void
}

export const NavbarCart: React.FC<Props> = ({ cartItems, cartCount, setOpen }) => {
	return (
		<>
			<ClickAwayListener onClickAway={() => setOpen(false)}>
				<div className={s.cart}>
					<div className={s.cartHeader}>Total products: {cartCount}</div>
					<div className={s.cartList}>
						{cartItems.map((item) => (
							<NavbarCartItem key={item._id} item={item} />
						))}
					</div>
					<div className={s.cartFooter}>
						<Button variant="contained" size="small" color="primary">
							clear cart
						</Button>
						<Button variant="contained" size="small" color="secondary">
							checkout
						</Button>
					</div>
				</div>
			</ClickAwayListener>
		</>
	)
}
