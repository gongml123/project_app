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
		<view class="list-box" >
			<view class="" v-for="(item,idx) in 10" :key="idx">
				<view class="">12月项目工时未填报</view>
				<view class="">2021.10.30 18:22:23</view>
			</view>
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
	.list-box{
		padding:0  42rpx;
		>view{
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 38rpx 0 36rpx;
			border-bottom: 1rpx solid #F4F4F4;
			&:last-child{
				border-bottom: none;
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
