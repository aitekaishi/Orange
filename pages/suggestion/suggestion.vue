<template>
	<view class="assess-contain">
		<view class="assess-text assess-text1">意见与建议</view>
		<view class="assess-text assess-text2">{{number}}/500</view>
		<view class="uni-textarea">
			<textarea v-model='value' @blur="bindTextAreaBlur" placeholder='请填写具体内容帮助我们了解您的意见与建议' placeholder-style='color: #B2B2B2;font-size: 32upx;'
			 maxlength='500' @input='inputHandle' />
			</view>
		
		<view class="br"></view>
		 <img-upload></img-upload>
		 <view class="assess-text assess-text1">联系方式（手机、邮箱、QQ号）</view>
		 <input class="uni-input" v-model="contactVal" placeholder="便于我们与您联系" />
		<button  @click="submit" :class="disabled?'true':'false'">提交</button>
	</view>
</template>

<script>
	import * as leanCloud from 'leancloud-storage/dist/av-weapp.js'
	import imgUpload from "@/components/img-upload.vue"
	export default {
		data() {
			return {
				number:0,
				disabled:false,
				value:'',
				contactVal:'',
				imglist:[],
			};
		},
		components: {imgUpload},
		created(){
			uni.setStorageSync('imglist',[])
		},
		methods: {
			inputHandle(e){
				this.number = e.detail.value.length
			},
			submit(){
				let _this = this;
				if (_this.disabled == true) {
					console.log(this.value + this.contactVal + uni.getStorageSync('imglist'))
					uni.showLoading({
							title:'提交中'
						})
						var Todo = leanCloud.Object.extend('Suggestion');
						var todo = new Todo();
						todo.set('user', leanCloud.User.current());
						todo.set('suggestion', _this.value);
						todo.set('contact', _this.contactVal);
						todo.set('img', uni.getStorageSync('imglist'));
						todo.save().then(function (todo) {
						  uni.hideLoading()
						    uni.showToast({
						  	title: '提交成功',
						  	duration: 1000,
						   });
						    setTimeout(function(){
						  	  uni.navigateTo({
						  	  	url: '../index/index'
						  	  });
						    },1000)
						  }, function (error) {
						    uni.hideLoading()
						    uni.showToast({
						  	title: '提交失败',
						  	duration: 1000,
						  	icon:'none'
						    });
						  });
					}
				}
			},
		updated(){
			if (this.value != ""&&this.contactVal != '') {
				this.disabled = true
			}else{
				this.disabled = false
			}
			
		},
	}
</script>

<style lang="less" scoped>
.assess-contain{
	width: 100vw;
	min-height: 100vh;
	background: #F8F9FB;
	.assess-text{
		display: inline-block;
		margin-left: 30upx;
		font-size: 30upx;
		color: #9B9B9B;
	}
	.assess-text2{
		float: right;
		margin-right: 30upx;
		margin-top: 10upx;
	}
	.uni-textarea,input{
		width: 100vw;
		height: 306upx;
		background: #FFFFFF;
		padding: 24upx 0 0 30upx;
		margin: 15upx 0 33upx 0;
		font-size: 32upx;
	}
	input{
		box-sizing: border-box;
		height: 92upx;
		padding-top: 0;
		padding-right: 30upx;
	}
	.rate-class{
		margin-left: 200upx;
	}
}
.true{
	background: #FF9900;
}
.false{
	background: #C3C3C3;
}
button{
	border-radius: 0;
	font-size: 36upx;
	color: #FFFFFF;
	position: fixed;
	bottom: 0;
	width: 100vw;
}
button::after{ border: none; }
.br{
	height: 20upx;
}
textarea{
	width: 690upx;
}
</style>
