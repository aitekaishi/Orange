<template>
	<view class="order-cotain">
		<view class="none"></view>
		<view class="xsdsdsd radio-one">
			湖南省长沙市雨花区天舟大厦7楼7702
		</view>
		<view class="none"></view>
		<view class="radio radio-one">
			<view class="radio-title">前期审核服务</view>
			<view class="none"></view>
			<view class="none"></view>
			<view @click="xuan(1)" class="radion-contain">
				<view class="radio-name topzzz">图纸审核</view>
				<view class="radio-contain-rl">
					<view class="radio-name radio-rl">299元/次</view>
					<view class="radio-image">
						<image :class="xuan1 ? '' : 'disnone'" src="../../static/img/order/icon_gx@2x.png" mode="widthFix"></image>
						<image :class="!xuan1 ? '' : 'disnone'" src="../../static/img/order/icon_fgx@2x.png" mode="widthFix"></image>
					</view>
				</view>
			</view>
			<view @click="xuan(2)" class="radion-contain">
				<view class="radio-name topzzz">预算审核</view>
				<view class="radio-contain-rl">
					<view class="radio-name radio-rl">299元/次</view>
					<view class="radio-image">
						<image :class="xuan2 ? '' : 'disnone'" src="../../static/img/order/icon_gx@2x.png" mode="widthFix"></image>
						<image :class="!xuan2 ? '' : 'disnone'" src="../../static/img/order/icon_fgx@2x.png" mode="widthFix"></image>
					</view>
				</view>
			</view>
			<view @click="xuan(3)" class="radion-contain">
				<view class="radio-name topzzz">合同陪签</view>
				<view class="radio-contain-rl">
					<view class="radio-name radio-rl">299元/次</view>
					<view class="radio-image">
						<image :class="xuan3 ? '' : 'disnone'" src="../../static/img/order/icon_gx@2x.png" mode="widthFix"></image>
						<image :class="!xuan3 ? '' : 'disnone'" src="../../static/img/order/icon_fgx@2x.png" mode="widthFix"></image>
					</view>
				</view>
			</view>
		</view>
		<view class="none"></view>
		<view class="bottom">
			<view class="bottom-one"><text class="bottom-one-title">合计：</text><text class="bottom-one-titlea">￥{{ tatol }}</text></view>
			<button :class="disabled ? 'true' : 'false'" @click="submit" class="bottom-two">提交订单</button>
		</view>
	</view>
</template>

<script>
import * as leanCloud from 'leancloud-storage/dist/av-weapp.js';
export default {
	data() {
		return {
			xuan1: false,
			xuan2: false,
			xuan3: false,
			tatol: '0',
			disabled: false,
		};
	},
	methods: {
		xuan(x) {
			if (x == 1) {
				this.xuan2 = false;
				this.xuan3 = false;
				if (this.xuan1 == false) {
					this.xuan1 = true;
					this.tatol=299
				} else {
					this.xuan1 = false;
					this.tatol=0
				}
			}
			if (x == 2) {
				this.xuan1 = false;
				this.xuan3 = false;
				if (this.xuan2 == false) {
					this.xuan2 = true;
					this.tatol=299
				} else {
					this.xuan2 = false;
					this.tatol=0
				}
			}
			if (x == 3) {
				this.xuan2 = false;
				this.xuan1 = false;
				if (this.xuan3 == false) {
					this.xuan3 = true;
					this.tatol=299
				} else {
					this.xuan3 = false;
					this.tatol=0
				}
			}
		},
		submit() {
			let _this = this;
			uni.showLoading({
				title: '提交中'
			});
			leanCloud.Cloud.run('wxOrder', { productDescription: '佰橙科技-装修监理费', amount: _this.tatol*100}).then(data => {
					console.log(data);
					data.success = () => {
						// 支付成功
						//uni.setStorageSync('orderId', uni.getStorageSync('orderId') + 1);
						var Todo = leanCloud.Object.extend('Order');
						var todo = new Todo();
						todo.set('user', leanCloud.User.current());
						todo.set('city', _this.city);
						todo.set('name', _this.name);
						todo.set('mobilePhoneNumber', _this.phone);
						todo.set('area', parseFloat(_this.area));
						todo.set('status', '已完成');
						todo.set('total', _this.tatol);
						todo.set('serviceType', '全程监理服务');
						todo.set('servicePrice', 29);
						todo.set('address', _this.aress);
						todo.set('serviceId', 2);
						todo.set('insuranceType', uni.getStorageSync('insuranceType'));
						todo.set('insurancePrice', uni.getStorageSync('safe'));
						todo.set('insuranceId', uni.getStorageSync('insuranceId'));
						//todo.set('createdAt', new Date().toLocaleString().replace('上午','').replace('下午',''));
						//todo.set('updatedAt', new Date().toLocaleString().replace('上午','').replace('下午',''));
						//todo.set('orderId', uni.getStorageSync('orderId')+1);
						todo.save().then(
							function(todo) {
								uni.hideLoading();
								uni.showToast({
									title: '支付成功',
									duration: 1000
								});
								setTimeout(function() {
									uni.navigateTo({
										url: '../index/index'
									});
								}, 1000);
							},
							function(error) {
								uni.hideLoading();
								console.log(error)
								/* uni.navigateTo({
									url: '../submit-fail/submit-fail'
								}); */
							}
						);
					};
					data.fail = ({ errMsg }) => {
						console.log(errMsg)
						uni.showToast({
							title: "支付失败",
							duration: 1000
						});
					};
					uni.requestPayment(data);
				}).catch(error => {
					console.log(error);
				});
		}
	},
	updated() {
		if ( (this.xuan1 != false || this.xuan2 != false || this.xuan3 != false)) {
			this.disabled = true;
		} else {
			this.disabled = false;
		}
	},
	created() {
	}
};
</script>

<style scoped lang="less">
	.topzzz{
		position: relative;
		top: 0;
	}
	.bottom-one-title{
		font-size: 24upx;
		color: #FF9900;
	}
	.bottom-one-titlea{
		font-size: 42upx;
		font-weight: 600;
		color: #FF9900;
	}

.none {
	width: 100%;
	height: 20upx;
}

.submit {
	width: 710upx;
	height: 72upx;
	background: #3fa6eb;
	border-radius: 36upx;
	border: none;
	line-height: 72upx;
	margin-top: 200upx;
	font-size: 28upx;
}

.order-cotain {
	background: #f9f9fb;
	min-height: 100vh;
}

.radio {
	padding: 20upx;
	background: #ffffff;
	padding-bottom: 0;

	.radio-title {
		font-size: 32upx;
		margin-bottom: 10upx;
	}

	.radion-contain {
		display: flex;

		.radio-name {
			font-size: 28upx;
			color: #999999;
			display: inline-block;
			margin-right: 20upx;
		}

		.radio-contain-rl {
			flex: 1;
			text-align: right;
			.radio-image {
				display: inline-block;
				image {
					width: 36upx;
					height: 36upx;
				}
			}
		}
	}
}

.disnone {
	display: none;
}

.bottom {
	display: flex;
	height: 100upx;
	text-align: center;
	position: absolute;
	bottom: 0;
	.bottom-one {
		width: 400upx;
		line-height: 100upx;
		font-size: 32upx;
		color: #333333;
		background: #ffffff;
		text-align: left;
		padding-left: 20upx;
	}

	.bottom-two {
		width: 350upx;
		line-height: 100upx;
		font-size: 32upx;
		color: #ffffff;
		border-radius: 0;
		border: none;
	}
}

.true {
	background: #ff9900;
}
.false {
	background: #c3c3c3;
}
.radio-namea{
	font-size: 28upx;
	color: #333333;
}
.radio-one{
	width: 710upx;
	height: 320upx;
	box-sizing: border-box;
	margin: 0 auto;
	border-radius: 12upx;
	background: #FFFFFF;
}
.xsdsdsd{
	font-size: 28upx;
	height: 100upx;
	line-height: 100upx;
	padding-left: 20upx;
}

</style>
