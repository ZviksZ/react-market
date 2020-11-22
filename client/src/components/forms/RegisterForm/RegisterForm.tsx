import * as React from 'react'
import { useForm } from 'react-hook-form'
import { registerSchema } from '../../../services/helpers/validation'
import { useDispatch } from 'react-redux'
import { TextField } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { yupResolver } from '@hookform/resolvers/yup'
import Grid from '@material-ui/core/Grid'
import { registerUser } from '../../../store/ducks/auth/actionCreators'

interface IFormInputs {
	username: string
	fullname: string
	email: string
	password: string
	password2: string
}

type Props = {
	closeModal: (param: boolean) => void
}

export const RegisterForm: React.FC<Props> = ({ closeModal }: Props) => {
	const dispatch = useDispatch()

	const { register, handleSubmit, errors } = useForm<IFormInputs>({
		resolver: yupResolver(registerSchema),
	})

	const onSubmit = (data: IFormInputs) => {
		dispatch(registerUser(data))

		closeModal(false)
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
						error={!!errors.username}
						helperText={errors.username ? errors.username.message : ''}
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
						error={!!errors.fullname}
						helperText={errors.fullname ? errors.fullname.message : ''}
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
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						variant="outlined"
						required
						fullWidth
						error={!!errors.password2}
						helperText={errors.password2 ? errors.password2.message : ''}
						inputRef={register}
						name="password2"
						label="Repeat password"
						type="password"
						id="password2"
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
