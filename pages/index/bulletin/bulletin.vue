<template>
	<view>
		<view class="ipt-box">
			<view class="ipt">
				<uni-icons type="search" color="#C4C4C4" size="22"></uni-icons>
				<input type="text" placeholder="请输入" placeholder-style="color:#999999" />
			</view>
			<view class="text">取消</view>
		</view>
		<view style="height: 88rpx;"></view>
		<view class="list-box">
			<view v-for="(item,idx) in 10" :key="idx" @click="GotoUrl">
				<image class="Notice" src="/static/index/Notice.png" mode=""></image>
				<view class="info">
					<view class="title">2022年1月工时新增移动端填报！</view>
					<view class="cnt">本次迭代更新增加了移动端填报哦，快来体验</view>
					<view class="data">2021.10.30</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods:{
			GotoUrl(){
				uni.navigateTo({
					url:'/pages/index/NotificationDetails/NotificationDetails'
				})
			}
		}
	}
</script>

<style lang="scss">
	.list-box {
		padding: 32rpx;

		>view {
			display: flex;
			padding: 40rpx 0 26rpx;
			border-bottom: 1rpx solid #F4F4F4;

			&:last-child {
				border-bottom: none;
			}

			.Notice {
				width: 80rpx;
				height: 80rpx;
			}

			.info {
				flex: 1;
				margin-left: 30rpx;
				font-family: PingFangSC-Semibold, PingFang SC;


				.title {
					height: 42rpx;
					font-size: 30rpx;
					line-height: 42rpx;
					font-weight: 600;
					color: #333333;
				}

				.cnt {
					font-size: 30rpx;
					font-weight: 500;
					color: #999999;
					line-height: 42rpx;
					margin: 12rpx 0;
				}

				.data {
					height: 36rpx;
					font-size: 26rpx;
					font-family: PingFangSC-Medium, PingFang SC;
					font-weight: 500;
					color: #999999;
					line-height: 36rpx;
				}
			}
		}
	}

	.ipt-box {
		padding: 16rpx 42rpx;
		display: flex;
		align-items: center;
		width: 100%;
		position: fixed;
		box-sizing: border-box;
		top: 0;
		left: 0;
		z-index: 99;
		background-color: #FFFFFF;
		// #ifdef H5
		top: 84rpx;

		// #endif
		.ipt {
			display: flex;
			align-items: center;
			flex: 1;
			height: 80rpx;
			background-color: #F4F4F4;
			border-radius: 42rpx;
			padding: 0 28rpx;

			input {
				flex: 1;
				margin-left: 16rpx;
			}
		}

		.text {
			height: 42rpx;
			font-size: 30rpx;
			font-family: PingFangSC-Semibold, PingFang SC;
			font-weight: 600;
			color: #666666;
			line-height: 42rpx;
			margin-left: 34rpx;
		}
	}
</style>
