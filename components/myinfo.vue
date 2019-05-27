<template>
  <view class="myinfo">
		<view class="myinfo-header">
			<view class="image-headerview"> 
				<image class="image-header" :src="header" mode="widthFix"/>
			</view>
			<view class="image-headerviewname">
				<view class="text-header">{{name}}</view>
				<view class="text-header">{{phone}}</view>
			</view>
			
			
		</view>
  <view class="weui-cells weui-cells_after-title">
	  <button @click="house" plain=true>
	  	<navigator  class="weui-cell weui-cell_access" hover-class="weui-cell_active">
	  		<image src="/static/img/icon/icon_fangwu@2x.png" mode="widthFix"/>
	  	  <view class="weui-cell__bd">我的房屋</view>
	  	  <view class="weui-cell__ft weui-cell__ft_in-access"></view>
	  	</navigator>
	  </button>
		<!-- <view class="bottom"></view>
		<button plain=true open-type='contact'>
			<navigator  class="weui-cell weui-cell_access" hover-class="weui-cell_active">
				<image src="/static/img/icon/icon_zxzx@2x.png" mode="widthFix"/>
			  <view class="weui-cell__bd">在线咨询</view>
			 <view class="weui-cell__ft weui-cell__ft_in-access">周一至周六10:10-21:00</view>
			</navigator>
		</button>
		<view class="bottom"></view>
    <button plain=true @click='call'>
    	<navigator  class="weui-cell weui-cell_access" hover-class="weui-cell_active">
    		<image src="/static/img/icon/icon_dhzx@2x.png" mode="widthFix"/>
    	  <view class="weui-cell__bd">电话咨询</view>
    	  <view class="weui-cell__ft weui-cell__ft_in-access">周一至周六10:10-21:00</view>
    	</navigator>
    </button> -->
		<view class="bottom"></view>
		<button @click="myOrder" plain=true>
			<navigator  class="weui-cell weui-cell_access" hover-class="weui-cell_active">
				<image src="/static/img/icon/icon_wodedingdan@2x.png" mode="widthFix"/>
			  <view class="weui-cell__bd">我的订单</view>
			  <view class="weui-cell__ft weui-cell__ft_in-access"></view>
			</navigator>
		</button>
		<view class="bottom"></view>
		<button @click="work" plain=true>
			<navigator  class="weui-cell weui-cell_access" hover-class="weui-cell_active">
				<image src="http://lc-ndknejad.cn-n1.lcfile.com/0abc5a2f398cde4744bc/icon_jianliyunbaogao%402x.png" mode="widthFix"/>
			  <view class="weui-cell__bd">监理云报告</view>
			  <view class="weui-cell__ft weui-cell__ft_in-access"></view>
			</navigator>
		</button>
		<!-- <view class="bottom"></view>
		<button @click="help" plain=true>
			<navigator  class="weui-cell weui-cell_access" hover-class="weui-cell_active">
				<image src="/static/img/icon/icon_bzyfk@2x.png" mode="widthFix"/>
			  <view class="weui-cell__bd">帮助与反馈</view>
			  <view class="weui-cell__ft weui-cell__ft_in-access"></view>
			</navigator>
		</button> -->
		<view class="bottom"></view>
		<button @click="setting" plain=true>
			<navigator  class="weui-cell weui-cell_access" hover-class="weui-cell_active">
				<image src="/static/img/icon/icon-shezhi@2x.png" mode="widthFix"/>
			  <view class="weui-cell__bd">设置</view>
			  <view class="weui-cell__ft weui-cell__ft_in-access"></view>
			</navigator>
		</button>
</view>
		<view :class="{ xixiaaaa: userinfo == false }" class="uni-mask"></view>
		<view :class="{ xixiaaaa: userinfo == false }" class="denglu">
			<view class="denglu-title">
				<view>
					<image src="http://lc-ndknejad.cn-n1.lcfile.com/e42c97188659375d7860/icon_shoucidenglu%402x.png" mode=""></image>
					<text>首次登录时，需要完成以下步骤</text>
				</view>
			</view>
			<view style="height: 20upx;"></view>
			<view class="bottoma"></view>
			<view class="denglu-title-title">授权佰橙优家读取您的微信昵称和头像</view>
			<button :class="{ xixiaaaa: xixia == false }" class="shouquan button" open-type="getUserInfo" @getuserinfo="getUser" plain="true" :loading="load">一键授权</button>
			<button :class="{ xixiaaaa: xixia == true }" class='button' plain="true" disabled="disabled">已授权</button>
			<view style="height: 30upx;"></view>
			<view class="bottoma"></view>
			<view class="denglu-title-title">授权佰橙优家读取您微信绑定的手机号</view>
			<button :class="{ xixiaaaa: xixib == false }" class="shouquan button" plain="true" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">一键授权微信认证手机号</button>
			<button :class="{ xixiaaaa: xixib == true }" class='button' plain="true" disabled="disabled">已授权</button>
		</view>
  </view>
</template>

<script>
	import bus from '../ligature';
import * as leanCloud from 'leancloud-storage/dist/av-weapp.js';
import md5 from 'md5';
var WXBizDataCrypt = require('../WXBizDataCrypt');
export default {
	data() {
		return {
			header: '',
			name:'',
			phone:'',
			xixia: true,
			xixib: true,
			userinfo:false,
			load:false
		}
	},
  methods:{
  	/* getPhoneNumber(e) {
			console.log(e.detail.errMsg)
			console.log(e.detail.iv)
			console.log(e.detail.encryptedData)
		}, */
		call(){
			uni.makePhoneCall({
				phoneNumber:'4006118860'
			})
		},
		work(){
			uni.navigateToMiniProgram({
			      appId: 'wxd16393f5438c5881',
			      path: 'pages/index/index', 
			      /* extarData: {
			        open: 'auth'
			      }, */
			      success(res) {
			        console.log("success") 
			      }
			})
		},
		house(){
			/* uni.navigateTo({
				url: '../no-house/no-house'
			}); */
			let _this = this;
			var queryaaa = new leanCloud.Query('MyHouse');
			queryaaa.equalTo('user',leanCloud.User.current())
			queryaaa.find().then(
				function(res) {
					uni.setStorageSync('activeIndex',2);
					if (res.length>0) {
						uni.navigateTo({
							url: '../myhouse/myhouse'
						});
					} else{
						uni.navigateTo({
							url: '../no-house/no-house'
						});
					}
				},
				function(error) {}
			);
		},
		help(){
			uni.navigateTo({
				url: '../suggestion/suggestion'
			});
		},
		myOrder(){
			console.log("我的订单")
			let _this = this;
			var query = new leanCloud.Query('Order');
			query.equalTo('user',leanCloud.User.current())
			query.find().then(function(res) {
				console.log(res)
				for (let i = 0; i < res.length; i++) {
					if (res[i].attributes.status == '待付款') {
						console.log('待付款')
						console.log((new Date()-res[i].createdAt)/60000)
						if((new Date()-res[i].createdAt)/60000>30) {
							var todo = leanCloud.Object.createWithoutData('Order', res[i].id);
							  todo.destroy().then(function (success) {
								
							  }, function (error) {
								
							  });
						}
					}
				}
				uni.navigateTo({
					url: '../order-from/order-from'
				});
			}), function(error) {
				console.log(error)
			};
		},
		setting(){
			uni.navigateTo({
				url: '../setting/setting'
			});
		},
		getUser({ detail }) {
			let _this = this;
			_this.load = true;
			if (detail.errMsg === 'getUserInfo:ok') {
				_this.load = false;
				uni.showLoading({
					mask: true,
					title: '加载中'
				});
				uni.setStorageSync('nickName', detail.userInfo.nickName);
				uni.setStorageSync('avatarUrl', detail.userInfo.avatarUrl);
				var queryb = new leanCloud.Query('_User');
				queryb.equalTo('nickName', detail.userInfo.nickName).equalTo('city', detail.userInfo.city)
				queryb.find().then(
					function(res) {
						uni.hideLoading()
						console.log(res.length)
						if(res.length == 1){
							leanCloud.User.logIn(res[0].attributes.username, 'lamll888').then(
							
								function(loginedUser) {
									_this.xixia = false;
									console.log('loginedUser');
									console.log(loginedUser.attributes);
									uni.setStorageSync('shoujihao', loginedUser.attributes.mobilePhoneNumber);
								},
								function(error) {
									alert(JSON.stringify(error));
								}
							);
						}else{
							var user = new leanCloud.User();
							user.loginWithWeapp({ preferUnionId: true })
								.then(user => {
									uni.removeStorageSync('purePhoneNumber')
									uni.setStorageSync('purePhoneNumber', user);
								})
								.catch(console.error);
							uni.setStorageSync(
								'nameuseruser',
								md5(new Date())
									.toString()
									.substring(0, 25)
							);
							uni.setStorageSync('setUsername', uni.getStorageSync('nameuseruser'));
							uni.setStorageSync('city', detail.userInfo.city);
							uni.setStorageSync('language', detail.userInfo.language);
							uni.setStorageSync('gender', detail.userInfo.gender);
							uni.setStorageSync('province', detail.userInfo.province);
							uni.setStorageSync('country', detail.userInfo.country);
							user.setUsername(uni.getStorageSync('nameuseruser'));
							user.setPassword('lamll888');
							user.set('city', detail.userInfo.city);
							user.set('nickName', detail.userInfo.nickName);
							user.set('language', detail.userInfo.language);
							user.set('gender', detail.userInfo.gender);
							user.set('province', detail.userInfo.province);
							user.set('avatarUrl', detail.userInfo.avatarUrl);
							user.set('country', detail.userInfo.country);
							//user.setEmail('2237339292@qq.com');
							_this.xixia = false;
						}
					},
					function(error) {
						uni.hideLoading()
					}
				);
				
			} else {
				_this.load = false;
				uni.showToast({
					title: '登陆失败！请重新授权',
					icon: 'none',
					duration: 1000
				});
			}
		},
		getPhoneNumber(e) {
			console.log(e)
			const _this = this;
			_this.xixib = false;
			uni.setStorageSync('activeIndex',2)
			setTimeout(function(){
				_this.login = false;
			},1000)
			if(uni.getStorageSync('purePhoneNumber') == ''){
				uni.setStorageSync('purePhoneNumber',)
				return
			}else{
				var appId = 'wxe6c9e42e3b5227d0';
				var sessionKey = uni.getStorageSync('purePhoneNumber').authData.lc_weapp.session_key;
				console.log(sessionKey)
				var encryptedData = e.detail.encryptedData;
				var iv = e.detail.iv;
				var pc = new WXBizDataCrypt(appId, sessionKey);
				var data = pc.decryptData(encryptedData, iv);
				uni.setStorageSync('shoujihao', data.phoneNumber);
				console.log(data.phoneNumber)
				var todo = leanCloud.Object.createWithoutData('_User', leanCloud.User.current().id);
				todo.set('mobilePhoneNumber', data.phoneNumber);
				todo.save().then(function(todo) {
					uni.showToast({
						title: '授权成功',
						icon: 'none',
						duration: 1000
					});
				});
			}
		}
  },
  created(){
	  let _this = this
	  console.log('myinfo')
		uni.getSetting({
			success(res) {
				if (!res.authSetting['scope.userInfo'] || uni.getStorageSync('avatarUrl') == '') {
					_this.userinfo = true;
				} else {
					_this.userinfo = false;
					_this.header = uni.getStorageSync('avatarUrl')
					_this.name = uni.getStorageSync('nickName')
					_this.phone = uni.getStorageSync('shoujihao')
				}
			}
		});
		
  },
  updated() {
	  var _this = this;
  	if (_this.xixia==false&&_this.xixib==false) {
  		_this.userinfo = false
		_this.header = uni.getStorageSync('avatarUrl')
		_this.name = uni.getStorageSync('nickName')
		_this.phone = uni.getStorageSync('shoujihao')
  	}
  },
  mounted() {
      var _this = this;
     /* bus.$on("getPhoneNumber", function(msg) {
        _this.header = msg[0]
        _this.name = msg[1]
        _this.phone = msg[2]
      }); */
	 /* var queryx = new leanCloud.Query('_User');
	  queryx.equalTo('user', leanCloud.User.current());
	  queryx.find().then(
	  	function(res) {
			console.log(res)
	  	},
	  	function(error) {
	  		console.log(error);
	  	}
	  ); */
	  
    }
}
</script>

<style scoped="scoped">
	.disnomeme{
		display: none;
	}
	.myinfo{
		text-align: left;
		background: #F9F9FB;
	}
	button{
		border: none;
		text-align: left;
	}
	image{
		width: 46upx;
		height: 46upx;
		position: relative;
		left: -15upx;
		top: 5upx;
	}
	.weui-cell{
		padding: 10upx !important;
	}
	.weui-cell__bd{
		font-size: 34upx;
	}
	.weui-cell__ft_in-access{
		font-size: 28upx;
	}
	.bottom{
		height: 5upx;
		background: #EDEDED;
	}
	.myinfo-header{
		padding: 32upx 50upx;
		background: -webkit-linear-gradient(#ff9900, #f1b04d); /* Safari 5.1 - 6.0 */
		display: flex;
		justify-content: flex-start;
	}
	.image-header{
		width: 100upx;
		height: 110upx;
		border-radius: 50%;
	}
	.image-headerview{
		width: 100upx;
		height: 110upx;
		position: relative;
		top: 10upx;
	}
	.image-headerviewname{
		padding-left: 10upx;
		position: relative;
		top: 20upx;
	}
	.text-header{
		font-size: 28upx;
		color: #FFFFFF;
	}
	.text-phone{
		font-size: 28upx;
		color: #FFFFFF;
		
	}
	.buton{
		display: inline-block;
		position: relative;
		left: -160upx;
		top: 30upx;
	}
	.weui-cells:after{
		border-bottom: none;
	}
	.uni-mask{
		width: 100vw;
		height: 100vh;
		background: rgba(0,0,0,0.7);
		position: absolute;
		top:0;
		z-index: 1000;
	}
	.xixiaaaa {
		display: none;
	}
	.uni-mask {
		width: 100vw;
		height: 5060upx;
		background: rgba(0, 0, 0, 0.9);
		position: absolute;
		top: 0;
		z-index: 1000;
	}
	.denglu {
		width: 650upx;
		margin: 0 auto;
		background: #ffffff;
		border-radius: 16upx;
		height: 700upx;
		z-index: 1001;
		position: fixed;
		top: 300upx;
		left: 50upx;
		box-sizing: border-box;
		padding: 60upx;
	}
	.button {
		border: none;
		width: 530upx;
		height: 88upx;
		color: #333333;
		font-size: 32upx;
		border: 10upx;
		background: #cccccc;
		line-height: 88upx;
		margin-top: 40upx;
		text-align: center;
	}
	.denglu-title {
		display: flex;
		justify-content: flex-start;
	}
	image {
		width: 52upx;
		height: 66upx;
	}
	.denglu-title text {
		font-size: 32upx;
		color: #666666;
		position: relative;
		top: -20upx;
		left: 20upx;
	}
	.bottoma {
		height: 2upx;
		background: #cccccc;
	}
	.denglu-title-title {
		font-size: 30upx;
		color: #666666;
		text-align: center;
		margin-top: 30upx;
	}
	.shouquan {
		color: #ffffff;
		background: #ff9900;
	}
</style>
