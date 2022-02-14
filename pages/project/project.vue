<template>
	<view>
		<view class="ipt-box">
			<view class="ipt">
				<uni-icons type="search" color="#C4C4C4" size="22"></uni-icons>
				<input type="text" placeholder="请输入" placeholder-style="color:#999999" />
			</view>
			<view class="text">取消</view>
		</view>
		<view style="height: 110rpx;"></view>
		<view class="cnt-box">
			<view class="box-type" v-for="(item,idx) in 3" :key="idx">
				<view class="box-type-t" @click="idxId = idx">
					<view class="">乘用车项目</view>
					<uni-icons :type="idx == idxId ? 'bottom':'right'" color="#666666" size="18"></uni-icons>
				</view>
				<view class="box-type-c" v-if="idx == idxId">
					<view class="">
						<view class="">在研</view>
						<uni-icons type="right" color="#666666" size="18"></uni-icons>
					</view>
					<view class="">
						<view class="">量产</view>
						<uni-icons type="right" color="#666666" size="18"></uni-icons>
					</view>
					<view class="">
						<view class="">整车</view>
						<uni-icons type="right" color="#666666" size="18"></uni-icons>
					</view>
					<view class="">
						<view class="">电池</view>
						<uni-icons type="right" color="#666666" size="18"></uni-icons>
					</view>
					<view class="">
						<view class="">技术研究</view>
						<uni-icons type="right" color="#666666" size="18"></uni-icons>
					</view>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				idxId: 0
			};
		},
		onNavigationBarButtonTap() {
			uni.navigateTo({
				url:'/pages/project/projectDetails/projectDetails'
			})
		}
	}
</script>

<style lang="scss">
	.cnt-box {
		padding: 22rpx 42rpx 0;
		height: 42rpx;
		font-size: 30rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #333333;
		line-height: 42rpx;

		.box-type-t {
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-bottom: 1rpx solid #F4F4F4;
			padding: 20rpx 0;

		}

		.box-type-c {
			padding: 20rpx 0 20rpx 20rpx;

			>view {
				padding: 20rpx 0;
				display: flex;
				align-items: center;
				justify-content: space-between;
				border-bottom: 1rpx solid #F4F4F4;
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
