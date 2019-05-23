<template>
	<view class="order-cotain">
		<view class="none"></view>
		<view class="xsdsdsd radio-one">
			{{address}}
		</view>
		<view class="none"></view>
		<view class="radio radio-one">
			<view class="radion-contain">
				<view class="radio-namea top">全程监理服务</view>
				<view class="radio-contain-rl">
					<view class="radio-name radio-rl">￥29/㎡</view>
					<view class="radio-image"><image src="../../static/img/order/icon_gx@2x.png" mode="widthFix"></image></view>
				</view>
			</view>
			<view class="radio-name">
				最小起算面积：80㎡
			</view>
			<view class="radio-title">工程监理责任险</view>
			<view @click="xuan(1)" class="radion-contain">
				<view class="radio-name top">不购买</view>
				<view class="radio-contain-rl">
					<view class="radio-name radio-rl"></view>
					<view class="radio-image">
						<image :class="xuan1 ? '' : 'disnone'" src="../../static/img/order/icon_gx@2x.png" mode="widthFix"></image>
						<image :class="!xuan1 ? '' : 'disnone'" src="../../static/img/order/icon_fgx@2x.png" mode="widthFix"></image>
					</view>
				</view>
			</view>
			<view @click="xuan(2)" class="radion-contain">
				<view class="radio-name top">99元保两万</view>
				<view class="radio-contain-rl">
					<view class="radio-name radio-rl"></view>
					<view class="radio-image">
						<image :class="xuan2 ? '' : 'disnone'" src="../../static/img/order/icon_gx@2x.png" mode="widthFix"></image>
						<image :class="!xuan2 ? '' : 'disnone'" src="../../static/img/order/icon_fgx@2x.png" mode="widthFix"></image>
					</view>
				</view>
			</view>
			<view @click="xuan(3)" class="radion-contain">
				<view class="radio-name top">199元保五万</view>
				<view class="radio-contain-rl">
					<view class="radio-name radio-rl"></view>
					<view class="radio-image">
						<image :class="xuan3 ? '' : 'disnone'" src="../../static/img/order/icon_gx@2x.png" mode="widthFix"></image>
						<image :class="!xuan3 ? '' : 'disnone'" src="../../static/img/order/icon_fgx@2x.png" mode="widthFix"></image>
					</view>
				</view>
			</view>
			<view @click="xuan(4)" class="radion-contain">
				<view class="radio-name top">299元保十万</view>
				<view class="radio-contain-rl">
					<view class="radio-name radio-rl"></view>
					<view class="radio-image">
						<image :class="xuan4 ? '' : 'disnone'" src="../../static/img/order/icon_gx@2x.png" mode="widthFix"></image>
						<image :class="!xuan4 ? '' : 'disnone'" src="../../static/img/order/icon_fgx@2x.png" mode="widthFix"></image>
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
			address:'',
			xuan1: false,
			xuan2: false,
			xuan3: false,
			xuan4: false,
			tatol: '0',
			disabled: false,
			area:'',
			city:'',
			name:'',
			phone:'',
			
		};
	},
	methods: {
		xuan(x) {
			if (x == 1) {
				this.xuan2 = false;
				this.xuan3 = false;
				this.xuan4 = false;
				if (this.xuan1 == false) {
					this.xuan1 = true;
					uni.setStorageSync('safe', 0);
					uni.setStorageSync('insuranceType', '不需要');
					uni.setStorageSync('insuranceId', 5);
				} else {
					this.xuan1 = false;
					uni.setStorageSync('safe', 0);
				}
			}
			if (x == 2) {
				this.xuan1 = false;
				this.xuan3 = false;
				this.xuan4 = false;
				if (this.xuan2 == false) {
					this.xuan2 = true;
					uni.setStorageSync('safe', 99);
					uni.setStorageSync('insuranceType', '保两万');
					uni.setStorageSync('insuranceId', 2);
				} else {
					this.xuan2 = false;
					uni.setStorageSync('safe', 0);
				}
			}
			if (x == 3) {
				this.xuan2 = false;
				this.xuan1 = false;
				this.xuan4 = false;
				if (this.xuan3 == false) {
					this.xuan3 = true;
					uni.setStorageSync('safe', 199);
					uni.setStorageSync('insuranceType', '保五万');
					uni.setStorageSync('insuranceId', 3);
				} else {
					this.xuan3 = false;
					uni.setStorageSync('safe', 0);
				}
			}
			if (x == 4) {
				this.xuan2 = false;
				this.xuan1 = false;
				this.xuan3 = false;
				if (this.xuan4 == false) {
					this.xuan4 = true;
					uni.setStorageSync('safe', 299);
					uni.setStorageSync('insuranceType', '保十万');
					uni.setStorageSync('insuranceId', 4);
				} else {
					this.xuan4 = false;
					uni.setStorageSync('safe', 0);
				}
			}
		},
		submit() {
			let _this = this;
			if (_this.disabled == true) {
			uni.showLoading({
				title: '提交中'
			});
			uni.removeStorageSync('fuqian')
			leanCloud.Cloud.run('wxOrder', { productDescription: '佰橙科技-装修监理费', amount: _this.tatol*100}).then(data => {
					console.log(data);
					uni.setStorageSync('fuqian',1)
					data.success = () => {
						var Todo = leanCloud.Object.extend('Order');
						var todo = new Todo();
						todo.set('user', leanCloud.User.current());
						todo.set('city', _this.city);
						todo.set('name', _this.name);
						todo.set('mobilePhoneNumber', _this.phone);
						todo.set('area', parseFloat(_this.area));
						todo.set('status', '已支付');
						todo.set('total', _this.tatol);
						todo.set('serviceType', '全程监理服务（29元/m²）');
						todo.set('server', [{"id":2,"name":'全程监理服务'}]);
						todo.set('servicePrice', 29);
						todo.set('address', _this.address);
						todo.set('serviceId', 2);
						todo.set('insuranceType', uni.getStorageSync('insuranceType'));
						todo.set('insurancePrice', uni.getStorageSync('safe'));
						todo.set('insuranceId', uni.getStorageSync('insuranceId'));
						todo.save().then(
							function(todo) {
								uni.hideLoading();
								uni.showToast({
									title: '支付成功',
									duration: 1000
								});
								setTimeout(function() {
									uni.navigateTo({
										url: '../order-from/order-from'
									});
								}, 1000);
							},
							function(error) {
								uni.hideLoading();
								console.log(error)
							}
						);
					};
					data.fail = ({ errMsg }) => {
						console.log(uni.getStorageSync('jianli').city)
						var Todo = leanCloud.Object.extend('Order');
						var todo = new Todo();
						todo.set('user', leanCloud.User.current());
						todo.set('city', _this.city);
						todo.set('name', _this.name);
						todo.set('mobilePhoneNumber', _this.phone);
						todo.set('area', parseFloat(_this.area));
						todo.set('status', '待支付');
						todo.set('total', _this.tatol);
						todo.set('serviceType', '全程监理服务（29元/m²）');
						todo.set('server', [{"id":2,"name":'全程监理服务'}]);
						todo.set('servicePrice', 29);
						todo.set('address', _this.address);
						todo.set('serviceId', 2);
						todo.set('insuranceType', uni.getStorageSync('insuranceType'));
						todo.set('insurancePrice', uni.getStorageSync('safe'));
						todo.set('insuranceId', uni.getStorageSync('insuranceId'));
						todo.save().then(
							function(todo) {
								uni.hideLoading();
								uni.showToast({
									title: '支付取消，请去我的订单查看',
									duration: 1000,
									icon:'none'
								});
								setTimeout(function() {
									uni.navigateTo({
										url: '../order-from/order-from'
									});
								}, 1000);
							},
							function(error) {
								uni.hideLoading();
								console.log(error)
							}
						);
					};
					uni.requestPayment(data);
				}).catch(error => {
					console.log(error);
				});
			}
		}
	},
	updated() {
		if ( (this.xuan1 != false || this.xuan2 != false || this.xuan3 != false|| this.xuan4 != false)) {
			this.disabled = true;
		} else {
			this.disabled = false;
		}
		this.tatol = uni.getStorageSync('jianlia') + uni.getStorageSync('safe');
	},
	created() {
		let _this = this
		uni.setStorageSync('safe', 0);
		console.log(uni.getStorageSync('jianli').city)
		console.log(uni.getStorageSync('jianli'))
		_this.address = uni.getStorageSync('jianli').address
		_this.city = uni.getStorageSync('jianli').city
		_this.name = uni.getStorageSync('jianli').name
		_this.area = uni.getStorageSync('jianli').area
		_this.phone = uni.getStorageSync('jianli').phone.toString()
		if (_this.area>=80) {
			_this.tatol = parseInt(uni.getStorageSync('jianli').area)*29;
		} else{
			_this.tatol = 2320
		}
		uni.setStorageSync('jianlia', _this.tatol);
	}
};
</script>

<style scoped lang="less">
	.bottom-one-title{
		font-size: 24upx;
		color: #FF9900;
	}
	.bottom-one-titlea{
		font-size: 42upx;
		font-weight: 600;
		color: #FF9900;
	}
.input {
	display: flex;
	width: 100%;
	height: 108upx;
	line-height: 108upx;
	margin-bottom: 10upx;
	background: #ffffff;

	.input-title {
		color: #999999;
		font-size: 28upx;
		margin-left: 22upx;
	}

	.uni-input {
		flex: 1;
		font-size: 28upx;
		margin: 16upx;
		height: 108upx;
		line-height: 108upx;
		margin-top: 0;
	}
}

.none {
	width: 100%;
	height: 20upx;
	background: #f9f9fb;
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
			position: relative;
			top: -10upx;
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
	height: 500upx;
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
.radio-name {
			font-size: 28upx;
			color: #999999;
			display: inline-block;
			margin-right: 20upx;
			position: relative;
			top: -10upx;
		}
</style>
