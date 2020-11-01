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
import { RootState } from '../../store/store'

export const Navbar: React.FC = () => {
	const [basketOpen, setBasketOpen] = useState<boolean>(false)
	const { cart } = useSelector((state: RootState) => state.products)

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
					<Button onClick={() => setBasketOpen((prev) => !prev)} variant="contained" color="primary" className={s.navbarBasketBtn}>
						<Badge badgeContent={cart.length} color="secondary">
							<AddShoppingCartIcon fontSize={'small'} />
						</Badge>
					</Button>
				</Toolbar>
			</AppBar>
		</>
	)
}
