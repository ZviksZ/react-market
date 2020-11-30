import * as React from 'react'
import { useForm } from 'react-hook-form'
import { loginSchema } from '../../../services/helpers/validation'
import { useDispatch } from 'react-redux'
import { TextField } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { yupResolver } from '@hookform/resolvers/yup'
import Grid from '@material-ui/core/Grid'
import { login } from '../../../store/ducks/auth/actionCreators'

interface IFormInputs {
	username: string
	password: string
}

type Props = {
	closeModal: (param: boolean) => void
}

export const LoginForm: React.FC<Props> = ({ closeModal }: Props) => {
	const dispatch = useDispatch()

	const { register, handleSubmit, errors } = useForm<IFormInputs>({
		resolver: yupResolver(loginSchema),
		/*validationSchema: loginSchema,*/
	})

	const onSubmit = (data: IFormInputs) => {
		dispatch(login(data))

		closeModal(false)
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
