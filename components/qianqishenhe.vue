<template>
	<view class="supervision">
		<image class="aaaa" src="http://lc-ndknejad.cn-n1.lcfile.com/ebc85d5bf19e315b9d0a/qqsh.png" mode="widthFix"></image>
		<image class="aaaa"  src="http://lc-ndknejad.cn-n1.lcfile.com/f7374216167ffebdd2e1/yssh.png" mode="widthFix"></image>
		<view class="xzadsdss">
			<view @click="index(1)"><image src="http://lc-ndknejad.cn-n1.lcfile.com/fc79a2be5e1c5d105f38/aaa.png" mode="widthFix"></image></view>
			<view @click="index(2)"><image src="http://lc-ndknejad.cn-n1.lcfile.com/4e92505a3ee1ba41d674/bbb.png" mode="widthFix"></image></view>
			<view @click="index(3)"><image src="http://lc-ndknejad.cn-n1.lcfile.com/100257b564b97c7c7935/ccc.png" mode="widthFix"></image></view>
			<view @click="index(4)"><image src="http://lc-ndknejad.cn-n1.lcfile.com/0f7a31d0387444adc05c/ddd.png" mode="widthFix"></image></view>
		</view>
		<view >
			<image class="aaaa"  :class="{ 'xixiaaa': activeIndexa != 1 }" src="http://lc-ndknejad.cn-n1.lcfile.com/1bf4acd975ddc620946e/a.png" mode="widthFix"></image>
			<image class="aaaa" :class="{ 'xixiaaa': activeIndexb != 1 }" src="http://lc-ndknejad.cn-n1.lcfile.com/4f69f20d2b72d835c247/b.png" mode="widthFix"></image>
			<image class="aaaa" :class="{ 'xixiaaa': activeIndexc != 1 }" src="http://lc-ndknejad.cn-n1.lcfile.com/74fec5a95013662fa8da/c.png" mode="widthFix"></image>
			<image class="aaaa" :class="{ 'xixiaaa': activeIndexd != 1 }" src="http://lc-ndknejad.cn-n1.lcfile.com/1960c1ab0d7dc20027e0/d.png" mode="widthFix"></image>
		</view>
		<image class=" aaaa"  src="http://lc-ndknejad.cn-n1.lcfile.com/603abe7ca04bf7361ecf/htpq.png" mode="widthFix"></image>
		<view class="xzadsdss ">
			<view @click="indexa(1)"><image src="http://lc-ndknejad.cn-n1.lcfile.com/bdc414efd7ed590ffe73/aaa.png" mode="widthFix"></image></view>
			<view @click="indexa(2)"><image src="http://lc-ndknejad.cn-n1.lcfile.com/4b6c190596289bc21638/bbb.png" mode="widthFix"></image></view>
			<view @click="indexa(3)"><image src="http://lc-ndknejad.cn-n1.lcfile.com/85573fccebcc52d14c2a/ccc.png" mode="widthFix"></image></view>
			<view @click="indexa(4)"><image src="http://lc-ndknejad.cn-n1.lcfile.com/0021f35084ae1ccd8199/ddd.png" mode="widthFix"></image></view>
		</view>
		<view>
			<image class="aaaa"  :class="{ 'xixiaaa': activeIndexe != 1 }" src="http://lc-ndknejad.cn-n1.lcfile.com/5f13d0a7a7362c667a9c/eee.png" mode="widthFix"></image>
			<image class="aaaa" :class="{ 'xixiaaa': activeIndexf != 1 }" src="http://lc-ndknejad.cn-n1.lcfile.com/40cb6a608bd035e482f4/fff.png" mode="widthFix"></image>
			<image class="aaaa" :class="{ 'xixiaaa': activeIndexg != 1 }" src="http://lc-ndknejad.cn-n1.lcfile.com/23017c4dbf1d3da22dcd/ggg.png" mode="widthFix"></image>
			<image class="aaaa" :class="{ 'xixiaaa': activeIndexh != 1 }" src="http://lc-ndknejad.cn-n1.lcfile.com/08a0fbd370caac068642/hhhh.png" mode="widthFix"></image>
		</view>
		<view class="bottom-xixi"></view>
		<view class="view-bt">
			<button plain="true" open-type="contact"><image class="bt-img1" src="../../static/img/index/kefu.png" /></button>
			<button plain="true" @click="bindGetUserInfo"><image class="bt-img2" src="../../static/img/index/buy.png" /></button>
			<button plain="true" @click="make"><image class="bt-img3" src="http://lc-ndknejad.cn-n1.lcfile.com/661bdc022bb9939811b4/qqshbutton.png" /></button>
		</view>
	</view>
</template>

<script>
	import * as leanCloud from 'leancloud-storage/dist/av-weapp.js';
	export default {
		data() {
			return {
				activeIndexa:1,
				activeIndexb:2,
				activeIndexc:2,
				activeIndexd:2,
				activeIndexe:1,
				activeIndexf:2,
				activeIndexg:2,
				activeIndexh:2
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
							uni.setStorageSync('index',4)
							var queryaaa = new leanCloud.Query('MyHouse');
							queryaaa.equalTo('user',leanCloud.User.current())
							queryaaa.find().then(
								function(res) {
									if (res.length>0) {
										uni.setStorageSync('supervisionHouse',res.reverse())
										uni.setStorageSync('supervisionName',"购买前期审核服务")
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
			index(index){
				let _this = this
				console.log(index)
				if (index==1) {
					_this.activeIndexa = 1
					_this.activeIndexb = 2
					_this.activeIndexc = 2
					_this.activeIndexd = 2
				}if (index==2) {
					_this.activeIndexa = 2
					_this.activeIndexb = 1
					_this.activeIndexc = 2
					_this.activeIndexd = 2
				}if (index==3) {
					_this.activeIndexa = 2
					_this.activeIndexb = 2
					_this.activeIndexc = 1
					_this.activeIndexd = 2
				}if (index==4) {
					_this.activeIndexa = 2
					_this.activeIndexb = 2
					_this.activeIndexc = 2
					_this.activeIndexd = 1
				}
				
			},
			indexa(index){
				let _this = this
				console.log(index)
				if (index==1) {
					_this.activeIndexe = 1
					_this.activeIndexf = 2
					_this.activeIndexg = 2
					_this.activeIndexh = 2
				}if (index==2) {
					_this.activeIndexe = 2
					_this.activeIndexf = 1
					_this.activeIndexg = 2
					_this.activeIndexh = 2
				}if (index==3) {
					_this.activeIndexe = 2
					_this.activeIndexf = 2
					_this.activeIndexg = 1
					_this.activeIndexh = 2
				}if (index==4) {
					_this.activeIndexe = 2
					_this.activeIndexf = 2
					_this.activeIndexg = 2
					_this.activeIndexh = 1
				}
				
			}
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
.xixiaaa{
	display: none;
}
button {
	height: 98upx;
	border: none;
	display: inline-block;
	border-radius: 0;
	padding: 0;
	float: left;
}
.aaaa{
	width: 100vw;
}
.view-bt {
	position: fixed;
	bottom: 0;
	z-index: 1000;
}
.qqqq{
	position: relative;
	top:-155upx;
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
.xzadsdss{
	width: 710upx;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	position: relative;
	z-index: 1000;
}
.xzadsdss image{
	width: 130upx;
}
</style>
