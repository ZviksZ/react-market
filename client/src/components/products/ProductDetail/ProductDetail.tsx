import * as React from 'react'
import s from '../Product.module.scss'
import { IProduct } from '../../../store/ducks/product/contracts/state'
import { Rating } from '@material-ui/lab'
import { Button } from '@material-ui/core'
import { addProductToCart } from '../../../store/ducks/product/actionCreators'
import { useDispatch } from 'react-redux'

type Props = {
	item: IProduct | null
}

export const ProductDetail: React.FC<Props> = ({ item }) => {
	const dispatch = useDispatch()

	const addToCart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.stopPropagation()
		e.preventDefault()

		if (item) {
			dispatch(addProductToCart(item))
		}
	}

	if (!item) {
		return <p className="text-center">Nothing to show</p>
	}
	return (
		<>
			<div className={s.productDetail}>
				<h1 className="h1">{item.name}</h1>
				<Button variant="contained" size="small" color="primary" onClick={addToCart}>
					to cart
				</Button>
				<div className={s.productImage} style={{ backgroundImage: 'url(' + item.image + ')' }}></div>
				<p>{item.text}</p>
				<div className={s.propsList}>
					<div className={s.item}>
						<span className={s.name}>Color</span>
						<span className={s.info}>{item.color}</span>
					</div>
					<div className={s.item}>
						<span className={s.name}>Diagonal</span>
						<span className={s.info}>{item.diagonal}</span>
					</div>
					<div className={s.item}>
						<span className={s.name}>Purchases</span>
						<span className={s.info}>{item.purchase}</span>
					</div>
					<div className={s.item}>
						<span className={s.name}>Rating</span>
						<span className={s.info}>
							<Rating name="read-only" value={item.rating} readOnly />
						</span>
					</div>
				</div>
			</div>
		</>
	)
}
