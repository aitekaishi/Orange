<template>
	<view class="assess-details">
		<view class="header">
			<view class="header-left">
				<image :src=avatarUrl mode=""></image>
			</view>
			<view class="header-right">
				<view class="header-right-one">
					{{city}}-{{phone}}
				</view>
				<view class="header-right-two">
					<uni-rate style='display: inline-block;' disabled=true value=5 size='20'></uni-rate>
				</view>
			</view>
		</view>
		<view class="header-right-three">
			{{value}}
		</view>
	</view>
</template>

<script>
	import uniRate from "@/components/uni-rate/uni-rate.vue"
	export default {
		data() {
			return {
				avatarUrl:'',
				city:'',
				phone:'',
				value:'',
			}
		},
		components: {
			uniRate,
		},
		methods: {
			
		},
		onShow() {
			this.avatarUrl = uni.getStorageSync('touxiang')
			this.city = uni.getStorageSync('chenshi')
			this.phone = uni.getStorageSync('shoujihaoA')
			this.value = uni.getStorageSync('pingjia')
		}
	}
</script>

<style scoped>
	.assess-details{
		padding: 30upx;
	}
.header{
	display: flex;
	justify-content: space-between;
}
.header-left image{
	width: 100upx;
	height: 100upx;
	border-radius: 50%;
}
.header-right{
	width: 100%;
	text-align: left;
	box-sizing: border-box;
	padding-left: 20upx;
}
.header-right-three{
	font-size: 28upx;
	color: #999999;
	text-align:justify;
	padding-left: 40upx;
	padding-right: 40upx;
}
.header-right-one{
	color: #000000;
	font-size: 30upx;
	font-weight: 700;
}
</style>
