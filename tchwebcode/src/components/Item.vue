<template>
<div>
	<div class="itemWarp flex_mid" @click='changepage'>
		<span v-show='!bol'>
			<slot name='normalImg'></slot>
		</span>
		<span v-show='bol'>
			<slot name='activeImg'></slot>
		</span>
		<span v-text='txt'></span>
	</div>
	 <!-- 弹出框 -->
	<vuepopup ref="popup" v-on:yes_no="yes_no"></vuepopup>
</div>
</template>
<script type="text/javascript">
import vuepopup from '@/components/popup.vue'	//引入弹出框组件
	export default{
		components: {
			vuepopup
		},
        name: 'Item',
		props:{
			txt:{
				type:String
			},
			page:{
				type:String
			},
			sel:{
				type:String
			}
		},
		computed:{
			bol: function(){
				if(this.sel == this.page){
					return true;
				}
				return false;
			}
		},
		data(){
			return{
				
			}
		},
		methods:{
			changepage:function(){
				if(this.page == 'shopcar'|| this.page == 'my'){
					// console.log(this.$route.path)

					if(localStorage.provesignin == ''||localStorage.provesignin == undefined||localStorage.provesignin == 0){
						let popup = this.$refs.popup
						popup.open({
							type:1,
							popup_information:'还没登录，请登录!',
							whether_show:true,
						})
						return;						
					}
				}
                //点击跳转对应的页面
				this.$router.push('/'+this.page);
				this.$emit('change',this.page)
			},
			// 弹出框组件方法  点击了确定还是取消
			yes_no:function(judge){
				console.log(judge)
				if(judge == 'yes'){
					localStorage.returned_url = this.$route.fullPath //一会返回的路由地址(fullPath完整地址，参数也会带上)
					this.$router.replace('/login_register/login')
					return;
				}else if(judge == 'no'){
					return false;
				}

			}
		}
	}
</script>
<style type="text/css">
	.itemWarp{
        height: 100%;
		flex-grow: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	.itemWarp span{
        /* font-size: 12px; */
         color: #333333;
        font-size: 0.24rem;
    }
    /* .select{
        color: #86a73d !important
    } */
 
</style>
