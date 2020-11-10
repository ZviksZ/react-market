import * as React from 'react'
import s from '../Product.module.scss'
import { IProduct } from '../../../store/ducks/product/contracts/state'
import { Rating } from '@material-ui/lab'
import { Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { Loader } from '../../Loader/Loader'
import { addProductToCart } from '../../../store/ducks/cart/actionCreators'

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
		return <Loader />
	}
	return (
		<>
			<div className={s.productDetail}>
				<div className={s.productHeader}>
					<h1 className="h1">{item.name}</h1>
					<Button variant="contained" size="small" color="primary" onClick={addToCart}>
						to cart
					</Button>
				</div>
				<div className={s.productImage} style={{ backgroundImage: 'url(' + item.image + ')' }}></div>
				<h3 className="h3 mt mb">Description</h3>
				<p className={s.productDesc}>{item.text}</p>
				<h3 className="h3 mt mb">Characteristics</h3>
				<div className={s.propsList}>
					<div className={s.item}>
						<span className={s.name}>Color</span>
						<div className={s.divider}></div>
						<span className={s.info}>{item.color}</span>
					</div>
					<div className={s.item}>
						<span className={s.name}>Diagonal</span>
						<div className={s.divider}></div>
						<span className={s.info}>{item.diagonal}</span>
					</div>
					<div className={s.item}>
						<span className={s.name}>Purchases</span>
						<div className={s.divider}></div>
						<span className={s.info}>{item.purchase}</span>
					</div>
					<div className={s.item}>
						<span className={s.name}>Rating</span>
						<div className={s.divider}></div>
						<span className={s.info}>
							<Rating name="read-only" value={item.rating} readOnly />
						</span>
					</div>
					<div className={s.item}>
						<span className={s.name}>Category</span>
						<div className={s.divider}></div>
						<span className={s.info}>{item.category}</span>
					</div>
				</div>
			</div>
		</>
	)
}
