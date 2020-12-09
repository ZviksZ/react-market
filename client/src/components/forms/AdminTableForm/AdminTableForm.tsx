import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { Button, TextField } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import { selectProducts } from '../../../store/ducks/product/selectors'
import { useEffect, useState } from 'react'
import { NumberFormatCustom } from '../FormFields'
import Box from '@material-ui/core/Box'
import { Rating } from '@material-ui/lab'
import Typography from '@material-ui/core/Typography'
import { createProduct, updateProduct } from '../../../store/ducks/product/actionCreators'

interface IFormInputs {
	name: string
	price: number
	purchase: number
	diagonal: number
	category: string
	color: string
	text: string
}
type Props = {
	closeForm: (param: boolean) => void
}
export const AdminTableForm: React.FC<Props> = ({ closeForm }) => {
	const dispatch = useDispatch()
	const [files, setFiles] = useState<any>([])
	const [rating, setRating] = useState<number | null>(0)
	const { productFormData } = useSelector(selectProducts)

	const { register, handleSubmit, errors } = useForm<IFormInputs>({})

	useEffect(() => {
		productFormData && setRating(+productFormData.rating)
	}, [productFormData])

	const onSubmit = (data: IFormInputs) => {
		if (productFormData && productFormData._id) {
			dispatch(updateProduct(productFormData._id, { ...data, rating, image: files[0] }))
		} else {
			dispatch(
				createProduct({
					...data,
					price: +data.price,
					purchase: +data.purchase,
					diagonal: +data.diagonal,
					rating,
					/*image: files[0],*/
				}),
			)
		}

		closeForm(false)
	}

	const fileUpload = (e: any) => {
		const files = e.target.files
		const filesArr = Array.prototype.slice.call(files)
		setFiles([...files, ...filesArr])
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="form">
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<label htmlFor="upload-photo">
						<input onChange={fileUpload} style={{ display: 'none' }} id="upload-photo" name="upload-photo" type="file" />

						<Button color="secondary" variant="contained" component="span">
							Upload image
						</Button>
						{files && files.length > 0 && <p className="mt">{files[0].name}</p>}
					</label>
				</Grid>
				<Grid item xs={12}>
					<Box component="fieldset" mt={1} mb={1} borderColor="transparent">
						<Typography component="legend">Rating</Typography>
						<Rating
							name="simple-controlled"
							value={rating}
							onChange={(event, newValue) => {
								setRating(newValue)
							}}
						/>
					</Box>
				</Grid>
				<Grid item xs={6}>
					<TextField
						variant="outlined"
						margin="normal"
						fullWidth
						label="Name"
						error={!!errors.name}
						defaultValue={(productFormData && productFormData.name) || ''}
						helperText={errors.name ? errors.name.message : ''}
						inputRef={register}
						name="name"
						className="form-input"
					/>
				</Grid>
				<Grid item xs={6}>
					<TextField
						className="form-input"
						label="Price"
						inputRef={register}
						name="price"
						defaultValue={(productFormData && productFormData.price) || ''}
						fullWidth
						margin="normal"
						variant="outlined"
						error={!!errors.price}
						helperText={errors.price ? errors.price.message : ''}
						InputProps={{
							inputComponent: NumberFormatCustom,
						}}
					/>
				</Grid>
				<Grid item xs={6}>
					<TextField
						className="form-input"
						label="Purchases"
						inputRef={register}
						fullWidth
						name="purchase"
						defaultValue={productFormData && productFormData.purchase}
						margin="normal"
						variant="outlined"
						error={!!errors.purchase}
						helperText={errors.purchase ? errors.purchase.message : ''}
						InputProps={{
							inputComponent: NumberFormatCustom,
						}}
					/>
				</Grid>
				<Grid item xs={6}>
					<TextField
						variant="outlined"
						margin="normal"
						fullWidth
						label="Category"
						error={!!errors.category}
						defaultValue={(productFormData && productFormData.category) || ''}
						helperText={errors.category ? errors.category.message : ''}
						inputRef={register}
						name="category"
						className="form-input"
					/>
				</Grid>
				<Grid item xs={6}>
					<TextField
						variant="outlined"
						margin="normal"
						fullWidth
						label="Color"
						error={!!errors.color}
						defaultValue={(productFormData && productFormData.color) || ''}
						helperText={errors.color ? errors.color.message : ''}
						inputRef={register}
						name="color"
						className="form-input"
					/>
				</Grid>
				<Grid item xs={6}>
					<TextField
						className="form-input"
						label="Diagonal"
						inputRef={register}
						name="diagonal"
						defaultValue={(productFormData && productFormData.diagonal) || ''}
						fullWidth
						margin="normal"
						variant="outlined"
						error={!!errors.diagonal}
						helperText={errors.diagonal ? errors.diagonal.message : ''}
						InputProps={{
							inputComponent: NumberFormatCustom,
						}}
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						variant="outlined"
						margin="normal"
						fullWidth
						label="Text"
						multiline
						rows={2}
						rowsMax={4}
						error={!!errors.text}
						defaultValue={(productFormData && productFormData.text) || ''}
						helperText={errors.text ? errors.text.message : ''}
						inputRef={register}
						name="text"
						className="form-input"
					/>
				</Grid>
				<Grid item xs={12}>
					<Button type="submit" color="primary" size="large" fullWidth variant="contained">
						{productFormData ? 'Update product' : 'Add product'}
					</Button>
				</Grid>
			</Grid>
		</form>
	)
}
