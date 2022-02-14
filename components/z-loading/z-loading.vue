<template>
	<div class="loadEffect">
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
	</div>
</template>

<script>
	export default {

		created() {
			this.init()
		},
		watch: {

		},
		data() {
			return {
				data: [],
				hw: 0
			};
		},
		methods: {
			init() {

			}
		}
	}
</script>
<style>
	.loadEffect {
		width: 52rpx;
		height: 52rpx;
		position: relative;
		background-color: #007AFF;
	}

	.loadEffect span {
		display: inline-block;
		width: 16rpx;
		height: 4rpx;
		border-top-left-radius: 5rpx;
		border-bottom-left-radius: 5rpx;
		background: lightgreen;
		position: absolute;
		/* -webkit-animation: load 1.04s ease infinite; */
	}

	@-webkit-keyframes load {
		0% {
			opacity: 1;
		}

		100% {
			opacity: 0.2;
		}
	}

	.loadEffect span:nth-child(1) {
		left: 0;
		top: 24rpx;
		-webkit-animation-delay: 0.13s;
	}

	.loadEffect span:nth-child(2) {
		background: none;
		left: 0;
		top: calc(50% - 3rpx);
		-webkit-transform: rotate(45deg);
		-webkit-animation-delay: 0.26s;
	}

	.loadEffect span:nth-child(3) {
		left: calc(50% - 2rpx);
		margin-left: -4px;
		top: 6rpx;
		-webkit-transform: rotate(90deg)  translate(0,0);
		transform-origin: center center;
		-webkit-animation-delay: 0.39s;
	}

	.loadEffect span:nth-child(4) {
		background: none;
		left: 0;
		top: 20px;
		-webkit-transform: rotate(135deg);
		-webkit-animation-delay: 0.52s;
	}

	.loadEffect span:nth-child(5) {
		right: 2rpx;
		top: 24rpx;
		-webkit-transform: rotate(180deg);
		-webkit-animation-delay: 0.65s;
	}

	.loadEffect span:nth-child(6) {
		background: none;
		left: 0;
		top: calc(50% - 3rpx);
		-webkit-transform: rotate(225deg);
		-webkit-animation-delay: 0.78s;
	}

	.loadEffect span:nth-child(7) {
		bottom: 4px;
		left: 16rpx;
		margin-left: 0rpx;
		-webkit-transform: rotate(270deg);
		-webkit-animation-delay: 0.91s;
	}

	.loadEffect span:nth-child(8) {
		background: none;
		left: 0;
		top: calc(50% - 3rpx);
		-webkit-transform: rotate(315deg);
		-webkit-animation-delay: 1.04s;
	}
</style>
