import * as React from 'react'
import s from '../Product.module.scss'
import { NavLink } from 'react-router-dom'
import { IProduct } from '../../../store/ducks/product/contracts/state'
import { Rating } from '@material-ui/lab'
import { Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'

type Props = {
	item: IProduct
}

export const Product: React.FC<Props> = ({ item }) => {
	const dispatch = useDispatch()

	const addToCart = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.stopPropagation()

		//dispatch(addToCart(item))
	}

	return (
		<>
			<NavLink to={`/catalog/${item._id}`} className={s.product}>
				<div className={s.productImage} style={{ backgroundImage: 'url(' + item.image + ')' }}></div>
				<div className={s.productInfo}>
					<h3 className={s.title}>{item.name}</h3>
					<Rating name="read-only" value={item.rating} readOnly />
					<p className={s.text}>{item.text}</p>
					<div className={s.productPrice}>
						<div className={s.price}>Price: {item.price}$</div>
						<Button variant="contained" size="small" color="primary" onClick={addToCart}>
							to cart
						</Button>
					</div>
				</div>
			</NavLink>
		</>
	)
}
