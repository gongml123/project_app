<template>
	<view>
		<view class="box-top" v-for="(item,index) in dataArray" :key="index">
			<view class="left-box-top">{{item.time}}</view> <!-- 左边 -->

			<view class="line" :class="{active:item.active,none:index==(dataArray.length-1)}">
				<!-- 中线 -->
				<view class="dot" :class="{active:item.active}"></view> <!-- 圆点 -->
			</view>

			<view class="right-box-top">
				<!-- 右边 -->
				<view class="right-box-top-l">
					<view>已审批</view>
				</view>
				<view class="right-box-top-r">
					<view>{{item.title}} <text>项目管理处经理</text></view>
					<view class="content">{{item.content}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			dataArray: {
				type: Array
			}
		},
		data() {
			return {}
		},
		mounted() {},
		methods: {}
	}
</script>

<style scoped="scoped" lang="less">
	.box-top {
		width: 100%;
		min-height: 120rpx;
		box-sizing: border-box;
		display: flex;
		flex-direction: row;

		.left-box-top {
			width: 180rpx;
			text-align: center;
			color: #4694EB;
			font-size: 20rpx;
		}

		.line {
			width: 4rpx;
			background-color: rgba(228, 231, 237, 1);
			margin: 0 30rpx 0 30rpx;

			.dot {
				width: 20rpx;
				height: 20rpx;
				background-color: rgba(228, 231, 237, 1);
				border-radius: 50%;
				position: relative;
				left: -8rpx;
			}
		}

		.right-box-top {
			flex: 1;
			padding: 0 0 60rpx 0;
			display: flex;

			.right-box-top-l {
				width: 38rpx;
				color: #4694EB;
				margin-right: 30rpx;

				view {
					border: 1rpx solid #4694EB;
					font-size: 20rpx;
					border-radius: 4rpx;
					padding: 4rpx;
					box-sizing: border-box;
				}
			}

			.right-box-top-r {
				flex: 1;
				font-size: 28rpx;
				color: #3333333;
				font-weight: bold;

				>view {
					line-height: 40rpx;

					text {
						font-size: 24rpx;
						font-weight: 400;
						color: #666666;
						margin-left: 6rpx;
					}
				}

				.content {
					margin-top: 6rpx;
				}
			}
		}
	}

	//激活元素
	.active {
		background-color: rgba(44, 143, 233, 1) !important;
	}

	// 隐藏元素
	.none {
		background-color: rgba(0, 0, 0, 0) !important;
	}
</style>
