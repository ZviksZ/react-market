import * as React from 'react'
import s from '../Product.module.scss'
import { FormControlLabel } from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox'
import { useSelector } from 'react-redux'
import { selectProducts } from '../../../store/ducks/product/selectors'
import Slider from '@material-ui/core/Slider'
import { FilterData } from '../../../store/ducks/product/contracts/state'
import Button from '@material-ui/core/Button'

export const ProductFilter: React.FC = () => {
	const { filterData } = useSelector(selectProducts)
	const ratingMin = filterData ? filterData.rating.min : 0
	const ratingMax = filterData ? filterData.rating.max : 0
	const priceMin = filterData ? filterData.price.min : 0
	const priceMax = filterData ? filterData.price.max : 0

	const [rating, setRating] = React.useState<number[]>([ratingMin, ratingMax])
	const [price, setPrice] = React.useState<number[]>([priceMin, priceMax])

	const [state, setState] = React.useState<any>({})

	const handleRatingChange = (event: any, newValue: number | number[]) => {
		setRating(newValue as number[])
	}

	const handlePriceChange = (event: any, newValue: number | number[]) => {
		setPrice(newValue as number[])
	}

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setState({ ...state, [event.target.name]: event.target.checked })
	}

	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		const data = new FormData(event.currentTarget)

		console.log(data)
	}

	return (
		<form onSubmit={onSubmit} className={s.filter}>
			<div className={s.filterCategory}>
				<h4 className="h4">Color</h4>
				{filterData?.color && filterData.color.map((item) => <FormControlLabel key={item} control={<Checkbox name={'colorCheckbox-' + item} color="primary" />} label={item} />)}
			</div>
			<div className={s.filterCategory}>
				<h4 className="h4">Diagonal</h4>
				{filterData?.diagonal && filterData.diagonal.map((item) => <FormControlLabel key={item} control={<Checkbox name={'diagonalCheckbox-' + item} color="primary" />} label={item} />)}
			</div>
			<div className={s.filterCategory}>
				<h4 className="h4">Category</h4>
				{filterData?.category && filterData.category.map((item) => <FormControlLabel key={item} control={<Checkbox name={'categoryCheckbox-' + item} color="primary" />} label={item} />)}
			</div>
			<div className={s.filterCategory}>
				<h4 className="h4">Rating</h4>
				<Slider value={rating} step={1} min={ratingMin} max={ratingMax} onChange={handleRatingChange} valueLabelDisplay="auto" aria-labelledby="range-slider" />
			</div>
			<div className={s.filterCategory}>
				<h4 className="h4">Price</h4>
				<Slider value={price} step={5} min={priceMin} max={priceMax} onChange={handlePriceChange} valueLabelDisplay="auto" aria-labelledby="range-slider" />
			</div>
			<Button type="submit" variant="contained" size="small" color="secondary">
				Filter
			</Button>
		</form>
	)
}
