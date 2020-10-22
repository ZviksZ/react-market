import * as React   from 'react'
import { AppBar }   from '@material-ui/core'
import Toolbar      from '@material-ui/core/Toolbar'
import Typography   from '@material-ui/core/Typography'
import Link         from '@material-ui/core/Link'
import Button       from '@material-ui/core/Button'
import s            from './Navbar.module.scss'
import { useState } from 'react'

export const Navbar: React.FC = () => {
	const [basketOpen, setBasketOpen] = useState<boolean>(false)

	return (
		<>
			<AppBar position="fixed" className={s.navbar}>
				<Toolbar className={s.navbarToolbar}>
					<Link variant="button" color="textPrimary" href="#" className={s.navbarTitle}>
						<Typography variant="h6" noWrap>
							React e-commerce
						</Typography>
					</Link>
					<nav>
						<Link variant="button" color="textPrimary" href="#" className={s.navbarLink}>
							Main
						</Link>
						<Link variant="button" color="textPrimary" href="#" className={s.navbarLink}>
							Catalog
						</Link>
					</nav>
					<Button onClick={() => setBasketOpen(true)} variant="contained" color="secondary" className={s.navbarLink}>
						Secondary
					</Button>
				</Toolbar>
			</AppBar>
		</>
	)
}
