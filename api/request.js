export default (parameter = {}, data = {}) =>
new Promise((resolve, reject) => {
	let domin = parameter.domin ? parameter.domin : 'market'
	console.log(domin);
	uni.request({
		data: data,
		timeout: 10000,
		method: parameter.method,
		url: `http://dev.szlcar.com:8200/${parameter.url}`,
		header: {
			Authorization: uni.getStorageSync('token'),
			// 'content-type':'application/json',
			// areaNo:store.state.address.areaNo
		},
		success(res) {
			if (res.statusCode === 200) {
				if (res.data.code === 401 && parameter.login) {
					uni.navigateTo({
						url: '/pages/information/login'
					})
				} else if (res.data.code === 500) {
					resolve(res.data)
					// uni.showToast({icon:"none",duration:3000,title:res.data.message || '系统更新中,请稍后再重试!'})
				} else if (res.data.code === 40001) {
					resolve(res.data)
					//uni.showToast({icon:"none",duration:3000,title:parameter.desc+'接口错误!'})
				} else {
					resolve(res.data)
				}
			} else {
				// uni.showToast({icon:"none",duration:3000, title:res.data.message || '系统更新中,请稍后再重试!'})
			}
		},
		fail(err) {
			reject(err)
		}
	})
})
