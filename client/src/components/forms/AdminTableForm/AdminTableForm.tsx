import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { Button, TextField } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import { selectProducts } from '../../../store/ducks/product/selectors'

interface IFormInputs {
	name: string
	image: string
	price: number
	purchases: number
	rating: number
	diagonal: number
	category: string
	color: string
	text: string
}

export const AdminTableForm: React.FC = () => {
	const dispatch = useDispatch()
	const { productFormData } = useSelector(selectProducts)

	const { register, handleSubmit, errors } = useForm<IFormInputs>({})

	const onSubmit = (data: IFormInputs) => {
		//dispatch(login(data))
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="form">
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<TextField
						variant="outlined"
						margin="normal"
						fullWidth
						id="username"
						label="Username"
						error={!!errors.name}
						helperText={errors.name ? errors.name.message : ''}
						inputRef={register}
						name="username"
						autoComplete="email"
						autoFocus
						className="form-input"
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						variant="outlined"
						margin="normal"
						fullWidth
						id="username"
						label="Username"
						error={!!errors.image}
						helperText={errors.image ? errors.image.message : ''}
						inputRef={register}
						name="username"
						autoComplete="email"
						autoFocus
						className="form-input"
					/>
				</Grid>
				<Grid item xs={6}>
					<TextField
						variant="outlined"
						margin="normal"
						fullWidth
						id="username"
						label="Username"
						error={!!errors.price}
						helperText={errors.price ? errors.price.message : ''}
						inputRef={register}
						name="username"
						autoComplete="email"
						autoFocus
						className="form-input"
					/>
				</Grid>
				<Grid item xs={6}>
					<TextField
						variant="outlined"
						margin="normal"
						fullWidth
						id="username"
						label="Username"
						error={!!errors.purchases}
						helperText={errors.purchases ? errors.purchases.message : ''}
						inputRef={register}
						name="username"
						autoComplete="email"
						autoFocus
						className="form-input"
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						variant="outlined"
						margin="normal"
						fullWidth
						id="username"
						label="Username"
						error={!!errors.rating}
						helperText={errors.rating ? errors.rating.message : ''}
						inputRef={register}
						name="username"
						autoComplete="email"
						autoFocus
						className="form-input"
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						variant="outlined"
						margin="normal"
						fullWidth
						id="username"
						label="Username"
						error={!!errors.category}
						helperText={errors.category ? errors.category.message : ''}
						inputRef={register}
						name="username"
						autoComplete="email"
						autoFocus
						className="form-input"
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						variant="outlined"
						margin="normal"
						fullWidth
						id="username"
						label="Username"
						error={!!errors.color}
						helperText={errors.color ? errors.color.message : ''}
						inputRef={register}
						name="username"
						autoComplete="email"
						autoFocus
						className="form-input"
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						variant="outlined"
						margin="normal"
						fullWidth
						id="username"
						label="Username"
						error={!!errors.diagonal}
						helperText={errors.diagonal ? errors.diagonal.message : ''}
						inputRef={register}
						name="username"
						autoComplete="email"
						autoFocus
						className="form-input"
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						variant="outlined"
						margin="normal"
						fullWidth
						id="username"
						label="Username"
						error={!!errors.text}
						helperText={errors.text ? errors.text.message : ''}
						inputRef={register}
						name="username"
						autoComplete="email"
						autoFocus
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
