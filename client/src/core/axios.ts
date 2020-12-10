import axios from 'axios'

axios.interceptors.request.use((config) => {
	config.headers['Access-Control-Allow-Origin'] = '*'
	config.headers['Access-Control-Allow-Headers'] = 'x-www-form-urlencoded, Origin, X-Requested-With, Content-Type, Accept, Authorization, *'
	//config.headers['Content-Type'] = 'multipart/form-data'
	return config
})
export { axios }
