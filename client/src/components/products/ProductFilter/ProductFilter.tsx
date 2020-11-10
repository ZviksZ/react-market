import * as React from 'react'
import s from '../Product.module.scss'
import { FormControlLabel } from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox'
import { useDispatch, useSelector } from 'react-redux'
import { selectProducts } from '../../../store/ducks/product/selectors'
import Slider from '@material-ui/core/Slider'
import { FilterData } from '../../../store/ducks/product/contracts/state'
import Button from '@material-ui/core/Button'
import { useForm } from 'react-hook-form'
import { getProductsFilter } from '../../../store/ducks/product/actionCreators'

// eslint-disable-next-line
export const ProductFilter: React.FC = () => {
	const { filterData, filter } = useSelector(selectProducts)
	const dispatch = useDispatch()

	const { register, handleSubmit } = useForm()

	const ratingMin = (filter && filter.rating.min) || (filterData ? filterData.rating.min : 0)
	const ratingMax = (filter && filter.rating.max) || (filterData ? filterData.rating.max : 0)
	const priceMin = (filter && filter.price.min) || (filterData ? filterData.price.min : 0)
	const priceMax = (filter && filter.price.max) || (filterData ? filterData.price.max : 0)

	const [rating, setRating] = React.useState<number[]>([ratingMin, ratingMax])
	const [price, setPrice] = React.useState<number[]>([priceMin, priceMax])

	const [state, setState] = React.useState<any>({})

	const handleRatingChange = (event: any, newValue: number | number[]) => {
		setRating(newValue as number[])
	}

	const handlePriceChange = (event: any, newValue: number | number[]) => {
		setPrice(newValue as number[])
	}

	const onSubmit = (data: any) => {
		dispatch(
			getProductsFilter({
				...data,
				rating: {
					min: rating[0],
					max: rating[1],
				},
				price: {
					min: price[0],
					max: price[1],
				},
			}),
		)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={s.filter}>
			<div className={s.filterCategory}>
				<h4 className="h4">Color</h4>
				{filterData?.color &&
					filterData.color.map((item) => {
						let checked = false
						if (filter && filter.color.includes(item)) {
							checked = true
						}
						return <FormControlLabel key={item} control={<Checkbox defaultChecked={checked} inputRef={register} name={'color-' + item} color="primary" />} label={item} />
					})}
			</div>
			<div className={s.filterCategory}>
				<h4 className="h4">Diagonal</h4>
				{filterData?.diagonal &&
					filterData.diagonal.map((item) => {
						let checked = false
						if (filter && filter.diagonal.includes(item)) {
							checked = true
						}
						return <FormControlLabel key={item} control={<Checkbox defaultChecked={checked} inputRef={register} name={'diagonal-' + item} color="primary" />} label={item} />
					})}
			</div>
			<div className={s.filterCategory}>
				<h4 className="h4">Category</h4>
				{filterData?.category &&
					filterData.category.map((item) => {
						let checked = false
						if (filter && filter.category.includes(item)) {
							checked = true
						}
						return <FormControlLabel key={item} control={<Checkbox defaultChecked={checked} inputRef={register} name={'category-' + item} color="primary" />} label={item} />
					})}
			</div>
			<div className={s.filterCategory}>
				<h4 className="h4">Rating</h4>
				<Slider
					value={rating}
					step={1}
					min={filterData ? filterData.rating.min : 0}
					max={filterData ? filterData.rating.max : 0}
					onChange={handleRatingChange}
					valueLabelDisplay="auto"
					aria-labelledby="range-slider"
				/>
			</div>
			<div className={s.filterCategory}>
				<h4 className="h4">Price</h4>
				<Slider
					value={price}
					step={5}
					min={filterData ? filterData.price.min : 0}
					max={filterData ? filterData.price.max : 0}
					onChange={handlePriceChange}
					valueLabelDisplay="auto"
					aria-labelledby="range-slider"
				/>
			</div>
			<Button type="submit" variant="contained" size="small" color="secondary">
				Filter
			</Button>
		</form>
	)
}
