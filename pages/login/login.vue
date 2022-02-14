<template>
	<view class="login-box">
		<view style="height: 13vh;"></view>
		<view class="login-title">密码登录</view>
		<view class="from">
			<view class="">
				<view class="">账号</view>
				<input type="text" placeholder="请输入账号" v-model="username"
					placeholder-style="color:#B1B1B1;font-size: 30rpx;" />
			</view>
			<view class="">
				<view class="">密码</view>
				<input type="text" placeholder="请输入密码" v-model="password"
					placeholder-style="color:#B1B1B1;font-size: 30rpx;" />
			</view>
		</view>
		<view class="btn">
			<button type="default" :class="{'button-active':username && password}" @click="submit">
				<text>登录</text>
			</button>
		</view>
		<view class="Forgot">忘记密码?</view>
	</view>
</template>

<script>
	import login from '../../api/login.js'
	export default {
		data() {
			return {
				username: 'admin',
				password: 'admin123456'
			};
		},
		methods: {
			submit() {
				login.submitLogin({
					password: this.password,
					username: this.username
				}).then(res => {
					uni.setStorageSync('token', res.data.access_token)
					uni.navigateTo({
						url: '../index/index'
					})
				})

			}
		}
	}
</script>

<style lang="scss">
	.Forgot {
		height: 42px;
		font-size: 30rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #306BFF;
		line-height: 42rpx;
		padding: 0 52rpx;
		margin-top: 56rpx;
	}

	.login-box {
		width: 100vw;
		height: 100vh;
		background: url(../../static/login-bg.png) no-repeat bottom / cover;
	}

	.btn {
		margin-top: 160rpx;
		padding: 0 40rpx;

		button {
			width: 100%;
			height: 100rpx;
			background-color: #D8D8D8;
			border-radius: 54rpx;
			font-size: 36rpx;
			font-family: PingFangSC-Semibold, PingFang SC;
			font-weight: 600;
			color: #F4F4F4;
			line-height: 100rpx;
			display: flex;
			align-items: center;
			justify-content: center;

			&::after {
				border: none;
			}
		}

		.button-active {
			background-color: #004483;
		}
	}

	.from {
		padding: 0 26rpx;

		>view {
			display: flex;
			align-items: center;
			padding: 28rpx 30rpx;
			border-bottom: 1rpx solid #F4F4F4;
			font-size: 30rpx;
			font-family: PingFangSC-Medium, PingFang SC;
			font-weight: 500;
			color: #666666;
			line-height: 42rpx;
		}

		input {
			padding-left: 50rpx;
			font-size: 30rpx;
			color: #666666;
		}
	}

	.login-title {
		padding: 0 56rpx;
		height: 84px;
		font-size: 60rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #333333;
		line-height: 84px;
	}
</style>
