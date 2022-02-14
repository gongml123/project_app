<template>
	<view>
		<view class="head-box">2022年11月26日-2022年12月</view>
		<view style="height: 90rpx;"></view>
		<view class="info-box">
			<view class="info-title">
				<view class="">工时信息</view>
				<view class="">精力值：<text>100%</text></view>
			</view>
			<view class="info-details">
				<view class="">
					<view class="">系统有效出勤工时：</view>
					<view class="details">184小时</view>
				</view>
				<view class="">
					<view class="">实际有效出勤工时：：</view>
					<view class="details">184小时</view>
				</view>
				<view class="">
					<view class="">原因：</view>
					<view class="details">184小时</view>
				</view>
			</view>
		</view>
		<view class="info-title">
			<view class="">工时项目</view>
			<view class="">项目总数：<text>8个</text></view>
		</view>
		<view class="info-box">
			<view class="info-details" v-for="(item,idx) in 3" :key="idx">
				<view class="line"></view>
				<view class="">
					<view class="">业务类型：</view>
					<view class="details">184小时</view>
				</view>
				<view class="">
					<view class="">系列名称：</view>
					<view class="details">184小时</view>
				</view>
				<view class="">
					<view class="">项目搭载动力：</view>
					<view class="details">184小时</view>
				</view>
				<view class="">
					<view class="">精力值：</view>
					<view class="details">184小时</view>
				</view>
				<view class="">
					<view class="">工时：</view>
					<view class="details">184小时</view>
				</view>
			</view>
		</view>
		<view style="height: 134rpx;"></view>
		<view class="btn">
			<button type="default">提交</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.btn {
		width: 100%;
		height: 134rpx;
		background-color: #F4F4F4;
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 99;
		display: flex;
		align-items: center;
		justify-content: center;

		button {
			width: 660rpx;
			height: 100rpx;
			background-color: #004483;
			border-radius: 50rpx;
			line-height: 100rpx;
			font-size: 36rpx;
			font-family: PingFangSC-Semibold, PingFang SC;
			font-weight: 600;
			color: #F4F4F4;
		}
	}

	page {
		background-color: #F4F4F4;
	}

	.info-title {
		font-size: 30rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #333333;
		padding: 34rpx 48rpx 20rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;

		line-height: 42rpx;
		background-color: #F4F4F4;

		text {
			color: #E02020;
		}
	}

	.info-box {
		font-size: 30rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #333333;
		background-color: #FFFFFF;



		.info-details {

			.line {
				width: 100%;
				height: 20rpx;
				border: none;
				background-color: #f4f4f4;
				padding: 0;
			}

			>view {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 32rpx 26rpx 28rpx;
				height: 42rpx;
				border-bottom: 1rpx solid #F4F4F4;

				.details {
					color: #999999;
				}

				&:last-child {
					border: none;
				}
			}
		}


	}

	.head-box {
		width: 100%;
		height: 90rpx;
		background-color: #FFFFFF;
		position: fixed;
		top: 0;
		left: 0;
		// #ifdef H5
		top: 84rpx;
		// #endif
		text-align: center;
		line-height: 90rpx;
		z-index: 99;
		font-size: 26rpx;
		font-family: PingFangSC-Semibold, PingFang SC;
		font-weight: 600;
		color: #333333;
	}
</style>
