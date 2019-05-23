<template>
	<view class="view-bt">
		<button plain="true" open-type="contact"><image class="bt-img1" src="../../static/img/index/kefu.png" /></button>
		<button plain="true" @click="bindGetUserInfo"><image class="bt-img2" src="../../static/img/index/buy.png" /></button>
		<button plain="true" @click="make"><image class="bt-img3" src="../../static/img/index/xixix.png" /></button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			bindGetUserInfo() {
				uni.navigateTo({ url: '../buy/buy' });
			},
			make() {
				uni.navigateTo({
					url: '../order/order'
				});
			},
		}
	}
</script>

<style scoped="scoped">
button {
	height: 98upx;
	border: none;
	display: inline-block;
	border-radius: 0;
	padding: 0;
	float: left;
}

.view-bt {
	position: fixed;
	bottom: 0;
}

.bt-img1,
.bt-img2 {
	width: 200upx;
	height: 98upx;
}

.bt-img3 {
	width: 350upx;
	height: 98upx;
}
</style>
