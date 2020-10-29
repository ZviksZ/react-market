import * as React from 'react'
import s from '../Product.module.scss'
import photo2 from '../../../assets/img/2.jpg'
import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded'
import { NavLink } from 'react-router-dom'
import { IProduct } from '../../../store/ducks/product/contracts/state'
import { Rating } from '@material-ui/lab'

type Props = {
	item: IProduct
}

export const Product: React.FC<Props> = ({ item }) => {
	return (
		<>
			{/*<NavLink to={'/catalog/' + item._id} className={s.product}>*/}
			<NavLink to={'/catalog/'} className={s.product}>
				<div className={s.productImage} style={{ backgroundImage: 'url(' + photo2 + ')' }}></div>
				<div className={s.productInfo}>
					<h3 className={s.title}>Laptop Z-9000</h3>
					<Rating name="read-only" value={3} readOnly />
					<p className={s.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores eos fuga magni natus odit voluptates?</p>
					<div className={s.productPrice}>
						<div className={s.price}>Price: 300$</div>
						<AddBoxRoundedIcon fontSize={'large'} />
					</div>
				</div>
			</NavLink>
		</>
	)
}
