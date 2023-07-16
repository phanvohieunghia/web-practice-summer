import request from './index'

class UserService {
	static getList(params) {
		return request({
			url: 'https://reqres.in/api/users/',
			method: 'get',
			params,
		}).then((res) => res.data)
	}
}

export default UserService
