<template>
	<view class="supervision">
		<image class="supervision-image" src="http://lc-ndknejad.cn-n1.lcfile.com/d2736a3fbaca800b94fe/banner%402x%20%281%29.png" mode="widthFix"></image>
		<image class="supervision-image" src="http://lc-ndknejad.cn-n1.lcfile.com/5a8287cca2e0e0e204c0/one.png" mode="widthFix"></image>
		<swiper indicator-dots>
			<swiper-item>
			  <image src="http://lc-ndknejad.cn-n1.lcfile.com/8082db3e816e396b3dbf/sdsdsd.png" class="slide-image"  mode="widthFix"/>
			</swiper-item>
			<swiper-item>
			   <image src="http://lc-ndknejad.cn-n1.lcfile.com/a389c7617850f9a59b85/wwww.png" class="slide-image"  mode="widthFix"/>
			</swiper-item>
			<swiper-item>
			   <image src="http://lc-ndknejad.cn-n1.lcfile.com/9c7c055208a9c11c0025/zzzzz.png" class="slide-image" mode="widthFix"/>
			</swiper-item>
		</swiper>
		<view class="bottom-xixi"></view>
		<view class="view-bt">
			<button plain="true" open-type="contact"><image class="bt-img1" src="../../static/img/index/kefu.png" /></button>
			<button plain="true" @click="bindGetUserInfo"><image class="bt-img2" src="../../static/img/index/buy.png" /></button>
			<button plain="true" @click="make"><image class="bt-img3" src="../../static/img/index/xixix.png" /></button>
		</view>
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
				uni.getSetting({
					success(res) {
						console.log(res)
						if (!res.authSetting['scope.userInfo'] || uni.getStorageSync('avatarUrl') == '') {
							uni.navigateTo({
								url: '../index/index'
							});
							uni.setStorageSync('activeIndex',2)
						} else {
							uni.setStorageSync('index',2)
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
							//uni.navigateTo({ url: '../buy/buy' });;
						}
					}
				});
			},
			make() {
				uni.navigateTo({
					url: '../order/order'
				});
			},
		}
	}
</script>

<style scoped>
.supervision-image{
	width: 100vw;
}
.bottom-xixi{
	height: 100upx;
}
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
swiper-item{
}
swiper-item image{
	width: 100vw;
}
swiper{
	position: relative;
	top: -30upx;
	height: 380upx;
}
</style>
