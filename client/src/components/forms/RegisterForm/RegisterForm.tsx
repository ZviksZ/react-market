import * as React                      from 'react'
import { useForm }                     from 'react-hook-form'
import { registerSchema } from '../../../services/helpers/validation'
import { useDispatch }                 from 'react-redux'
import { TextField }                   from '@material-ui/core'
import Button                          from '@material-ui/core/Button'
import { yupResolver }                 from '@hookform/resolvers/yup'
import Grid                            from '@material-ui/core/Grid'

interface IFormInputs {
	name: string
	surname: string
	email: string
	password: string
}

export const RegisterForm: React.FC = () => {
	const dispatch = useDispatch()

	const { register, handleSubmit, errors } = useForm<IFormInputs>({
		resolver: yupResolver(registerSchema),
	})

	const onSubmit = (data: any) => {
		console.log(data)
		//dispatch(register(data))
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<TextField
						autoComplete="fname"
						name="username"
						variant="outlined"
						required
						fullWidth
						error={!!errors.name}
						helperText={errors.name ? errors.name.message : ''}
						inputRef={register}
						id="username"
						label="Username"
						autoFocus
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						variant="outlined"
						required
						fullWidth
						error={!!errors.surname}
						helperText={errors.surname ? errors.surname.message : ''}
						inputRef={register}
						id="fullname"
						label="Fullname"
						name="fullname"
						autoComplete="lname"
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						variant="outlined"
						required
						fullWidth
						id="email"
						error={!!errors.email}
						helperText={errors.email ? errors.email.message : ''}
						inputRef={register}
						label="Email"
						name="email"
						autoComplete="email"
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						variant="outlined"
						required
						fullWidth
						error={!!errors.password}
						helperText={errors.password ? errors.password.message : ''}
						inputRef={register}
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						variant="outlined"
						required
						fullWidth
						error={!!errors.password}
						helperText={errors.password ? errors.password.message : ''}
						inputRef={register}
						name="password2"
						label="Repeat password"
						type="password"
						id="password2"
						autoComplete="current-password"
					/>
				</Grid>
				<Grid item xs={12}>
					<Button type="submit" size="large" color="primary" fullWidth variant="contained">
						Register
					</Button>
				</Grid>
			</Grid>

		</form>
	)
}
