import * as React from 'react'
import s from './Footer.module.scss'
import { Typography, Link } from '@material-ui/core'

export const Footer: React.FC = () => {
	return (
		<>
			<div className={s.footer}>
				<Typography variant="body2" color="textSecondary" align="center">
					{'Copyright © '}
					<Link color="inherit" href="https://material-ui.com/">
						React E-commerce
					</Link>{' '}
					{new Date().getFullYear()}
					{'.'}
				</Typography>
			</div>
		</>
	)
}
