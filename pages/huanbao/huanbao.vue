<template>
	<view class="huanbao" style="background: #eeeeee;text-align: center;min-height: 100vh;">
		<view class="huanbao-title">
			<image src="http://lc-ndknejad.cn-n1.lcfile.com/de3476d1b36f9606e218/banner1.jpg" mode="widthFix"></image>
		</view>
		<view class="huanbao-fuwusuomin">
			<view class="huanbao-fuwusuoming">
				服务说明
			</view>
			<view class="huanbao-fuwuneirong">
				携手湖南省室内环境专业检测机构，为业主提供上门环保检测，保证安心入住。
			</view>
			<view>
				<image src="http://lc-ndknejad.cn-n1.lcfile.com/188250f2c0dd98e77ba6/huanbao.png" mode="widthFix"></image>
			</view>
		</view>
		<view class="huanbao-fuwusuomin">
			<view class="huanbao-fuwusuoming">
				检测流程
			</view>
			<view class="huanb1111"></view>
			<view class="jiancheliuchen">
				<view>
					<image class="jianchenliuchen-inage" src="http://lc-ndknejad.cn-n1.lcfile.com/5ec28eece79047b2e9f6/image%402x.png" ></image>
				</view>
				<view>
					<view class="jianchenliuchen-buzou">
						<text class="jianchenliuchen-text">1</text>检测前12小时关闭门窗
					</view>
					<view class="jianchenliuchen-buzou">
						<text class="jianchenliuchen-text">2</text>专业人员上门取样
					</view>
					<view class="jianchenliuchen-buzou">
						<text class="jianchenliuchen-text">3</text>专业实验室受样
					</view>
					<view class="jianchenliuchen-buzou">
						<text class="jianchenliuchen-text">4</text>出具报告
					</view>
					<view class="jianchenliuchen-buzou">
						<text class="jianchenliuchen-text">5</text>主任审核
					</view>
					<view class="jianchenliuchen-buzou">
						<text class="jianchenliuchen-text">6</text>分析与检验
					</view>
				</view>
			</view>
		</view>
		<view class="huanbao-fuwuneirong-image"></view>
		<view class="view-bt">
			<button plain="true" open-type="contact"><image class="bt-img1" src="../../static/img/index/kefu.png" /></button>
			<button plain="true" @click="bindGetUserInfo"><image class="bt-img2" src="../../static/img/index/buy.png" /></button>
			<button plain="true" @click="make"><image class="bt-img3" src="/static/img/index/ty.png" /></button>
		</view>
	</view>
</template>

<script>
	import * as leanCloud from 'leancloud-storage/dist/av-weapp.js';
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			bindGetUserInfo() {
				let _this = this;
				uni.setStorageSync('index',6)
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
			make(){
				uni.navigateTo({ url: '../order/order' });//预约环保检测页面
			}
		},
		onUnload() {
			uni.setStorageSync('activeIndex',0)
			/* uni.reLaunch({
				url: '../index/index'
			}) */
		},
	}
</script>

<style scoped>
.huanbao-title image{
	width: 100vw;
}
.huanbao-fuwusuomin{
	width: 710upx;
	text-align: center;
	background: #FFFFFF;
	margin: 14upx auto;
	border-radius: 10upx;
}
.huanbao-fuwusuoming{
	color: #333333;
	font-size: 32upx;
	font-weight: 600;
	padding-top: 60upx;
}
.huanbao-fuwuneirong{
	color: #333333;
	font-size: 28upx;
	text-align: left;
	padding: 20upx;
}
.huanb1111{
	height: 30upx;
}
.jiancheliuchen{
	display: flex;justify-content: space-between;padding: 20upx;
}
.jianchenliuchen-inage{
	width: 310upx;
	height: 262upx;
}
.jianchenliuchen-buzou{
	width: 340upx;text-align: left;
	font-size: 28upx;
	line-height: 40upx;
}
.jianchenliuchen-text{
	width: 30upx;
	height: 30upx;
	border-radius: 50%;
	background: #ff9900;
	font-size: 24upx;
	text-align: center;
	line-height: 30upx;
	color: #ffffff;
	display: inline-block;
	margin-right: 20upx;
}
.view-bt {
	position: fixed;
	bottom: 0;
}
button {
	height: 98upx;
	border: none;
	display: inline-block;
	border-radius: 0;
	padding: 0;
	float: left;
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
.huanbao-fuwuneirong-image{
	height: 100upx;
}
</style>
