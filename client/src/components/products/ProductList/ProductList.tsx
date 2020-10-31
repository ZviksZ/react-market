import * as React from 'react'
import s from '../Product.module.scss'
import { Product } from '../Product/Product'
import { IProduct } from '../../../store/ducks/product/contracts/state'

type Props = {
	maxCount?: number
	products: IProduct[]
	isHorizontal?: boolean
}

export const ProductList: React.FC<Props> = ({ maxCount, products, isHorizontal = false }) => {
	return (
		<>
			<div className={s.productList}>
				{products.map((product, index) => {
					if (maxCount) {
						if (index < maxCount) {
							return <Product item={product} key={product._id} isHorizontal={isHorizontal} />
						}
					} else {
						return <Product item={product} key={product._id} isHorizontal={isHorizontal} />
					}
				})}
			</div>
		</>
	)
}
