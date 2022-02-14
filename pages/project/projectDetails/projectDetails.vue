<template>
	<view>
		<view class="head-box">2022年11月26日-2022年12月</view>
		<view style="height: 86rpx;"></view>
		<view class="project-type">
			<view class="project-type-t" :class="{'project-type-active':projectTypeId == 1}">
				<view class="">项目信息</view>
				<view class="is-show" @click="projectTypeId = 1">{{projectTypeId == 1 ? '折叠' : '展开'}}</view>
			</view>
			<view class="project-type-c" v-if="projectTypeId == 1">
				<view class="">
					<view><text class="c-notice">*</text>业务类型：</view>
					<picker @change="bindPickerChange" :value="index" :range="array" range-key="name">
						<view class="c-picker">
							<text>{{array[index].name}}</text>
							<uni-icons type="right" color="#666666"></uni-icons>
						</view>
					</picker>
				</view>
				<view class="">
					<view><text class="c-notice">*</text>业务类型：</view>
					<picker @change="bindPickerChange" :value="index" :range="array" range-key="name">
						<view class="c-picker">
							<text>{{array[index].name}}</text>
							<uni-icons type="right" color="#666666"></uni-icons>
						</view>
					</picker>
				</view>
				<view class="">
					<view><text class="c-notice">*</text>业务类型：</view>
					<picker @change="bindPickerChange" :value="index" :range="array" range-key="name">
						<view class="c-picker">
							<text>{{array[index].name}}</text>
							<uni-icons type="right" color="#666666"></uni-icons>
						</view>
					</picker>
				</view>
				<view class="">
					<view><text class="c-notice">*</text>业务类型：</view>
					<picker @change="bindPickerChange" :value="index" :range="array" range-key="name">
						<view class="c-picker">
							<text>{{array[index].name}}</text>
							<uni-icons type="right" color="#666666"></uni-icons>
						</view>
					</picker>
				</view>
				<view class="">
					<view><text class="c-notice">*</text>业务类型：</view>
					<picker @change="bindPickerChange" :value="index" :range="array" range-key="name">
						<view class="c-picker">
							<text>{{array[index].name}}</text>
							<uni-icons type="right" color="#666666"></uni-icons>
						</view>
					</picker>
				</view>
			</view>
		</view>
		<view class="project-type">
			<view class="project-type-t" :class="{'project-type-active':projectTypeId == 2}">
				<view class="">项目信息</view>
				<view class="is-show" @click="projectTypeId = 2">{{projectTypeId == 2 ? '折叠' : '展开'}}</view>
			</view>
			<view class="project-type-c" v-if="projectTypeId == 2">
				<view class="">
					<view><text class="c-notice">*</text>业务类型：</view>
					<picker @change="bindPickerChange" :value="index" :range="array" range-key="name">
						<view class="c-picker">
							<text>{{array[index].name}}</text>
							<uni-icons type="right" color="#666666"></uni-icons>
						</view>
					</picker>
				</view>
				<view class="">
					<view><text class="c-notice">*</text>业务类型：</view>
					<picker @change="bindPickerChange" :value="index" :range="array" range-key="name">
						<view class="c-picker">
							<text>{{array[index].name}}</text>
							<uni-icons type="right" color="#666666"></uni-icons>
						</view>
					</picker>
				</view>
				<view class="">
					<view><text class="c-notice">*</text>业务类型：</view>
					<picker @change="bindPickerChange" :value="index" :range="array" range-key="name">
						<view class="c-picker">
							<text>{{array[index].name}}</text>
							<uni-icons type="right" color="#666666"></uni-icons>
						</view>
					</picker>
				</view>
				<view class="">
					<view><text class="c-notice">*</text>业务类型：</view>
					<picker @change="bindPickerChange" :value="index" :range="array" range-key="name">
						<view class="c-picker">
							<text>{{array[index].name}}</text>
							<uni-icons type="right" color="#666666"></uni-icons>
						</view>
					</picker>
				</view>
				<view class="">
					<view><text class="c-notice">*</text>业务类型：</view>
					<picker @change="bindPickerChange" :value="index" :range="array" range-key="name">
						<view class="c-picker">
							<text>{{array[index].name}}</text>
							<uni-icons type="right" color="#666666"></uni-icons>
						</view>
					</picker>
				</view>
			</view>
		</view>
		<view class="project-type">
			<view class="project-type-t" :class="{'project-type-active':projectTypeId == 3}">
				<view class="">项目信息</view>
				<view class="is-show" @click="projectTypeId = 3">{{projectTypeId == 3 ? '折叠' : '展开'}}</view>
			</view>
			<view class="project-type-c" v-if="projectTypeId == 3">
				<view class="">
					<view><text class="c-notice">*</text>业务类型：</view>
					<picker @change="bindPickerChange" :value="index" :range="array" range-key="name">
						<view class="c-picker">
							<text>{{array[index].name}}</text>
							<uni-icons type="right" color="#666666"></uni-icons>
						</view>
					</picker>
				</view>
				<view class="">
					<view><text class="c-notice">*</text>业务类型：</view>
					<picker @change="bindPickerChange" :value="index" :range="array" range-key="name">
						<view class="c-picker">
							<text>{{array[index].name}}</text>
							<uni-icons type="right" color="#666666"></uni-icons>
						</view>
					</picker>
				</view>
				<view class="">
					<view><text class="c-notice">*</text>业务类型：</view>
					<picker @change="bindPickerChange" :value="index" :range="array" range-key="name">
						<view class="c-picker">
							<text>{{array[index].name}}</text>
							<uni-icons type="right" color="#666666"></uni-icons>
						</view>
					</picker>
				</view>
				<view class="">
					<view><text class="c-notice">*</text>业务类型：</view>
					<picker @change="bindPickerChange" :value="index" :range="array" range-key="name">
						<view class="c-picker">
							<text>{{array[index].name}}</text>
							<uni-icons type="right" color="#666666"></uni-icons>
						</view>
					</picker>
				</view>
				<view class="">
					<view><text class="c-notice">*</text>业务类型：</view>
					<picker @change="bindPickerChange" :value="index" :range="array" range-key="name">
						<view class="c-picker">
							<text>{{array[index].name}}</text>
							<uni-icons type="right" color="#666666"></uni-icons>
						</view>
					</picker>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				projectTypeId: 1,
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
			}
		}
	}
</script>

<style lang="scss">
	.project-type {
		color: #333;
		font-size: 30rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		border-bottom: 20rpx solid #F4F4F4;

		.project-type-c {
			padding: 0 48rpx;

			view {
				display: flex;
				align-items: center;
			}

			>view {
				justify-content: space-between;
				padding: 28rpx 0;
				border-bottom: 2rpx solid #F4F4F4;

				&:last-child {
					border-bottom: none;
				}

				.c-notice {
					color: #E02020;
				}

				.c-picker {
					color: #999999;
					font-weight: 600;
				}
			}
		}

		.project-type-t {
			display: flex;
			align-items: flex-end;
			justify-content: space-between;
			background-color: #FFFFFF;
			padding: 30rpx 48rpx;
			>view {
				height: 42rpx;
			}

			.is-show {
				color: #306BFF;
				font-weight: 600;
				font-size: 26rpx;
			}
		}
		.project-type-active{
			padding: 34rpx 48rpx 10rpx;
			background-color: #f4f4f4;
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
