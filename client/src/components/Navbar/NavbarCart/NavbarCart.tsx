import * as React from 'react'
import { Button } from '@material-ui/core'
import s from '../Navbar.module.scss'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import { NavbarCartItem } from './NavbarCartItem'
import { CartProduct } from '../../../store/ducks/cart/contracts/state'
import { useDispatch } from 'react-redux'
import { clearCart } from '../../../store/ducks/cart/actionCreators'

type Props = {
	cartItems: CartProduct[]
	cartCount: number
	setOpen: (isOpen: boolean) => void
	cartSum: number
}

export const NavbarCart: React.FC<Props> = ({ cartSum, cartItems, cartCount, setOpen }) => {
	const dispatch = useDispatch()

	const clearCartFn = () => {
		dispatch(clearCart())
	}

	return (
		<>
			<ClickAwayListener onClickAway={() => setOpen(false)}>
				<div className={s.cart}>
					<div className={s.cartHeader}>
						<span>Products: {cartCount}</span>
						<span>Sum: {cartSum}$</span>
					</div>
					<div className={s.cartList}>
						{cartItems.map((item) => (
							<NavbarCartItem key={item._id} item={item} />
						))}
					</div>
					<div className={s.cartFooter}>
						<Button variant="contained" size="small" color="primary" onClick={clearCartFn}>
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
