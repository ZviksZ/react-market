import * as React from 'react'
import { AppBar } from '@material-ui/core'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import s from './Navbar.module.scss'
import { useState } from 'react'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import Badge from '@material-ui/core/Badge'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { NavbarCart } from './NavbarCart/NavbarCart'
import { selectCart, selectCartProductsSum } from '../../store/ducks/cart/selectors'

interface Props {
	setLogin: (param: boolean) => void
	setRegister: (param: boolean) => void
}

export const Navbar: React.FC<Props> = ({ setLogin, setRegister }) => {
	const [basketOpen, setBasketOpen] = useState<boolean>(false)
	const { cart } = useSelector(selectCart)
	const cartSum = useSelector(selectCartProductsSum)
	const cartCount = cart.reduce((acc, item) => acc + item.count, 0)

	return (
		<>
			<AppBar position="fixed" className={s.navbar}>
				<Toolbar className={s.navbarToolbar}>
					<NavLink to={'/'} className={s.navbarTitle}>
						React e-commerce
					</NavLink>
					<nav>
						<NavLink className={s.navbarLink} to={'/catalog'}>
							Catalog
						</NavLink>
					</nav>
					<Button onClick={() => setBasketOpen((prev) => !prev)} data-testid="open-basket" variant="contained" color="primary" className={s.navbarBasketBtn}>
						<Badge badgeContent={cartCount} color="secondary">
							<AddShoppingCartIcon fontSize={'small'} />
						</Badge>
					</Button>
					<div className={s.navabarLR}>
						<div className={s.navbarSmallLink} onClick={() => setLogin(true)}>
							Login
						</div>
						/
						<div className={s.navbarSmallLink} onClick={() => setRegister(true)}>
							Register
						</div>
					</div>

					{basketOpen && <NavbarCart cartSum={cartSum} setOpen={setBasketOpen} cartItems={cart} cartCount={cartCount} />}
				</Toolbar>
			</AppBar>
		</>
	)
}
