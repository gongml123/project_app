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
		<view class="fillIn-box">
			<view class="title">请选择填报的项目</view>
			<view class="category">
				<view class="">业务类型</view>
				<picker class="picker" @change="bindPickerChange" :value="index" :range="array" range-key="name">
					<view class="uni-input">
						<text>{{array[index].name}}</text>
						<uni-icons type="right" color="#666666"></uni-icons>
					</view>
				</picker>
			</view>
			<view class="category">
				<view class="">系列名称</view>
				<picker class="picker" @change="bindPickerChange" :value="index" :range="array" range-key="name">
					<view class="uni-input">
						<text>{{array[index].name}}</text>
						<uni-icons type="right" color="#666666"></uni-icons>
					</view>
				</picker>
			</view>
			<picker></picker>
			<view class="category">
				<view class="">项目搭载动力</view>
				<picker class="picker" @change="bindPickerChange" :value="index" :range="array" range-key="name">
					<view class="uni-input">
						<text>{{array[index].name}}</text>
						<uni-icons type="right" color="#666666"></uni-icons>
					</view>
				</picker>
			</view>
			<view class="category">
				<view class="">精力占比</view>
				<view class="">
					<input type="text" placeholder="请输入精力值" />
				</view>
			</view>
		</view>
		<view class="btn">
			<button type="default">保存</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				array: [{
					name: '中国'
				}, {
					name: '美国'
				}, {
					name: '巴西'
				}, {
					name: '日本'
				}],
				index: 0
			};
		},
		methods: {
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为：' + e.detail.value)
				this.index = e.detail.value
			},
		},
		onNavigationBarButtonTap() {
			uni.navigateTo({
				url:'../preview/preview'
			})
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #F4F4F4;
	}

	.btn {
		width: 100%;
		height: 100rpx;
		padding: 0 40rpx;
		box-sizing: border-box;
		position: fixed;
		flex: 0;
		bottom: 68rpx;

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

	.fillIn-box {
		padding: 34rpx 48rpx;
		font-weight: 500;
		color: #333333;
		font-family: PingFangSC-Medium, PingFang SC;

		.category {
			background-color: #FFFFFF;
			display: flex;
			align-items: center;
			justify-content: space-between;
			height: 100rpx;
			padding: 0 20rpx;
			border-radius: 20rpx;
			margin-top: 20rpx;

			.picker {
				display: flex;
			}

			>view {
				height: 42rpx;
				font-size: 30rpx;
				line-height: 42rpx;

				input {
					flex: 1;
					text-align: right;
					font-size: 30rpx;
				}
			}
		}

		.title {
			height: 42rpx;
			font-size: 30rpx;
			font-family: PingFangSC-Medium, PingFang SC;
			line-height: 42rpx;
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
