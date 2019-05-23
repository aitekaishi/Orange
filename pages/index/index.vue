<template>
	<view class="page">
		<view class="page__bd">
			<view class="weui-tab">
				<view class="weui-navbar">
					<block v-for="(item, index) in tabs" :key="index">
						<view :id="index" :class="{ 'weui-bar__item_on': activeIndex == index }" class="weui-navbar__item" @click="tabClick(index)">
							<view class="weui-navbar__title">{{ item }}</view>
						</view>
					</block>
					<view class="weui-navbar__slider" :class="navbarSliderClass"></view>
				</view>
				<view class="weui-tab__panel">
					<view class="weui-tab__content" :hidden="activeIndex != 0">
						<view class="housekeep">
							<image src="http://lc-ndknejad.cn-n1.lcfile.com/dbd5fdbfcbefc670bd5e/banner%402x.png" mode="widthFix" />
							<image src="http://lc-ndknejad.cn-n1.lcfile.com/ed3ff59553af98839d6e/index2.png" mode="widthFix" />
							<image src="http://lc-ndknejad.cn-n1.lcfile.com/2f77a6d42febe78d63d9/pingjia.png" mode="widthFix" />
							<view class="huanbao-fuwusuomin">
								<swiper circular autoplay>
									<block class="swiper" v-for="(item, index) in items" :key="index">
										<swiper-item @click="serverType(index)">
											<view class="swiper-item">
												<view class="swiper-item-image"><image :src="item.avatarUrl" mode=""></image></view>
												<view class="swiper-item-contain">
													<view class="swiper-item-containa swiper-item-containb">
														<view>{{ item.city }}-{{ item.phone }}</view>
														<view>{{ item.createdAt }}</view>
													</view>
													<view class="swiper-item-containb swiper-item-containc">
														评分：
														<uni-rate style="display: inline-block;" disabled="true" value="5" size="15"></uni-rate>
													</view>
													<view class="swiper-item-containbb">{{ item.value }}</view>
													<view class="swiper-item-containb swiper-item-containc">
														<view class="swiper-item-containd">{{ item.serverType }}</view>
													</view>
												</view>
											</view>
										</swiper-item>
									</block>
								</swiper>
							</view>
							<image src="http://lc-ndknejad.cn-n1.lcfile.com/babec429781746e7e4a2/index4.png" mode="widthFix" />
							<view class="sangege">
								<view class="sange-contain">
									<view class="sange-title">特色服务，为您护航</view>
									<view class="sange">
										<image src="/static/img/more-page/icon_hbjc.png" @click="sever(1)" :class="{ xixiaaa: activeIndexa == 1 }" mode="widthFix" />
										<image src="/static/img/more-page/icon_hbjc_press.png" @click="sever(1)" :class="{ xixiaaa: activeIndexa != 1 }" mode="widthFix" />
										<image src="/static/img/more-page/icon_jzx.png" @click="sever(2)" :class="{ xixiaaa: activeIndexb == 1 }" mode="widthFix" />
										<image src="/static/img/more-page/icon_jzx_press.png" @click="sever(2)" :class="{ xixiaaa: activeIndexb != 1 }" mode="widthFix" />
										<image src="/static/img/more-page/icon_zjtg.png" @click="sever(3)" :class="{ xixiaaa: activeIndexc == 1 }" mode="widthFix" />
										<image src="/static/img/more-page/icon_zjtg_press.png" @click="sever(3)" :class="{ xixiaaa: activeIndexc != 1 }" mode="widthFix" />
									</view>
									<view class="ssssss-zzzzzz">
										<view class="ssssss" :class="{ xixiaaa: activeIndexa != 1 }">环保检测</view>
										<view class="zzzzzz" :class="{ xixiaaa: activeIndexa == 1 }">环保检测</view>
										<view class="ssssss" :class="{ xixiaaa: activeIndexb != 1 }">工程监理责任险</view>
										<view class="zzzzzz" :class="{ xixiaaa: activeIndexb == 1 }">工程监理责任险</view>
										<view class="ssssss" :class="{ xixiaaa: activeIndexc != 1 }">资金托管</view>
										<view class="zzzzzz" :class="{ xixiaaa: activeIndexc == 1 }">资金托管</view>
									</view>
									<view class="sange-title-title">
										<image src="/static/img/index/server-one.png" :class="{ xixiaaa: activeIndexa != 1 }" mode="widthFix" />
										<image src="/static/img/index/server-two.png" :class="{ xixiaaa: activeIndexb != 1 }" mode="widthFix" />
										<image src="/static/img/index/server-three.png" :class="{ xixiaaa: activeIndexc != 1 }" mode="widthFix" />
									</view>
									<view class="sange-title-contain">
										<view class="sange-title-contain-contain" :class="{ xixiaaa: activeIndexa != 1 }">
											佰橙优家携手湖南省室内环境专业检测机构，为业主提供上门环保检测，保证入住安全。
											<text @click="huanbao">查看更多>></text>
										</view>
										<view class="sange-title-contain-contain" :class="{ xixiaaa: activeIndexb != 1 }">
											因监理不到位产生的装修质量（不含软装部分），中国人寿为客户提供2万元保险赔偿。
											<text @click="jiazhuangxian">查看更多>></text>
										</view>
										<view class="sange-title-contain-contain" :class="{ xixiaaa: activeIndexc != 1 }">
											通过银行专属托管账号，保障资金安全，先施工后付款，详情请咨询客服。
										</view>
									</view>
								</view>
							</view>
							<image src="http://lc-ndknejad.cn-n1.lcfile.com/bde927c3886dd036cc9d/index3.png" mode="widthFix" />
							<!-- <image src="/static/img/index/index5.png" mode="widthFix"/>
								<view class="more-contain">
									<view class="more-title" @click="more">查看更多内容>></view>
								</view> -->
							<image src="http://lc-ndknejad.cn-n1.lcfile.com/b43c95fde4bda8c1175e/index6.png" mode="widthFix" />
							<image src="http://lc-ndknejad.cn-n1.lcfile.com/2b3a505ef408abac1d2d/index7.png" mode="widthFix" />
							<image src="http://lc-ndknejad.cn-n1.lcfile.com/b3c324be94bef4f8f333/about_we.png" mode="widthFix" />
							<view class="index-bottom"></view>
						</view>
					</view>
					<view class="weui-tab__content" :hidden="activeIndex != 1"></view>
					<view class="weui-tab__content" :hidden="activeIndex != 2"><myinfo></myinfo></view>
				</view>
			</view>
			<view class="view-bt">
				<button plain="true" open-type="contact"><image class="bt-img1" src="../../static/img/index/kefu.png" /></button>
				<button plain="true" @click="bindGetUserInfo"><image class="bt-img2" src="../../static/img/index/buy.png" /></button>
				<button plain="true" @click="make"><image class="bt-img3" src="../../static/img/index/ty.png" /></button>
			</view>
		</view>
		<!-- <denglu :userinfo="userinfo"></denglu> -->
	</view>
</template>
<script>
import * as leanCloud from 'leancloud-storage/dist/av-weapp.js';
//import housekeep from '@/components/housekeep';
import wait from '@/components/wait';
import bottomVue from '@/components/bottom-vue.vue';
import myinfo from '@/components/myinfo';
import uniRate from '@/components/uni-rate/uni-rate.vue';
import denglu from '@/components/denglu.vue';
export default {
	data() {
		return {
			tabs: ['云管家', '管家服务', '我的'],
			activeIndex: 0,
			ac: false,
			activeIndexa: 1,
			activeIndexb: 2,
			activeIndexc: 3,
			items: [],
			//userinfo: false
		};
	},
	components: {
		wait,
		myinfo,
		uniRate,
		bottomVue,
		denglu
	},
	onLoad() {
		/* uni.clearStorageSync() */
		uni.setStorageSync('index',0)
		uni.setNavigationBarTitle({
			title: '佰橙优家'
		});
		uni.setNavigationBarColor({
			frontColor: '#000000',
			backgroundColor: '#ffffff'
		});
		if (uni.getSystemInfoSync().platform == 'devtools') {
			this.ac = true;
		}
	},
	computed: {
		navbarSliderClass() {
			let _this = this;
			if (_this.activeIndex == 0) {
				//_this.userinfo = false
				uni.setStorageSync('index',0)
				var queryx = new leanCloud.Query('Order');
				queryx.equalTo('user', leanCloud.User.current());
				
				queryx.find().then(
					function(res) {
					},
					function(error) {
						console.log(error);
					}
				);
				return 'weui-navbar__slider_0';
			}
			if (_this.activeIndex == 1) {
				//_this.userinfo = false
				uni.navigateTo({
					url: '../housekeep-server/housekeep-server'
				});
				return 'weui-navbar__slider_1';
			}
			if (_this.activeIndex == 2) {
				uni.setStorageSync('index',1)
				return 'weui-navbar__slider_2';
			}
		}
	},
	methods: {
		bindGetUserInfo() {
			let _this = this;
			uni.removeStorageSync('wodetiaozhuang')
			uni.setStorageSync('wodetiaozhuang', _this.activeIndex)
			uni.getSetting({
				success(res) {
					if (!res.authSetting['scope.userInfo'] || uni.getStorageSync('avatarUrl') == '') {
						_this.activeIndex = 2
					} else {
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
					}
				}
			});
			
		},
		make() {
			let _this = this
			uni.removeStorageSync('wodetiaozhuanga')
			uni.setStorageSync('wodetiaozhuanga', _this.activeIndex)
			uni.navigateTo({
				url: '../order/order'
			});
		},
		tabClick(index) {
			let _this = this;
			_this.activeIndex = index;
		},
		
		huanbao() {
			uni.navigateTo({
				url: '../huanbao/huanbao'
			});
		},
		jiazhuangxian() {
			uni.navigateTo({
				url: '../jiazhuangxian/jiazhuangxian'
			});
		},
		sever(index) {
			let self = this;
			if (index == 1) {
				self.activeIndexa = 1;
				self.activeIndexb = 2;
				self.activeIndexc = 2;
			} else if (index == 2) {
				self.activeIndexa = 2;
				self.activeIndexb = 1;
				self.activeIndexc = 2;
			} else {
				self.activeIndexa = 2;
				self.activeIndexb = 2;
				self.activeIndexc = 1;
			}
		},
		serverType(index) {
			let _this = this;
			var queryx = new leanCloud.Query('Assess');
			queryx.equalTo('score', 5);
			queryx.find().then(
				function(res) {
					for (let i = 0; i < res.length; i++) {
						if (res.length - index - 1 == i) {
							uni.setStorageSync('shoujihaoA', res[i].attributes.phone.toString().substr(0, 3) + '****' + res[i].attributes.phone.toString().substr(7, 4));
							uni.setStorageSync('chenshi', res[i].attributes.city);
							uni.setStorageSync('pingjia', res[i].attributes.value);
							uni.setStorageSync('touxiang', res[i].attributes.avatarUrl);
							uni.navigateTo({
								url: '../assess-details/assess-details'
							});
						}
					}
				},
				function(error) {
					console.log(error);
				}
			);
		}
	},
	created() {},
	onShow() {
		let _this = this;
		_this.activeIndex = uni.getStorageSync('activeIndex');
		console.log(_this.activeIndex)
		uni.removeStorageSync('activeIndex');
		var queryx = new leanCloud.Query('Assess');
		queryx.equalTo('score', 5);
		queryx.find().then(
			function(res) {
				_this.items = res.reverse();
				for (let i = 0; i < _this.items.length; i++) {
					var getMinutes = '';
					if (new Date(_this.items[i].createdAt).getMinutes() < 10) {
						getMinutes = '0' + new Date(_this.items[i].createdAt).getMinutes();
					} else {
						getMinutes = new Date(_this.items[i].createdAt).getMinutes();
					}
					var mouth = ''
					var day = ''
					var hour = ''
					if ((new Date(_this.items[i].createdAt).getMonth() + 1)>9) {
						mouth = new Date(_this.items[i].createdAt).getMonth() + 1
					} else{
						mouth = '0'+ (new Date(_this.items[i].createdAt).getMonth() + 1)
					}
					if ((new Date(_this.items[i].createdAt).getDate())>9) {
						day = new Date(_this.items[i].createdAt).getDate()
					} else{
						day = '0'+ (new Date(_this.items[i].createdAt).getDate())
					}
					if ((new Date(_this.items[i].createdAt).getHours())>9) {
						hour = new Date(_this.items[i].createdAt).getHours()
					} else{
						hour = '0'+ (new Date(_this.items[i].createdAt).getHours())
					}
					_this.items[i].createdAt =new Date(_this.items[i].createdAt).getFullYear() + '-' +mouth +'-' +day +' ' +hour+':'+getMinutes;
					_this.items[i].attributes.phone = _this.items[i].attributes.phone.toString().substr(0, 3) + '****' + _this.items[i].attributes.phone.toString().substr(7, 4);
				}
			},
			function(error) {
				console.log(error);
			}
		);
		
	}
};
</script>

<style scoped>
.xixiaaaa {
	display: none;
}
.page,
.page__bd {
	height: 100%;
	background: #efefef;
	min-height: 100vh;
}

.weui-tab__content {
	text-align: center;
}

.weui-navbar__slider_0 {
	transform: translateX(75upx);
}

.weui-navbar__slider_1 {
	transform: translateX(325upx);
}
.weui-navbar__slider_2 {
	transform: translateX(575upx);
}
.weui-navbar__slider {
	width: 100upx;
	background: #ff9900;
}

.weui-navbar__title {
	font-size: 34upx;
	color: #999999;
	opacity: 0.7;
}

.weui-navbar {
	background: #ffffff;
	border-bottom: none;
	position: fixed;
	z-index: 2000;
}

.weui-bar__item_on .weui-navbar__title {
	color: #ff9900 !important;
	opacity: 1 !important;
}

.weui-navbar__item {
	margin: 0 40upx;
}

.weui-tab__panel {
	margin: 0;
}
.housekeep image {
	width: 100vw;
	vertical-align: top;
}
.more-title {
	color: #ff9900;
	font-size: 24upx;
	width: 95vw;
	background: #ffffff;
	margin: 0 auto;
	overflow: visible;
	border-bottom-right-radius: 5upx;
	border-bottom-left-radius: 5upx;
	position: relative;
	top: -20upx;
}
.more-contain {
	background: #ffffff;
}
.xixiaaa {
	display: none;
}
.sange {
	display: flex;
	width: calc(95vw - 40upx);
	margin: 0 auto;
	justify-content: space-between;
}
.sange image {
	width: 140upx;
	height: 140upx;
}
.sange-title {
	text-align: center;
	font-size: 32upx;
	font-weight: 600;
	margin-bottom: 62upx;
}
.sange-contain {
	width: 710upx;
	margin: 0 auto;
	border-radius: 5upx;
	background: #ffffff;
	background: #ffffff;
	padding-top: 50upx;
	box-shadow: 0px 10px 55px 4px #24242429;
	border-radius: 8px;
}
.sange-title-title image {
	width: 670upx;
}
.sangege {
	background: #fffeee;
}
.index-bottom {
	height: 90upx;
}
.sange-title-contain {
	width: 710upx;
}
.sange-title-contain-contain {
	text-align: left;
	color: #666666;
	font-size: 24upx;
	width: 618upx;
	padding: 40upx 32upx 40upx 20upx;
	background: #ebebeb;
	margin: 0 auto;
	border-radius: 10upx;
	position: relative;
	top: -35upx;
}
.ssssss,
.zzzzzz {
	font-size: 28upx;
}
.ssssss {
	color: #333333;
}
.zzzzzz {
	color: #999999;
}
.ssssss-zzzzzz {
	width: 650upx;
	display: flex;
	justify-content: space-between;
	padding-left: 30upx;
	padding-right: 30upx;
	padding-top: 20upx;
}
.huanbao-fuwusuomin {
	width: 750upx;
	text-align: center;
	background: #ffffff;
	margin: 0 auto;
	border-radius: 10upx;
}
.swiper-item {
	margin: 0 auto;
	width: 668upx;
	height: 260upx;
	box-sizing: content-box;
	display: flex;
	background: #ffffff;
	padding-top: 20upx;
	border: 2upx solid #efefef;
}
.swiper-item image {
	width: 50upx;
	height: 50upx;
	border-radius: 50%;
	position: relative;
	top: 10upx;
}
.swiper-item-image {
	width: 100upx;
	height: 260upx;
}
.swiper-item-contain {
	width: 568upx;
	box-sizing: content-box;
	padding-right: 20upx;
}
.swiper-item-containa {
	display: flex;
	justify-content: space-between;
}
.swiper-item-containc {
	display: flex;
	justify-content: flex-start;
}
.swiper-item-containb {
	font-size: 24upx;
	color: #666666;
	text-align: left;
	overflow: hidden;
}
.swiper-item-containbb {
	height: 70upx;
	font-size: 24upx;
	color: #666666;
	text-align: left;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
}
.swiper-item-containd {
	margin-top: 20upx;
	text-align: left;
	display: inline-block;
	color: #ff9900;
	border: 2upx solid #ff9900;
	justify-content: flex-start;
	padding: 0 10upx;
	border-radius: 20upx;
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
</style>
