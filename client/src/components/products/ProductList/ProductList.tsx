import * as React from 'react'
import s from '../Product.module.scss'
import { Product } from '../Product/Product'
import { IProduct } from '../../../store/ducks/product/contracts/state'

type Props = {
	maxCount?: number
	products: IProduct[]
}

export const ProductList: React.FC<Props> = ({ maxCount, products }) => {
	return (
		<>
			<div className={s.productList}>
				{products.map((product, index) => {
					if (maxCount) {
						if (index < maxCount) {
							return <Product item={product} key={product._id} />
						}
					} else {
						return <Product item={product} key={product._id} />
					}
				})}
			</div>
		</>
	)
}
