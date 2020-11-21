import * as React      from 'react'
import { useForm }     from 'react-hook-form'
import { loginSchema } from '../../../services/helpers/validation'
import { useDispatch } from 'react-redux'
import { TextField }   from '@material-ui/core'
import Button          from '@material-ui/core/Button'
import { yupResolver } from '@hookform/resolvers/yup'
import Grid            from '@material-ui/core/Grid'

interface IFormInputs {
	login: string
	password: string
}

export const LoginForm: React.FC = () => {
	const dispatch = useDispatch()

	const { register, handleSubmit, errors } = useForm<IFormInputs>({
		resolver: yupResolver(loginSchema),
	})

	const onSubmit = (data: any) => {
		console.log(data)
		//dispatch(login(data.login, data.password))
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="username"
						label="Username"
						error={!!errors.login}
						helperText={errors.login ? errors.login.message : ''}
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
						required
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
