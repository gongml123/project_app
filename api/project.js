import request from './request';
export default {
	getProjectList: (data) => request({
			method: 'post',
			desc: '提交登录',
			url: 'item/mobile/project/list'
		},
		data
	)
};
