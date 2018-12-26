<template>
    <!-- 分类二级页 -->
    <div>
        <header class="classify_second_header">
            <div class="back" @click="back()"><img src="../../assets/images/icon/back.png" alt=""></div>
            <p class="header_cen">淘厨汇农业电商平台</p>
            <router-link class="header_right_a" to=""><img class="" src="../../assets/images/icon/search.png" alt=""></router-link>
        </header>

         <div class="classify_second_level_screen_function classify_screen_function">
            <!-- 筛选 切换-->
            <div class="screen_box">
                <!-- 筛选 -->
                <div class="screen" @click="screen_down">
                    <p class="screen_p">默认排序</p>
                    <img class="screen_img" src="../../assets/images/icon/screen.png" alt="">
                </div>
                <!-- 分割线 -->
                <span class="screen_xian"></span>
                <!-- 切换样式 -->
                <div class="pattern_box" @click="switchClass">
                    <!-- 列表模式 -->
                    <div class="list_box pattern" v-if="switch_class">
                        <p class="pattern_p">列表</p>
                        <img class="pattern_img column_img" src="../../assets/images/icon/list_img.png" alt="">
                    </div>
                    <!-- 大图模式 -->
                    <div class="big_box pattern" v-if="!switch_class">
                        <p class="pattern_p">大图</p>
                        <img class="pattern_img big_img" src="../../assets/images/icon/big_img.png" alt="">
                    </div>
                </div>

                <!-- 筛选  下拉 -->
                <div class="screen_down" :class="{none_visibility:none}">
                    <p class="screen_down_p" @click="screen_sort('','默认排序')">默认排序</p>
                    <p class="screen_down_p" @click="screen_sort('SaleAsc','销量优先')">销量优先</p>
                    <p class="screen_down_p" @click="screen_sort('SaleDesc','销量降序')">销量降序</p>
                    <p class="screen_down_p" @click="screen_sort('PriceAsc','价格升序')">价格升序</p>
                    <p class="screen_down_p" @click="screen_sort('PriceDesc','价格降序')">价格降序</p>
                </div>
            </div>
        </div>

        <div class="con nobottom classify_second_top_com">
             <div class="con_con">
                <!-- 内容 -->
                <div class="shop_con" :class="[switch_class?'shop_con_big':'shop_con_list']">
                    
                    <!-- 分类进入 -->
                    <div class="shop_box" :class="[switch_class?'shop_box_big':'shop_box_list']" v-if="type==1" v-for="data in data_details" :key="data.index">
                        <router-link class="shop_a" :class="[switch_class?'shop_a_big':'shop_a_list']" :to="{path:'/detail/product_detailed',query:{product_id:data.Product_ID}}">
                            <div class="shop_img" :class="[switch_class?'shop_img_big':'shop_img_list']">
                                <img :src="big_img+data.Image_Url" alt="">
                            </div>
                            <div :class="[switch_class?'bot_box_big':'bot_box_list']">
                                <p class="shop_name" :class="[switch_class?'shop_name_big':'shop_name_list']">{{data.Product_Name}}</p>
                                <div class="shop_p" v-if="!switch_class">
                                    <p>{{data.Product_Explain}}</p>
                                </div>
                                <div class="shop_money">
                                    <p class="new_money">￥{{(data.Product_Sku[0].Sku_PriceCash*0.9).toFixed(2)}}</p>
                                    <p class="old_money">￥{{data.Product_Sku[0].Sku_PriceCash}}</p>
                                </div>
                            </div>                        
                        </router-link>
                    </div>


                    <!-- 推荐进入 -->
                    <div class="shop_box" :class="[switch_class?'shop_box_big':'shop_box_list']" v-if="type==0" v-for="data in data" :key="data.index">

                        <router-link class="shop_a" :class="[switch_class?'shop_a_big':'shop_a_list']" :to="{path:'/detail/product_detailed',query:{product_id:data.Product_ID}}">       
                            <div class="shop_img" :class="[switch_class?'shop_img_big':'shop_img_list']">
                                <img :src="big_img+data.Product_ImgUrl" alt="">
                            </div>
                            <div :class="[switch_class?'bot_box_big':'bot_box_list']">
                                <p class="shop_name" :class="[switch_class?'shop_name_big':'shop_name_list']">{{data.Product_Name}}</p>
                                <div class="shop_p" v-if="!switch_class">
                                    <p>{{data.Product_Introduction}}</p>
                                </div>
                                <div class="shop_money">
                                    <p class="new_money">￥{{(data.Product_PriceCash*0.9).toFixed(2)}}</p>
                                    <p class="old_money">￥{{data.Product_PriceCash}}</p>
                                </div>
                            </div>                        
                        </router-link>
                    </div>


                    <!-- 暂无数据 -->
                    <div class="baseline" v-if="type == 1 && data == ''" :class="[switch_class?'':'white_baseline']">
                        <p>暂无数据</p>
                    </div>
                    
                </div>

                <!-- 相关基地 -->
                <div class="relevant_base">
                    <!-- 基地标题 -->
                    <div class="relevant_base_title">
                        <p>相关基地</p>
                        <span></span>
                    </div>
                    <!-- 基地内容 -->
                    <div class="relevant_base_con">
                        <div class="list">
                            <a class="list_a" href="" v-cloak>
                                <img class="list_img" src="../../assets/images/img/broadcast_img.jpg" alt="" v-cloak>
                                <p class="list_name" v-cloak>江津散养土猪基地</p>
                                <p class="list_p" v-cloak>散养的猪肉更香</p>
                                <!-- 标签 -->
                                <div class="list_label">直播中</div>
                            </a>
                        </div>
            
                        <div class="list">
                            <a class="list_a" href="" v-cloak>
                                <img class="list_img" src="../../assets/images/img/broadcast_img.jpg" alt="" v-cloak>
                                <p class="list_name" v-cloak>江津散养土猪基地</p>
                                <p class="list_p" v-cloak>散养的猪肉更香</p>
                                <!-- 标签 -->
                                <div class="list_label">直播中</div>
                            </a>
                        </div>
            
                        <div class="list">
                            <a class="list_a" href="" v-cloak>
                                <img class="list_img" src="../../assets/images/img/broadcast_img.jpg" alt="" v-cloak>
                                <p class="list_name" v-cloak>江津散养土猪基地</p>
                                <p class="list_p" v-cloak>散养的猪肉更香</p>
                                <!-- 标签 -->
                                <div class="list_label">直播中</div>
                            </a>
                        </div>
            
                        <div class="list">
                            <a class="list_a" href="" v-cloak>
                                <img class="list_img" src="../../assets/images/img/broadcast_img.jpg" alt="" v-cloak>
                                <p class="list_name" v-cloak>江津散养土猪基地</p>
                                <p class="list_p" v-cloak>散养的猪肉更香</p>
                                <!-- 标签 -->
                                <div class="list_label">直播中</div>
                            </a>
                        </div>
                    </div>
                
                </div>        

                <!-- 底线 -->
                <div class="baseline">
                    <span></span>
                    <p>我是有底线的</p>
                    <span></span>
                </div>
            </div>
        </div>

    </div>
</template>


<style>
    @import '../../assets/css/classify_second_level.css';
</style>


<script>
import axios from 'axios';

export default {
    data(){
        return{
            data_details:'',
            data:'',
            switch_class:1,//切换类(改变模式)
            none:1,//筛选显示

            productType_id:'',//产品分类id
            type:'',//类型，1为产品分类过来的，0为商品推荐更多推荐过来了

            identifyingID:'',//身份标识  id 或者 ip

             //图片接口
            big_img:localStorage.big_img,//大
            middle_img:localStorage.middle_img,//中
            small_img:localStorage.small_img, //小
        }
    },
  components: {

  },
  created:function(){
        this.type = this.$route.query.type
        // type  1调用商品列表接口  0调用商品推荐接口
        if(this.type==1){
            this.get_product_classification(1,'')
        }else{
            this.get_product_recommend(1)
        }
  },
  methods:{
    //   分类进入获取数据
    get_product_classification(n,sort){
        var _this = this
        this.productType_id = this.$route.query.ProductType_ID
        // console.log(this.productType_id)

        var collection = new URLSearchParams();
        collection.append('TypeInfo', 0);
        collection.append('PageIndex', n);
        collection.append('ProductType', this.productType_id);
        collection.append('MinPrice', 0);
        collection.append('MaxPrice', 0);
        collection.append('MinPoint', 0);
        collection.append('MaxPoint', 0);
        collection.append('LikeVar', '');
        collection.append('OrderType', sort);

        axios.post(localStorage.weburl+'/WorkStore/GetProductList', collection).then(function (res) {
            _this.data = res.data.Return_Data.PageData
            // console.log(data)

            // 获取 id 或者 ip
            if(localStorage.user_id == ''|| localStorage.user_id == undefined||localStorage.user_id == 0){
                axios.get(localStorage.weburl+'/WorkMembers/GetIpConfig').then(res => {
                    _this.identifyingID = res.data.Return_Data
                    // console.log(data)
                    _this.get_product_detailed()
                }).catch(error => { console.log(error) });   //查询失败返回的值
            }else{
                // console.log(data)
                _this.identifyingID = localStorage.user_id
                _this.get_product_detailed()
            }
        }).catch(function (err) {
        　　console.log(err)
        });
    },
    // 获取详细数据
    get_product_detailed(){
        var data_details = [];
        for(var i = 0;i<this.data.length;i++){
            var _this = this
             axios.get(localStorage.weburl+'/WorkStore/GetProductDetail?ProductID='+this.data[i].Product_ID).then(res => {
                data_details.push(res.data.Return_Data)
                //console.log(res.data.Return_Data);
            }).catch(error => { console.log(error) });   //查询失败返回的值            
        }
        this.data_details = data_details   
        console.log(this.data_details)    
    },

    // 商品详情  推荐更多进入
    get_product_recommend(n){
         var _this = this
        axios.get(localStorage.weburl+'/WorkStore/GetCommandList?page='+n+'&type=2').then(res => {
            _this.data = res.data.PageData
            console.log(res.data.PageData)
        }).catch(error => { console.log(error) });   //查询失败返回的值
    },

    // 筛选排序
    screen_sort(sort,sort_p){
            this.get_product_classification(1,sort)
            this.none = 1;
            $(".screen_p").text(sort_p)
    }, 




    // 返回上一页
    back(){
        this.$router.go(-1)
    },
    // 点击导航，切换样式
    click_nav:function(e){
        this.none = 1;
        this.this_index = e;
    },
    // 筛选
    screen_down:function(){
        this.none = !this.none
    },
    // 切换大图和列表模式
    switchClass:function(){
        this.none = 1
        this.switch_class = !this.switch_class
    },
    // 监听滚动
    roll_down:function(){
        this.none = 1;
    }
  }
}

</script>
