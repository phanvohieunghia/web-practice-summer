import axios from 'axios'

const configOption = {
	// baseURL: API_ROOT,
	timeout: 5000,
}
const instance = axios.create(configOption)

instance.interceptors.request.use(
	(config) => {
		return config
	},
	(err) => {
		Promise.reject(err)
	}
)
instance.interceptors.response.use(
	(response) => {
		return response
	},
	(err) => {
		return Promise.reject(err)
	}
)

export default instance
