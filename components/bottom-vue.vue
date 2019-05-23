<template>
	<view class="view-bt">
		<button plain="true" open-type="contact"><image class="bt-img1" src="../../static/img/index/kefu.png" /></button>
		<button plain="true" @click="bindGetUserInfo"><image class="bt-img2" src="../../static/img/index/buy.png" /></button>
		<button plain="true" @click="make"><image class="bt-img3" src="../../static/img/index/ty.png" /></button>
	</view>
</template>

<script>
	import * as leanCloud from 'leancloud-storage/dist/av-weapp.js';
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			bindGetUserInfo() {
				let _this = this;
				var queryaaa = new leanCloud.Query('MyHouse');
				queryaaa.equalTo('user',leanCloud.User.current())
				queryaaa.find().then(
					function(res) {
						if (res.length>0) {
							uni.setStorageSync('supervisionHouse',res.reverse())
							uni.setStorageSync('supervisionName',"购买全程监理服务")
							uni.navigateTo({
								url: '../my-house/my-house'
							});
						} else{
							uni.navigateTo({
								url: '../no-house/no-house'
							});
						}
					},
					function(error) {}
				);
				//uni.navigateTo({ url: '../buy/buy' });
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
