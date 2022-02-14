<template>
	<view>
		<view class="head-box">
			<view class="">
				<view class="title">中国长安汽车集团有限公司</view>
				<view class="name">张三丰</view>
				<view class="Position">研究院主管</view>
				<view class="number">工号：0001</view>
			</view>
		</view>
		<view class="meun">
			<view class="title">消息中心</view>
			<view class="list">
				<view class="" @click="GotoUrl('/pages/index/bulletin/bulletin')">
					<image class="img" src="../../static/index/meun-1.png" mode=""></image>
					<view class="text">公告信息</view>
				</view>
				<view class="" @click="GotoUrl('/pages/index/Upcoming/Upcoming')">
					<image class="img" src="../../static/index/meun-2.png" mode=""></image>
					<view class="text">待办消息</view>
				</view>
				<view class="" @click="GotoUrl('/pages/index/Notice/Notice')">
					<image class="img" src="../../static/index/meun-3.png" mode=""></image>
					<view class="text">通知消息</view>
				</view>
			</view>
		</view>
		<view class="line"></view>
		<view class="meun">
			<view class="title">消息中心</view>
			<view class="list">
				<view @click="GotoUrl('/pages/index/toBeFilled/toBeFilled')">
					<image class="img" src="../../static/index/meun-4.png" mode=""></image>
					<view class="text">待填报</view>
				</view>
				<view @click="GotoUrl('/pages/index/pendingSubmit/pendingSubmit')">
					<image class="img" src="../../static/index/meun-5.png" mode=""></image>
					<view class="text">待提交</view>
				</view>
				<view class="" @click="GotoUrl('/pages/index/pendingReview/pendingReview')">
					<image class="img" src="../../static/index/meun-6.png" mode=""></image>
					<view class="text">待审核</view>
				</view>
				<view class="" @click="GotoUrl('/pages/index/passed/passed')">
					<image class="img" src="../../static/index/meun-7.png" mode=""></image>
					<view class="text">已通过</view>
				</view>
				<view class="" @click="GotoUrl('/pages/index/pass/pass')">
					<image class="img" src="../../static/index/meun-8.png" mode=""></image>
					<view class="text">未通过</view>
				</view>
			</view>
		</view>
		<view style="height: 110rpx;"></view>
		<view class="tab">
			<view class="">
				<image class="icon" src="../../static/tabbar/workbench.png" mode=""></image>
				<view class="text">工作台</view>
			</view>
			<view class="" @click="GotoUrl('/pages/fillIn/fillIn')">
				<image class="icon" src="../../static/tabbar/fillIna.png" mode=""></image>
				<view class="text">填报</view>
			</view>
			<view class="" @click="GotoUrl('/pages/project/project')">
				<image class="icon" src="../../static/tabbar/projecta.png" mode=""></image>
				<view class="text">项目</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabId: 0
			};
		},
		methods: {
			GotoUrl(url) {
				uni.navigateTo({
					url: url
				})
			}
		}
	}
</script>

<style lang="scss">
	.tab {
		width: 100%;
		height: 110rpx;
		background-color: #f4f4f4;
		display: flex;
		align-items: center;
		justify-content: space-around;
		position: fixed;
		bottom: 0;
		left: 0;

		>view {
			text-align: center;

			.text {
				height: 30rpx;
				font-size: 26rpx;
				font-family: PingFangSC-Semibold, PingFang SC;
				font-weight: 600;
				color: #999999;
				line-height: 30rpx;
			}

			.icon {
				width: 60rpx;
				height: 60rpx;
			}
		}
	}

	.line {
		width: 100%;
		height: 20rpx;
		background-color: #F4F4F4;
	}

	.meun {
		padding: 52rpx 30rpx 0;
		font-family: PingFangSC-Semibold, PingFang SC;
		font-weight: 600;
		color: #333333;

		.title {
			height: 44rpx;
			font-size: 32rpx;
			line-height: 44rpx;
		}

		.list {
			display: flex;
			align-items: center;
			flex-wrap: wrap;

			>view {
				width: 33%;
				text-align: center;
				padding: 20rpx 0;

				.img {
					width: 100rpx;
					height: 100rpx;
				}

				.text {
					height: 36rpx;
					font-size: 26rpx;
					line-height: 36rpx;
				}
			}
		}
	}

	.head-box {
		padding: 34rpx 30rpx 0;

		>view {
			width: 100%;
			height: 340rpx;
			background: url(../../static/head-bg.png) no-repeat center / cover;
			padding: 0 36rpx;
			box-sizing: border-box;
			color: #FFFFFF;
			font-family: PingFangSC-Semibold, PingFang SC;
			font-weight: 600;

			.title {
				height: 42rpx;
				font-size: 30rpx;
				line-height: 42rpx;
				padding: 40rpx 0 26rpx;
			}

			.name {
				height: 56rpx;
				font-size: 40rpx;
				line-height: 56rpx;
			}

			.Position {
				height: 36rpx;
				font-size: 26rpx;
				line-height: 26rpx;
				padding: 22rpx 0 34rpx;
			}

			.number {
				height: 36rpx;
				font-size: 26rpx;
				line-height: 36rpx;
				padding: 20rpx 0;
				border-top: 2rpx solid rgba(#FFFFFF, .5);
			}
		}
	}
</style>
