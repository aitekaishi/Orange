<template>
	<view class="order-cotain">
		<view class="yy-success">
			<image src="http://lc-ndknejad.cn-n1.lcfile.com/181bef5f0184865779fe/yy-succes.png" mode="widthFix"/>
		</view>
		<view class="none"></view>
		<view class="input">
			<image src="../../static/img/order/icon-city.png"></image>
			<input type="text" v-model="city" @input="onCity" class="uni-input" focus placeholder="您的城市" />
			
		</view>
		<view class="bottom"></view>
		<view class="input">
			<image src="../../static/img/order/icon-name.png"></image>
			<input type="text" v-model="name" @input="onName"  class="uni-input" placeholder="您的姓名" />
			
		</view>
		<view class="bottom"></view>
		<view class="input">
			<image src="../../static/img/order/icon-phone.png"></image>
			<input type="number" maxlength='11' v-model="phone" @input="onPhone" class="uni-input" placeholder="手机号码" />
			
		</view>
		<view class="bottom"></view>
		<button plain=true :disabled="disabled" class="submit" @click="submit">立即预约</button>
	</view>
</template>

<script>
	import * as leanCloud from 'leancloud-storage/dist/av-weapp.js'
	export default {
		data() {
			return {
				disabled:false,
				city:'湖南长沙',
				name:'',
				phone:'',
			};
		},
		onUnload() {
			if (uni.getStorageSync('wodetiaozhuanga') == 2) {
				uni.setStorageSync('activeIndex',2)
			} else{
				uni.setStorageSync('activeIndex',0)
			}
		},
		methods:{
			onCity: function(event,) {
				this.city = event.target.value
			},
			onName: function(event,) {
				this.name = event.target.value
			},
			onPhone: function(event,) {
				this.phone = event.target.value
			},
			submit(){
				let _this = this
				if(_this.city.length<2){
					uni.showToast({
						title: '请正确填写城市',
						duration: 2000,
						icon:'none'
					});
					return
				}
				if(_this.name.length<2){
					uni.showToast({
						title: '请正确填写名字',
						duration: 2000,
						icon:'none'
					});
					return
				}
				if(!/^[0-9]{11}$/.test(_this.phone)){
					uni.showToast({
						title: '请正确填写手机号码',
						duration: 2000,
						icon:'none'
					});
					return
				}
				uni.showLoading({
					title:'提交中'
				})
				console.log(leanCloud.User.current())
				var Todo = leanCloud.Object.extend('Booking');
				var todo = new Todo();
				todo.set('user', leanCloud.User.current());
				todo.set('city', _this.city);
				todo.set('name', _this.name);
				todo.set('mobilePhoneNumber', _this.phone);
				todo.save().then(function (todo) {
				  uni.hideLoading()
				  uni.showToast({
				  	title:'预约成功',
					icon:'none',
					duration:1000
				  })
				  /* uni.navigateTo({
				  	url: '../submit-success/submit-success'
				  }); */
				}, function (error) {
				  uni.hideLoading()
				  /* uni.navigateTo({
				  	url: '../submit-fail/submit-fail'
				  }); */
				});
			}
		},
		updated(){
			
			if(this.city != ''&&this.name != ''&&this.phone != ''){
				this.disabled = false;
			}else{
				this.disabled = false;
			}
		},
		created(){
			
		},
	}
</script>

<style scoped lang="less">
	.order-cotain{
	}
	.yy-success{
		image{
			width: 100%;
			margin-top: 30upx;
		}
	}

.input{
	display: flex;
	image{
		width: 48upx;
		height: 48upx;
		margin: 16upx;
	}
	.uni-input{
		flex: 1;
		font-size: 28upx;
		margin: 16upx;
	}
	
	
	
}
.bottom{
		width: 720upx;
		height: 2upx;
		background: #cccccc;
		position: relative;
		left: 16upx;
		margin-bottom: 20upx;
	}
	.none{
		width: 100%;
		height: 20upx;
		background: #F9F9FB;
	}
	.submit{
		width: 710upx;
		height: 72upx;
		background: #FF9900;
		border-radius: 36upx;
		color: #FFFFFF;
		border: none;
		line-height: 72upx;
		margin-top: 200upx;
		font-size: 28upx;
	}
</style>
