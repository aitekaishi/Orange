<template>
	<view>
		<image style="width: 100vw;" src="http://lc-ndknejad.cn-n1.lcfile.com/30bde6343c355659e6e2/banner%402x.png" mode="widthFix"></image>
		<view class="jiazhuangxian">
			<view class="jiazhuangxian-title">
				如果竣工以后工地出现问题，优家是否会进行赔偿？
			</view>
			<view class="jiazhuangxian-contain">
				监理老师每次上门都会有电子版报告，验收时三方在场进行验收规避问题产生。现优家与中国人寿保险合作，购买99元的保险服务，当您的监理服务结束后，会为您生成一个保单，最高保额为20000元。
			</view>
			<view class="jiazhuangxian-image">
				<image src="http://lc-ndknejad.cn-n1.lcfile.com/4805f4e4faa10110b463/image_aqbzh%402x.png" mode="widthFix"></image>
			</view>
			<view class="jiazhuangxian-title">
				如果竣工后工地出现问题，怎么报险？
			</view>
			<view class="jiazhuangxian-contain">
				当监理服务结束后一年内，工地如果出现问题客户直接拨打中国人寿保险报险电话：95519，中国人寿安排专业定损人员上门查看，确认责任后由中国人寿指派维修服务，由专业的施工队进行维修。
			</view>
			<view class="jiazhuangxian-image">
				<image src="http://lc-ndknejad.cn-n1.lcfile.com/f6277471849360647b2d/image_zhywx%402x.png" mode="widthFix"></image>
			</view>
			<view class="jiazhuangxian-title">
				保险服务怎么收费？
			</view>
			<view class="jiazhuangxian-contain">
				保险服务分为三档，一档价值99元最高保20000元，二档价值199元最高保50000元，三档价值299元保100000元。
			</view>
			<view class="jiazhuangxian-imagea">
				<image src="http://lc-ndknejad.cn-n1.lcfile.com/6685cdc629a9b689218e/iamge_baofei%402x.png" mode="widthFix"></image>
			</view>
		</view>
		<view class="index-bottom"></view>
		<bottom-vue></bottom-vue>
	</view>
</template>

<script>
	import bottomVue from '@/components/bottom-vue.vue';
	export default {
		data() {
			return {
				
			}
		},
		components: {
			bottomVue
		},
		methods: {
			
		},
		onShow() {
			uni.setStorageSync('index',7)
		},
		onUnload() {
			uni.setStorageSync('activeIndex',0)
			/* uni.reLaunch({
				url: '../index/index'
			}) */
		},
	}
</script>

<style scoped="scoped">
.jiazhuangxian{
	padding-left: 24upx;
	padding-right: 24upx;
}
.jiazhuangxian-title{
	font-size: 32upx;
	color: #333333;
	font-weight: 600;
	padding-top: 40upx;
	padding-bottom: 20upx;
}
.jiazhuangxian-contain{
	font-size: 28upx;
	color: #333333;
}
.jiazhuangxian-image{
	margin-top: 64upx;
	margin-bottom: 40upx;
	text-align: center;
}
.jiazhuangxian-image image{
	width: 506upx;
}
.jiazhuangxian-imagea image{
	margin-top: 20upx;
	width: 700upx;
}
.index-bottom{
	height: 130upx;
}
</style>
