<template>
	<view>
		<view class="title">2022年11月26日-2022年12月</view>
		<view class="box">
			<t-table @change="change">
				<t-tr>
					<t-th>类型名称</t-th>
					<t-th>工时(h)</t-th>
				</t-tr>
				<t-tr v-for="item in 10" :key="item">
					<t-td>名称</t-td>
					<t-td>176</t-td>
				</t-tr>
			</t-table>
		</view>
		<view class="tips">
			<view class="" style="padding-bottom: 10rpx;">备注:</view>
			<view class="">实际有效出勤工时与系统有效出勤工时不符，可点击“修改”有效出勤工时，许备注原因（格式xxxx事项xxxx小时）</view>
		</view>
		<view class="btn">
			<view class="">修改</view>
			<view class="" @click="GotoUrl('/pages/index/toBeFilled/toBeFilled')">确认</view>
		</view>
	</view>
</template>

<script>
	import tTable from '@/components/t-table/t-table.vue';
	import tTh from '@/components/t-table/t-th.vue';
	import tTr from '@/components/t-table/t-tr.vue';
	import tTd from '@/components/t-table/t-td.vue';
	export default {
		components: {
			tTable,
			tTh,
			tTr,
			tTd
		},
		data() {
			return {

			};
		},
		methods:{
			GotoUrl(url){
				uni.navigateTo({
					url:url
				})
			}
		}
	}
</script>

<style lang="scss">
	.btn {
		width: 100%;
		height: 132rpx;
		background-color: #FFFFFF;
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 999;
		display: flex;
		align-items: center;
		justify-content: center;

		>view {
			width: 334rpx;
			height: 100rpx;
			text-align: center;
			line-height: 100rpx;
			color: #FFFFFF;
			font-size: 36rpx;
			font-weight: 600;
			&:first-child{
				background-color:#C9C9C9 ;
				border-radius: 55rpx 0 0 55rpx;
			}
			&:last-child{
				background-color: #004483;
				border-radius:0 55rpx 55rpx 0;
			}
		}
	}

	.tips {
		padding: 20rpx 32rpx;
		font-size: 26rpx;
		color: #E02020;
	}

	.title {
		text-align: center;
		font-size: 26rpx;
		font-family: PingFangSC-Semibold, PingFang SC;
		font-weight: 600;
		color: #333333;
		line-height: 36rpx;
		padding: 20rpx 0;
		background-color: #FFFFFF;
	}

	.box {
		padding: 0 32rpx;
	}
</style>
