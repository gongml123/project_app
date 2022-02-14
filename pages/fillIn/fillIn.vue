<template>
	<view>
		<view class="title">2022年11月26日-2022年12月</view>
		<scroll-view class="scroll-box" scroll-x="true">
			<view class="scroll-view">
				<view class="box">
					<t-table @change="change">
						<t-tr>
							<t-th>标题</t-th>
							<t-th>标题</t-th>
							<t-th>标题</t-th>
							<t-th>标题</t-th>
							<t-th>标题</t-th>
							<t-th>标题</t-th>
							<t-th>标题</t-th>
							<t-th>标题</t-th>
						</t-tr>
						<t-tr v-for="item in 10" :key="item">
							<t-td>内容</t-td>
							<t-td>内容</t-td>
							<t-td>内容</t-td>
							<t-td>内容</t-td>
							<t-td>内容</t-td>
							<t-td>内容内容内容</t-td>
							<t-td>内容</t-td>
							<t-td>内容</t-td>
						</t-tr>
					</t-table>
				</view>
				<view style="height: 120rpx;"></view>
			</view>
		</scroll-view>
		<view class="btn">
			<button type="default" @click="GotoUrl('/pages/index/workingHours/workingHours')">已知晓</button>
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
		methods: {
			change(e) {
				console.log(e.detail);
			},
			edit(item) {
				uni.showToast({
					title: item.name,
					icon: 'none'
				});
			},
			GotoUrl(url){
				uni.navigateTo({
					url:url
				})
			}
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #f4f4f4;
	}
	.btn {
		width: 100%;
		height: 134rpx;
		background-color: #F4F4F4;
		position: fixed;
		left: 0;
		bottom:0;
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
		text-align: center;
		font-size: 26rpx;
		font-family: PingFangSC-Semibold, PingFang SC;
		font-weight: 600;
		color: #333333;
		line-height: 36rpx;
		padding: 20rpx 0;
		background-color: #FFFFFF;
	}

	.scroll-box {
		width: 100%;
		background-color: #FFFFFF;
		.scroll-view {
			width: 1300rpx;
			padding: 0 32rpx;
			>view {
				display: flex;
				align-items: center;
			}

			.ul {
				height: 36rpx;
				font-size: 26rpx;
				font-family: PingFangSC-Semibold, PingFang SC;
				font-weight: 600;
				color: #333333;
				line-height: 36rpx;

				.li {
					min-height: 200rpx;
					background-color: #F4F4F4;
					border-right: 1rpx solid #C9C9C9;
				}
			}
		}
	}
</style>
