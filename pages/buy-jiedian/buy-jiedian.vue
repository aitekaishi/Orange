<template>
	<view class="order-cotaina">
		<view class="none"></view>
		<view class="xsdsdsd radio-one">
			{{address}}
		</view>
		<view class="none"></view>
		<view class="radio radio-one">
			<view class="radion-contain">
				<view class="radio-namea top">节点验收服务</view>
			</view>
			<view style="height: 20upx;"></view>
			<view @click="xuan(1)" class="radion-contain">
				<view class="radio-name top">水电节点</view>
				<view class="radio-contain-rl">
					<view class="radio-name radio-rl">299元/次</view>
					<view class="radio-image">
						<image :class="xuan1 ? '' : 'disnone'" src="../../static/img/order/icon_gx@2x.png" mode="widthFix"></image>
						<image :class="!xuan1 ? '' : 'disnone'" src="../../static/img/order/icon_fgx@2x.png" mode="widthFix"></image>
					</view>
				</view>
			</view>
			<view @click="xuan(2)" class="radion-contain">
				<view class="radio-name top">泥工节点</view>
				<view class="radio-contain-rl">
					<view class="radio-name radio-rl">299元/次</view>
					<view class="radio-image">
						<image :class="xuan2 ? '' : 'disnone'" src="../../static/img/order/icon_gx@2x.png" mode="widthFix"></image>
						<image :class="!xuan2 ? '' : 'disnone'" src="../../static/img/order/icon_fgx@2x.png" mode="widthFix"></image>
					</view>
				</view>
			</view>
			<view @click="xuan(3)" class="radion-contain">
				<view class="radio-name top">木作节点</view>
				<view class="radio-contain-rl">
					<view class="radio-name radio-rl">299元/次</view>
					<view class="radio-image">
						<image :class="xuan3 ? '' : 'disnone'" src="../../static/img/order/icon_gx@2x.png" mode="widthFix"></image>
						<image :class="!xuan3 ? '' : 'disnone'" src="../../static/img/order/icon_fgx@2x.png" mode="widthFix"></image>
					</view>
				</view>
			</view>
			<view @click="xuan(4)" class="radion-contain">
				<view class="radio-name top">油漆节点</view>
				<view class="radio-contain-rl">
					<view class="radio-name radio-rl">299元/次</view>
					<view class="radio-image">
						<image :class="xuan4 ? '' : 'disnone'" src="../../static/img/order/icon_gx@2x.png" mode="widthFix"></image>
						<image :class="!xuan4 ? '' : 'disnone'" src="../../static/img/order/icon_fgx@2x.png" mode="widthFix"></image>
					</view>
				</view>
			</view>
			<view @click="xuan(5)" class="radion-contain">
				<view class="radio-name top">竣工节点</view>
				<view class="radio-contain-rl">
					<view class="radio-name radio-rl">399元/次</view>
					<view class="radio-image">
						<image :class="xuan5 ? '' : 'disnone'" src="../../static/img/order/icon_gx@2x.png" mode="widthFix"></image>
						<image :class="!xuan5 ? '' : 'disnone'" src="../../static/img/order/icon_fgx@2x.png" mode="widthFix"></image>
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
			xuan5: false,
			tatol: '0',
			disabled: false,
			area:'',
			city:'',
			name:'',
			phone:'',
			server:[]
		};
	},
	methods: {
		xuan(x) {
			if (x == 1) {
				if (this.xuan1 == false) {
					this.xuan1 = true;
				} else {
					this.xuan1 = false;
				}
			}
			if (x == 2) {
				if (this.xuan2 == false) {
					this.xuan2 = true;
				} else {
					this.xuan2 = false;
				}
			}
			if (x == 3) {
				if (this.xuan3 == false) {
					this.xuan3 = true;
				} else {
					this.xuan3 = false;
				}
			}
			if (x == 4) {
				if (this.xuan4 == false) {
					this.xuan4 = true;
				} else {
					this.xuan4 = false;
				}
			}
			if (x == 5) {
				if (this.xuan5 == false) {
					this.xuan5 = true;
				} else {
					this.xuan5 = false;
				}
			}
		},
		submit() {
			let a = this.xuan1
			let b = this.xuan2
			let c = this.xuan3
			let d = this.xuan4
			let e = this.xuan5
			//水电节点,泥工节点,木作节点,油漆节点,竣工节点
			if (Number(a).toString()+Number(b).toString()+Number(c).toString()+Number(d).toString()+Number(e).toString()=='00000') {
				this.server = []	//水电节点,泥工节点,木作节点,油漆节点,竣工节点
			}
			else if (Number(a).toString()+Number(b).toString()+Number(c).toString()+Number(d).toString()+Number(e).toString()=='00001') {
				this.server = [{'id':16,'name':'竣工节点'}]
			}
			else if (Number(a).toString()+Number(b).toString()+Number(c).toString()+Number(d).toString()+Number(e).toString()=='00010') {
			this.server = [{'id':15,'name':'油漆节点'}]	//水电节点,泥工节点,木作节点,,竣工节点
			}
			else if (Number(a).toString()+Number(b).toString()+Number(c).toString()+Number(d).toString()+Number(e).toString()=='00011') {
				this.server = [{'id':15,'name':'油漆节点'},{'id':16,'name':'竣工节点'}]	//水电节点,泥工节点,木作节点,
			}
			else if (Number(a).toString()+Number(b).toString()+Number(c).toString()+Number(d).toString()+Number(e).toString()=='00100') {
			this.server = [{'id':14,'name':'木作节点'}]	//水电节点,泥工节点,木作节点,,竣工节点
			}
			else if (Number(a).toString()+Number(b).toString()+Number(c).toString()+Number(d).toString()+Number(e).toString()=='00101') {
				this.server = [{'id':14,'name':'木作节点'},{'id':16,'name':'竣工节点'}]
			}
			else if (Number(a).toString()+Number(b).toString()+Number(c).toString()+Number(d).toString()+Number(e).toString()=='00110') {
				this.server = [{'id':14,'name':'木作节点'},{'id':15,'name':'油漆节点'}]
			}
			else if (Number(a).toString()+Number(b).toString()+Number(c).toString()+Number(d).toString()+Number(e).toString()=='00111') {
				this.server = [{'id':14,'name':'木作节点'},{'id':15,'name':'油漆节点'},{'id':16,'name':'竣工节点'}]
			}
			else if (Number(a).toString()+Number(b).toString()+Number(c).toString()+Number(d).toString()+Number(e).toString()=='01000') {
				this.server = [{'id':13,'name':'泥工节点'}]
			}
			else if (Number(a).toString()+Number(b).toString()+Number(c).toString()+Number(d).toString()+Number(e).toString()=='01001') {
				this.server = [{'id':13,'name':'泥工节点'},{'id':16,'name':'竣工节点'}]
			}
			else if (Number(a).toString()+Number(b).toString()+Number(c).toString()+Number(d).toString()+Number(e).toString()=='01010') {
				this.server = [{'id':13,'name':'泥工节点'},{'id':15,'name':'油漆节点'}]
			}
				
			else if (Number(a).toString()+Number(b).toString()+Number(c).toString()+Number(d).toString()+Number(e).toString()=='01011') {
			this.server = [{'id':13,'name':'泥工节点'},{'id':15,'name':'油漆节点'},{'id':16,'name':'竣工节点'}]
			
			}
			else if (Number(a).toString()+Number(b).toString()+Number(c).toString()+Number(d).toString()+Number(e).toString()=='01100') {
				
			this.server = [{'id':13,'name':'泥工节点'},{'id':14,'name':'木作节点'}]
			}
			else if (Number(a).toString()+Number(b).toString()+Number(c).toString()+Number(d).toString()+Number(e).toString()=='01101') {
				this.server = [{'id':13,'name':'泥工节点'},{'id':14,'name':'木作节点'},{'id':16,'name':'竣工节点'}]
			
			}
			else if (Number(a).toString()+Number(b).toString()+Number(c).toString()+Number(d).toString()+Number(e).toString()=='01110') {
				this.server = [{'id':13,'name':'泥工节点'},{'id':14,'name':'木作节点'},{'id':15,'name':'油漆节点'}]
			
			}
			else if (Number(a).toString()+Number(b).toString()+Number(c).toString()+Number(d).toString()+Number(e).toString()=='01111') {
				this.server = [{'id':13,'name':'泥工节点'},{'id':14,'name':'木作节点'},{'id':15,'name':'油漆节点'},{'id':16,'name':'竣工节点'}]
			}
			else if (Number(a).toString()+Number(b).toString()+Number(c).toString()+Number(d).toString()+Number(e).toString()=='10000') {
				this.server = [{'id':12,'name':'水电节点'}]
			
			}
			else if (Number(a).toString()+Number(b).toString()+Number(c).toString()+Number(d).toString()+Number(e).toString()=='10001') {
				this.server = [{'id':12,'name':'水电节点'},{'id':16,'name':'竣工节点'}]
			}
			else if (Number(a).toString()+Number(b).toString()+Number(c).toString()+Number(d).toString()+Number(e).toString()=='10010') {
				this.server = [{'id':12,'name':'水电节点'},{'id':15,'name':'油漆节点'}]
			}
			else if (Number(a).toString()+Number(b).toString()+Number(c).toString()+Number(d).toString()+Number(e).toString()=='10011') {
				this.server = [{'id':12,'name':'水电节点'},{'id':15,'name':'油漆节点'},{'id':16,'name':'竣工节点'}]
			}
			else if (Number(a).toString()+Number(b).toString()+Number(c).toString()+Number(d).toString()+Number(e).toString()=='10100') {
			this.server = [{'id':12,'name':'水电节点'},{'id':14,'name':'木作节点'}]
			}
			else if (Number(a).toString()+Number(b).toString()+Number(c).toString()+Number(d).toString()+Number(e).toString()=='10101') {
				this.server = [{'id':12,'name':'水电节点'},{'id':14,'name':'木作节点'},{'id':16,'name':'竣工节点'}]
			}
			else if (Number(a).toString()+Number(b).toString()+Number(c).toString()+Number(d).toString()+Number(e).toString()=='10110') {
				this.server = [{'id':12,'name':'水电节点'},{'id':14,'name':'木作节点'},{'id':15,'name':'油漆节点'}]
			}
			else if (Number(a).toString()+Number(b).toString()+Number(c).toString()+Number(d).toString()+Number(e).toString()=='10111') {
				this.server = [{'id':12,'name':'水电节点'},{'id':14,'name':'木作节点'},{'id':15,'name':'油漆节点'},{'id':16,'name':'竣工节点'}]
			}
			else if (Number(a).toString()+Number(b).toString()+Number(c).toString()+Number(d).toString()+Number(e).toString()=='11000') {
				this.server = [{'id':12,'name':'水电节点'},{'id':13,'name':'泥工节点'}]
			}
			else if (Number(a).toString()+Number(b).toString()+Number(c).toString()+Number(d).toString()+Number(e).toString()=='11001') {
				this.server = [{'id':12,'name':'水电节点'},{'id':13,'name':'泥工节点'},{'id':16,'name':'竣工节点'}]
			}
			else if (Number(a).toString()+Number(b).toString()+Number(c).toString()+Number(d).toString()+Number(e).toString()=='11010') {
			this.server = [{'id':12,'name':'水电节点'},{'id':13,'name':'泥工节点'},{'id':15,'name':'油漆节点'}]
			}
			else if (Number(a).toString()+Number(b).toString()+Number(c).toString()+Number(d).toString()+Number(e).toString()=='11011') {
				this.server = [{'id':12,'name':'水电节点'},{'id':13,'name':'泥工节点'},{'id':15,'name':'油漆节点'},{'id':16,'name':'竣工节点'}]
			}
			else if (Number(a).toString()+Number(b).toString()+Number(c).toString()+Number(d).toString()+Number(e).toString()=='11100') {
				this.server = [{'id':12,'name':'水电节点'},{'id':13,'name':'泥工节点'},{'id':14,'name':'木作节点'}]
			}
			else if (Number(a).toString()+Number(b).toString()+Number(c).toString()+Number(d).toString()+Number(e).toString()=='11101') {
				this.server = [{'id':12,'name':'水电节点'},{'id':13,'name':'泥工节点'},{'id':14,'name':'木作节点'},{'id':16,'name':'竣工节点'}]	//水电节点,泥工节点,木作节点,油漆节点,竣工节点
			}
			else if (Number(a).toString()+Number(b).toString()+Number(c).toString()+Number(d).toString()+Number(e).toString()=='11110') {
				this.server = [{'id':12,'name':'水电节点'},{'id':13,'name':'泥工节点'},{'id':14,'name':'木作节点'},{'id':15,'name':'油漆节点'}]	//水电节点,泥工节点,木作节点,油漆节点,竣工节点
			}
			else if (Number(a).toString()+Number(b).toString()+Number(c).toString()+Number(d).toString()+Number(e).toString()=='11111') {
				this.server = [{'id':12,'name':'水电节点'},{'id':13,'name':'泥工节点'},{'id':14,'name':'木作节点'},{'id':15,'name':'油漆节点'},{'id':16,'name':'竣工节点'}]	//水电节点,泥工节点,木作节点,油漆节点,竣工节点
			}
			
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
							todo.set('serviceType', '节点验收服务');
							todo.set('server', _this.server);
							todo.set('servicePrice', 0);
							todo.set('address', _this.address);
							todo.set('serviceId', 11);
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
							todo.set('serviceType', '节点验收服务');
							todo.set('server', _this.server);
							todo.set('servicePrice', 0);
							todo.set('address', _this.address);
							todo.set('serviceId', 11);
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
		let a = this.xuan1
		let b = this.xuan2
		let c = this.xuan3
		let d = this.xuan4
		let e = this.xuan5
		if (Number(a).toString()+Number(b).toString()+Number(c).toString()+Number(d).toString()+Number(e).toString()=='00000') {
			this.disabled = false
			this.tatol = 0
		}
		else if (Number(a).toString()+Number(b).toString()+Number(c).toString()+Number(d).toString()+Number(e).toString()=='00001') {
			this.tatol = 399
			this.disabled = true
		}
		else if (Number(a).toString()+Number(b).toString()+Number(c).toString()+Number(d).toString()+Number(e).toString()=='00010') {
			this.tatol = 299
			this.disabled = true
		}
		else if (Number(a).toString()+Number(b).toString()+Number(c).toString()+Number(d).toString()+Number(e).toString()=='00011') {
			this.tatol = 698
			this.disabled = true
		}
		else if (Number(a).toString()+Number(b).toString()+Number(c).toString()+Number(d).toString()+Number(e).toString()=='00100') {
			this.tatol = 299
			this.disabled = true
		}
		else if (Number(a).toString()+Number(b).toString()+Number(c).toString()+Number(d).toString()+Number(e).toString()=='00101') {
			this.tatol = 698
			this.disabled = true
		}
		else if (Number(a).toString()+Number(b).toString()+Number(c).toString()+Number(d).toString()+Number(e).toString()=='00110') {
			this.tatol = 698
			this.disabled = true
		}
		else if (Number(a).toString()+Number(b).toString()+Number(c).toString()+Number(d).toString()+Number(e).toString()=='00111') {
			this.tatol = 997
			this.disabled = true
		}
		else if (Number(a).toString()+Number(b).toString()+Number(c).toString()+Number(d).toString()+Number(e).toString()=='01000') {
			this.tatol = 299
			this.disabled = true
		}
		else if (Number(a).toString()+Number(b).toString()+Number(c).toString()+Number(d).toString()+Number(e).toString()=='01001') {
			this.tatol = 698
			this.disabled = true
		}
		else if (Number(a).toString()+Number(b).toString()+Number(c).toString()+Number(d).toString()+Number(e).toString()=='01010') {
			this.tatol = 598
			this.disabled = true
		}
		else if (Number(a).toString()+Number(b).toString()+Number(c).toString()+Number(d).toString()+Number(e).toString()=='01011') {
			this.tatol = 997
			this.disabled = true

		}
		else if (Number(a).toString()+Number(b).toString()+Number(c).toString()+Number(d).toString()+Number(e).toString()=='01100') {
			this.tatol = 598
			this.disabled = true

		}
		else if (Number(a).toString()+Number(b).toString()+Number(c).toString()+Number(d).toString()+Number(e).toString()=='01101') {
			this.tatol = 997
			this.disabled = true

		}
		else if (Number(a).toString()+Number(b).toString()+Number(c).toString()+Number(d).toString()+Number(e).toString()=='01110') {
			this.tatol = 897
			this.disabled = true

		}
		else if (Number(a).toString()+Number(b).toString()+Number(c).toString()+Number(d).toString()+Number(e).toString()=='01111') {
			this.tatol = 1296
			this.disabled = true

		}
		else if (Number(a).toString()+Number(b).toString()+Number(c).toString()+Number(d).toString()+Number(e).toString()=='10000') {
			this.tatol = 299
			this.disabled = true

		}
		else if (Number(a).toString()+Number(b).toString()+Number(c).toString()+Number(d).toString()+Number(e).toString()=='10001') {
			this.tatol = 698
			this.disabled = true
		}
		else if (Number(a).toString()+Number(b).toString()+Number(c).toString()+Number(d).toString()+Number(e).toString()=='10010') {
			this.tatol = 598
			this.disabled = true
		}
		else if (Number(a).toString()+Number(b).toString()+Number(c).toString()+Number(d).toString()+Number(e).toString()=='10011') {
			this.tatol = 997
			this.disabled = true
		}
		else if (Number(a).toString()+Number(b).toString()+Number(c).toString()+Number(d).toString()+Number(e).toString()=='10100') {
			this.tatol = 598
			this.disabled = true
		}
		else if (Number(a).toString()+Number(b).toString()+Number(c).toString()+Number(d).toString()+Number(e).toString()=='10101') {
			this.tatol = 997
			this.disabled = true
		}
		else if (Number(a).toString()+Number(b).toString()+Number(c).toString()+Number(d).toString()+Number(e).toString()=='10110') {
			this.tatol = 897
			this.disabled = true
		}
		else if (Number(a).toString()+Number(b).toString()+Number(c).toString()+Number(d).toString()+Number(e).toString()=='10111') {
			this.tatol = 1296
			this.disabled = true
		}
		else if (Number(a).toString()+Number(b).toString()+Number(c).toString()+Number(d).toString()+Number(e).toString()=='11000') {
			this.tatol = 598
			this.disabled = true
		}
		else if (Number(a).toString()+Number(b).toString()+Number(c).toString()+Number(d).toString()+Number(e).toString()=='11001') {
			this.tatol = 997
			this.disabled = true
		}
		else if (Number(a).toString()+Number(b).toString()+Number(c).toString()+Number(d).toString()+Number(e).toString()=='11010') {
			this.tatol = 897
			this.disabled = true
		}
		else if (Number(a).toString()+Number(b).toString()+Number(c).toString()+Number(d).toString()+Number(e).toString()=='11011') {
			this.tatol = 1296
			this.disabled = true
		}
		else if (Number(a).toString()+Number(b).toString()+Number(c).toString()+Number(d).toString()+Number(e).toString()=='11100') {
			this.tatol = 897
			this.disabled = true
		}
		else if (Number(a).toString()+Number(b).toString()+Number(c).toString()+Number(d).toString()+Number(e).toString()=='11101') {
			this.tatol = 1296
			this.disabled = true
		}
		else if (Number(a).toString()+Number(b).toString()+Number(c).toString()+Number(d).toString()+Number(e).toString()=='11110') {
			this.tatol = 1196
			this.disabled = true
		}
		else if (Number(a).toString()+Number(b).toString()+Number(c).toString()+Number(d).toString()+Number(e).toString()=='11111') {
			this.tatol = 1595
			this.disabled = true
		}
		
	},
	created() {
		console.log(uni.getStorageSync('jianli').city)
		console.log(uni.getStorageSync('jianli'))
		this.address = uni.getStorageSync('jianli').address
		this.city = uni.getStorageSync('jianli').city
		this.name = uni.getStorageSync('jianli').name
		this.area = uni.getStorageSync('jianli').area
		this.phone = uni.getStorageSync('jianli').phone.toString()
		this.tatol = 0
		uni.setStorageSync('insuranceType', '');
		uni.setStorageSync('insuranceId', 0);
		uni.setStorageSync('safe', 0);
		uni.setStorageSync('jianlia', this.tatol);
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

.order-cotaina {
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
	height: 400upx;
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
