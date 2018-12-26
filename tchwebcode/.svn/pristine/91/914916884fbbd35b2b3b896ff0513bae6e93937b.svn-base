<template>
	<div class="tabberWarp" >
		<div class="warp">
			<Item :txt='item.txt' :page='item.page' @change='getval' v-for='item in tabbardes' :sel='selected' :key="item.index">
				<img :src="item.normalImg" slot='normalImg'>
				<img :src="item.activeImg" slot='activeImg'>
			</Item>
		</div>
	</div>
</template>
<script type="text/javascript">
	import Item from './Item.vue'

	import $ from 'jquery'

	import bus from '../assets/js/bus.js'    //非组件传值

	export default{
		components:{
			Item
		},
		data:function(){
			return{
				selected:'',
				tabbardes:[
					{
						txt:'首页',
						page:'',
						normalImg:require('../assets/images/icon/index_unselected.png'),
						activeImg:require('../assets/images/icon/index_select.png')
					},				
					{
						txt:'分类',
						page:'classify',
						normalImg:require('../assets/images/icon/classify_unselected.png'),
						activeImg:require('../assets/images/icon/classify_select.png')
					},
					{
						txt:'基地',
						page:'base',
						normalImg:require('../assets/images/icon/base_unselect.png'),
						activeImg:require('../assets/images/icon/base_select.png')
					},
					{
						txt:'购物车',
						page:'shopcar',
						normalImg:require('../assets/images/icon/shop_car_unselected.png'),
						activeImg:require('../assets/images/icon/shop_car_select.png')
					},
					{
						txt:'我的',
						page:'my',
						normalImg:require('../assets/images/icon/my_unselected.png'),
						activeImg:require('../assets/images/icon/my_select.png')
					}
				]
			}
		},
		mounted(){
			this.bottom_selection()	
		},
		methods:{
			getval:function(res){
                this.selected = res;
			},
			bottom_selection:function(){
				bus.$on('change_selection', function (index){
					setTimeout(function(){
						$(".itemWarp").eq(index).click();
					},1)
				})
				
			}
		}
	}
</script>
<style type="text/css">
	.warp{
        width: 100%;
        height: 100%;
		display: flex;
		align-items: center;
		justify-content: space-around;
		font-size: 0;
	}
	.warp img{
		width: 0.4rem;
        height: 0.4rem;
        margin-bottom: 0.07rem;
	}
	.tabberWarp{
        position: fixed;
        z-index: 999;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1rem;
        overflow: hidden;
        border-top: 1px solid #eee;
        box-sizing: border-box;
        background: #fff;
	}
</style>
