import * as React from 'react'
import photo2 from '../../../assets/img/2.jpg'
import s from './HomeBanner.module.scss'

export const HomeBanner: React.FC = () => {
	return (
		<>
			<div className={s.mainBanner} style={{ backgroundImage: 'url(' + photo2 + ')' }}></div>
		</>
	)
}
