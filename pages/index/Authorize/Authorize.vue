<template>
	<view>
		<view class="title">请选择项目</view>
		<view class="Category">
			<view class="">乘用车项目</view>
			<view class="">逸动DT系列量产</view>
			<view class="">乘用车3项目工时</view>
			<view class="">某某某项目</view>
		</view>
		<view class="btn">
			<button type="default" @click="open">授权给</button>
		</view>
		<uni-popup ref="popup" safeArea type="bottom">
			<view class="popup-box">
				<view class="popup-box-head">
					<view class="head-l" @click="close">取消</view>
					<view class="head-c">请选择人员</view>
					<view class="head-r">确定</view>
				</view>
				<scroll-view class="popup-box-cnt" scroll-y="true">
					<view class="item-people" v-for="(item,idx) in 10" :key="idx">
						<view class="">研究院 001 章三</view>
						<uni-icons :type="idx > 2 ? 'circle' : 'checkbox-filled'" size="24"
							:color="idx > 2 ? '#C9C9C9' : '#004483'"></uni-icons>
					</view>
				</scroll-view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}; 
		},
		onLoad() {

		},
		onReady() {
		},
		methods: {
			close() {
				this.$refs.popup.close()
			},
			open(){
				this.$refs.popup.open()
			}
		}
	}
</script>

<style lang="less">
	.popup-box {
		width: 100%;
		height: 50vh;
		background-color: #FFFFFF;
		border-radius: 40rpx 40rpx 0 0;
		overflow: hidden;

		.popup-box-cnt {
			width: 100%;
			height: calc(50vh - 100rpx);
			box-sizing: border-box;
			padding: 0 24rpx;

			.item-people {
				padding: 28rpx 20rpx;
				border-bottom: 1rpx solid rgba(#000, .1);
				display: flex;
				align-items: center;
				justify-content: space-between;

				&:last-child {
					border-bottom: none;
				}
			}
		}

		.popup-box-head {
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 100%;
			height: 100rpx;
			background-color: #F4F4F4;
			padding: 0 40rpx;
			box-sizing: border-box;

			>view {
				height: 42rpx;
				font-size: 30rpx;
				font-family: PingFangSC-Medium, PingFang SC;
				font-weight: 500;
				line-height: 42rpx;
			}

			.head-l {
				color: #999999;
			}

			.head-c {
				color: #333333;
			}

			.head-r {
				color: #3C7EFE;
			}
		}

	}

	page {
		background-color: #F4F4F4;
		padding: 0 48rpx;
		font-size: 30rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #333333;
	}

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

	.title {
		padding: 56rpx 0 26rpx;
	}

	.Category {
		>view {
			background-color: #FFFFFF;
			margin-bottom: 20rpx;
			width: 100%;
			height: 100rpx;
			text-align: center;
			line-height: 100rpx;
			border: 2rpx solid #306BFF;
			border-radius: 20rpx;
		}
	}
</style>
