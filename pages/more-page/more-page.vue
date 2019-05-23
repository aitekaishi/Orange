<template>
	<view class="more-page">
		<image class="more-contain-image" src="/static/img/more-page/one.png" mode="widthFix"/>
		<image class="more-contain-image" src="/static/img/more-page/two.png" mode="widthFix"/>
		<image class="more-contain-image" src="/static/img/more-page/free.png" mode="widthFix"/>
		<image class="more-contain-image" src="/static/img/more-page/fore.png" mode="widthFix"/>
		<view class="view-bt">
			<button plain="true" open-type="contact"><image class="bt-img1" src="../../static/img/index/kefu.png" /></button>
			<button plain="true" @click="bindGetUserInfo"><image class="bt-img2" src="../../static/img/index/buy.png" /></button>
			<button plain="true" @click="make"><image class="bt-img3" src="../../static/img/index/ty.png" /></button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			make() {
				uni.navigateTo({
					url: '../order/order'
				});
			},
			bindGetUserInfo() {
				uni.navigateTo({ url: '../order-from/order-from' });
			}
		}
	}
</script>

<style scoped="scoped">
.more-page .more-contain-image{
	width: 100vw;
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
button {
	height: 98upx;
	border: none;
	display: inline-block;
	border-radius: 0;
	padding: 0;
	float: left;
}
</style>
