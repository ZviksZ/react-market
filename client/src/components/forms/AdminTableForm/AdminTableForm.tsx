import * as React      from 'react'
import { useDispatch } from 'react-redux'
import { useForm }     from 'react-hook-form'
import { Button, TextField }   from '@material-ui/core'
import Grid            from '@material-ui/core/Grid'

interface IFormInputs {
	username: string
	password: string
}

export const AdminTableForm: React.FC = () => {
	const dispatch = useDispatch()

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
						error={!!errors.username}
						helperText={errors.username ? errors.username.message : ''}
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
						name="password"
						error={!!errors.password}
						helperText={errors.password ? errors.password.message : ''}
						inputRef={register}
						label="Password"
						type="password"
						id="password"
						className="form-input"
						autoComplete="current-password"
					/>
				</Grid>
				<Grid item xs={12}>
					<Button type="submit" color="primary" size="large" fullWidth variant="contained">
						Login
					</Button>
				</Grid>
			</Grid>
		</form>
	)
}
