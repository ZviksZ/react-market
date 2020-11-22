import * as yup from 'yup'

export const loginSchema = yup.object().shape({
	username: yup.string().required('Обязательное поле'),
	password: yup.string().required('Обязательное поле'),
})

export const registerSchema = yup.object().shape({
	username: yup.string().required('Обязательное поле'),
	fullname: yup.string().required('Обязательное поле'),
	email: yup.string().required('Обязательное поле'),
	password: yup.string().required('Обязательное поле'),
	password2: yup.string().required('Обязательное поле'),
})
