import * as yup from 'yup'

export const loginSchema = yup.object().shape({
	login: yup.string().required('Обязательное поле'),
	password: yup.string().required('Обязательное поле'),
	rememberMe: yup.bool(),
})

export const registerSchema = yup.object().shape({
	name: yup.string().required('Обязательное поле'),
	surname: yup.string().required('Обязательное поле'),
	email: yup.string().required('Обязательное поле'),
	password: yup.string().required('Обязательное поле'),
})
