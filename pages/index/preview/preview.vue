<template>
	<view>
		<view class="head-box">
			<view class="data">2022年11月26日-2022年12月</view>
			<view class="">
				<view class="schedule">
					<view style="width: 30%;"></view>
				</view>
				<view class="val-text"><text>30%</text> 精力值</view>
			</view>
		</view>
		<view style="height: 188rpx;"></view>
		<view class="info-box">
			<view class="info-details" v-for="(item,idx) in 3" :key="idx">
				<view class="line"></view>
				<view class="">
					<view class="">业务类型：</view>
					<view class="details">乘用车1</view>
				</view>
				<view class="">
					<view class="">系列名称：</view>
					<view class="details">B3系列</view>
				</view>
				<view class="">
					<view class="">项目搭载动力：</view>
					<view class="details">C589</view>
				</view>
				<view class="">
					<view class="">精力值：</view>
					<view class="details">23%</view>
				</view>
				<view class="">
					<view class="">工时：</view>
					<view class="details">1.25小时</view>
				</view>
			</view>
		</view>
		<view class="btn">
			<view class="info">
				<view class="">
					<view class="tle">项目总数：</view>
					<view class="val">8个</view>
				</view>
				<view class="">
					<view class="tle">精力值：</view>
					<view class="val">100%</view>
				</view>
			</view>
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
		height: 200rpx;
		padding: 0 40rpx;
		box-sizing: border-box;
		position: fixed;
		flex: 0;
		bottom: 0rpx;
		background-color: #FFFFFF;

		.info {
			display: flex;
			align-items: center;
			justify-content: space-between;

			>view {
				display: flex;
				align-items: center;
				padding: 14rpx 0 28rpx;
				height: 42rpx;
				font-size: r30px;
				font-family: PingFangSC-Semibold, PingFang SC;
				font-weight: 600;

				.tle {
					color: #333333;
				}

				.val {
					color: #E02020;
				}
			}
		}

		button {
			width: 100%;
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
		height: 188rpx;
		background-color: #FFFFFF;
		position: fixed;
		top: 0;
		left: 0;
		// #ifdef H5
		top: 84rpx;
		// #endif
		z-index: 99;
		display: flex;
		align-items: center;
		justify-content: space-around;
		flex-direction: column;

		.data {
			height: 36rpx;
			font-size: 26rpx;
			font-family: PingFangSC-Semibold, PingFang SC;
			font-weight: 600;
			color: #333333;
			line-height: 36rpx;
		}

		.schedule {
			width: 660rpx;
			height: 10rpx;
			background-color: #ECECEC;
			border-radius: 6rpx;

			>view {
				height: 10rpx;
				background-color: #F39656;
				border-radius: 6rpx;
			}
		}

		.val-text {
			text-align: center;
			padding-top: 12rpx;
			height: 32rpx;
			font-size: 22rpx;
			font-family: PingFangSC-Semibold, PingFang SC;
			font-weight: 600;
			color: #333333;
			line-height: 22rpx;

			text {
				color: #F39656;
				padding-right: 10rpx;
			}
		}
	}
</style>
