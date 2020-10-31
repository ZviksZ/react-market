import * as React from 'react'
import { Backdrop } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress'
import s from './Loader.module.scss'

export const Loader: React.FC = () => {
	return (
		<>
			<Backdrop open={true} className={s.loaderWrap}>
				<CircularProgress color="secondary" />
			</Backdrop>
		</>
	)
}
