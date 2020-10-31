import * as React from 'react'
import s from '../Product.module.scss'
import { NavLink } from 'react-router-dom'
import { IProduct } from '../../../store/ducks/product/contracts/state'
import { Rating } from '@material-ui/lab'
import { Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import cn from 'classnames'

type Props = {
	item: IProduct
	isHorizontal?: boolean
}

export const Product: React.FC<Props> = ({ item, isHorizontal = false }) => {
	const dispatch = useDispatch()

	const addToCart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.stopPropagation()
		e.preventDefault()

		console.log(item._id)
		//dispatch(addToCart(item))
	}

	return (
		<>
			<NavLink to={`/catalog/${item._id}`} className={cn(s.product, { [s.productHorizontal]: isHorizontal })}>
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
