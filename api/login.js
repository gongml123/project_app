import request from './request';
export default {
	submitLogin: (data) => request({
			method: 'post',
			desc: '提交登录',
			url: 'auth/login'
		},
		data
	)
};
