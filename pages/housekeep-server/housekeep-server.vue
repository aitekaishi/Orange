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
					<view class="weui-tab__content" :hidden="activeIndex != 0"><supervision></supervision></view>
					<view class="weui-tab__content" :hidden="activeIndex != 1"><room></room></view>
					<view class="weui-tab__content" :hidden="activeIndex != 2"><qianqishenhe></qianqishenhe></view>
					<view class="weui-tab__content" :hidden="activeIndex != 3"><jiandianmyanshou></jiandianmyanshou></view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
import * as leanCloud from 'leancloud-storage/dist/av-weapp.js';
//import housekeep from '@/components/housekeep';
import wait from '@/components/wait';
import supervision from '@/components/supervision';
import room from '@/components/room';
import qianqishenhe from '@/components/qianqishenhe';
import jiandianmyanshou from '@/components/jiandianmyanshou';
export default {
	data() {
		return {
			tabs: ['全程监理', '验房', '前期审核', '节点验收'],
			activeIndex: 0,
			ac: false
		};
	},
	components: {
		jiandianmyanshou,
		qianqishenhe,
		room,
		supervision,
	},
	onUnload() {
		uni.setStorageSync('activeIndex',0)
		/* uni.reLaunch({
			url: '../index/index'
		}) */
	},
	onLoad() {
		uni.setNavigationBarTitle({
			title: '管家服务'
		});
		uni.setNavigationBarColor({
			frontColor: '#000000',
			backgroundColor: '#ffffff'
		});
		if (uni.getSystemInfoSync().platform == 'devtools') {
			this.ac = true;
		}
		this.activeIndex = uni.getStorageSync('activeIndex')
	},
	computed: {
		navbarSliderClass() {
			if (this.activeIndex == 0) {
				return 'weui-navbar__slider_0';
			}
			if (this.activeIndex == 1) {
				return 'weui-navbar__slider_1';
			}
			if (this.activeIndex == 2) {
				return 'weui-navbar__slider_2';
			}
			if (this.activeIndex == 3) {
				return 'weui-navbar__slider_3';
			}
		}
	},
	methods: {
		tabClick(index) {
			let _this = this;
			_this.activeIndex = index;
		},

		more() {
			uni.navigateTo({
				url: '../more-page/more-page'
			});
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
		zhijing() {
			uni.navigateTo({
				url: '../zhijing/zhijing'
			});
		}
	},
	created() {}
};
</script>

<style scoped>

.weui-tab__content {
	text-align: center;
}

.weui-navbar__slider_0 {
	transform: translateX(43upx);
}
.weui-navbar__slider_1 {
	transform: translateX(230upx);
}
.weui-navbar__slider_2 {
	transform: translateX(420upx);
}
.weui-navbar__slider_3 {
	transform: translateX(610upx);
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
}

.weui-bar__item_on .weui-navbar__title {
	color: #ff9900 !important;
	opacity: 1 !important;
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
	background: #f2f2f2;
	padding-top: 20upx;
	border: 2upx solid #cccccc;
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
</style>
