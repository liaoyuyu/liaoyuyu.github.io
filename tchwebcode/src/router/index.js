import Vue from 'vue'
import Router from 'vue-router'
// 底部导航
import index from '../views/index/index'  //首页
import classify from '../views/classify/index'  //分类页
import base from '../views/base/index'  //基地页
import shopcar from '../views/shopcar/index'  //购物车
import my from '../views/my/index'  //个人中心
// 分类二级页
// import classify_second_level from '../views/classify_second_level/classify_second_level'   //分类二级页

// 首页导航（那4个页面）
// import year_reserve from '../views/index_nav/year_reserve'  //年货预定
// import fresh_good from '../views/index_nav/fresh_good' //新鲜好货
// import popularity_recommendation from '../views/index_nav/popularity_recommendation'  //人气推荐
// import preferential_recommendation from '../views/index_nav/preferential_recommendation' //特惠推荐

// // 详情页
// import product_detailed from '../views/detail/product_detailed'   //商品详情

// // 基地
// import base_detail from '../views/base/base_detail'   //基地详情
// import base_producttype from '../views/base/base_producttype' //基地产品分类页
// import base_moreproduct from '../views/base/base_moreproduct'  //基地某类产品页


// // 支付
// import purchase_order from '../views/shopcar/shopcar_html/purchase_order'   //支付订单
// import purchase_order_list from '../views/shopcar/shopcar_html/purchase_order_list'   //支付订单   商品列表


// // 个人中心页面
// import set_up from '../views/my/my_html/set_up' //设置
// import address from '../views/my/my_html/address' //地址管理
// import add_address from '../views/my/my_html/add_address' //添加地址
// import feedback from '../views/my/my_html/feedback' //意见反馈
// import binding_phone from '../views/my/my_html/binding_phone' //绑定手机号
// import modify_password from '../views/my/my_html/modify_password' //修改密码
// import service from '../views/my/my_html/service' //客服中心
// import message_center from '../views/my/my_html/message_center'   //消息中心
// import message_activity from '../views/my/my_html/message_activity' //活动消息
// import message_service from '../views/my/my_html/message_service'   //服务消息
// import message_system from '../views/my/my_html/message_system'   //系统消息
// import account_security from '../views/my/my_html/account_security'  //账户与安全
// import collection from '../views/my/my_html/collection' //我的收藏
// import coupon from '../views/my/my_html/coupon'   //优惠券
// import footprint from '../views/my/my_html/footprint' //我的足迹
// import task_center from '../views/my/my_html/task_center'  //任务中心
// import Invitation from '../views/my/my_html/Invitation'  //邀请有礼
// import reward_details from '../views/my/my_html/reward_details' //邀请明细
// import order from '../views/my/my_html/order'   //订单
// import order_details_collect from '../views/my/my_html/order_details_collect'   //订单——收货详情
// import order_details_evaluate from '../views/my/my_html/order_details_evaluate'   //订单——评价
// import order_details_cancel from '../views/my/my_html/order_details_cancel'   //订单——订单已取消
// import about_us from '../views/my/my_html/about_us'   //关于我们


// // 搜索
// import address_search from '../views/search/address_search'   //地址搜索
// import search from '../views/search/search'   //搜索


// // 公告详情
// import notice_details from '../views/detail/notice_details'   //公告详情


// // 登录注册
// import login from '../views/login_register/login'   //登录
// import register from '../views/login_register/register'   //注册


// // 同一组件跳转
// import Jump_refresh from '../views/detail/Jump_refresh'


Vue.use(Router)

export default new Router({
routes: [
    // 底部导航
    { //首页
        path: '/',
        name: 'index',
        component: index
    },
    { //分类页
        path: '/classify',
        name: 'classify',
        component: classify
    },
    { //基地页
        path: '/base',
        name: 'base',
        component: base
    },
    { //购物车页
      path: '/shopcar',
      name: 'shopcar',
      component: shopcar
    },
    { //个人中心页
      path: '/my',
      name: 'my',
      component: my
    },
    // 分类二级页
    {
        path: '/classify_second_level',
        name: 'classify_second_level',
        // component: classify_second_level
        component:resolve => require(['@/views/classify_second_level/classify_second_level'],resolve)
    },

    // 首页导航
    { //年货预定
      path: '/index_nav/year_reserve',
      name: 'year_reserve',
      // component: year_reserve
      component:resolve => require(['@/views/index_nav/year_reserve'],resolve)
    },
    { //新鲜好货
        path: '/index_nav/fresh_good',
        name: 'fresh_good',
        // component: fresh_good
        component:resolve => require(['@/views/index_nav/fresh_good'],resolve)
    },
    { //人气推荐
        path: '/index_nav/popularity_recommendation',
        name: 'popularity_recommendation',
        // component: popularity_recommendation
        component:resolve => require(['@/views/index_nav/popularity_recommendation'],resolve)
    },
    { //特惠推荐
        path: '/index_nav/preferential_recommendation',
        name: 'preferential_recommendation',
        // component: preferential_recommendation
        component:resolve => require(['@/views/index_nav/preferential_recommendation'],resolve)
    },


    { //基地详情页
        path: '/base_detail',
        name: 'base_detail',
        // component: base_detail
        component:resolve => require(['@/views/base/base_detail'],resolve)
    },
    { //基地产品分类页
        path: '/base_producttype',
        name: 'base_producttype',
        // component: base_producttype
        component:resolve => require(['@/views/base/base_producttype'],resolve)
    },
    { //基地某类产品页
        path: '/base_moreproduct',
        name: 'base_moreproduct',
        // component: base_moreproduct
        component:resolve => require(['@/views/base/base_moreproduct'],resolve)
    },
  
    
  

    // 商品详情
    {
      path: '/detail/product_detailed',
      name: 'product_detailed',
      // component:product_detailed
      component:resolve => require(['@/views/detail/product_detailed'],resolve)
    },


    // 支付
    {//支付订单
      path: '/shopcar/shopcar_html/purchase_order',
      name: 'purchase_order',
      // component:purchase_order
      component:resolve => require(['@/views/shopcar/shopcar_html/purchase_order'],resolve)
    },
    {//支付订单  商品列表
      path: '/shopcar/shopcar_html/purchase_order_list',
      name: 'purchase_order_list',
      // component:purchase_order_list
      component:resolve => require(['@/views/shopcar/shopcar_html/purchase_order_list'],resolve)
    },


    // 个人中心
    { //设置
      path: '/my/my_html/set_up',
      name: "set_up",
      // component:set_up
      component:resolve => require(['@/views/my/my_html/set_up'],resolve)
    },
    {//地址管理
      path: '/my/my_html/address',
      name: 'address',
      // component:address
      component:resolve => require(['@/views/my/my_html/address'],resolve)
    },
    {//添加地址
      path: '/my/my_html/add_address',
      name: 'add_address',
      // component:add_address
      component:resolve => require(['@/views/my/my_html/add_address'],resolve)
    },
    {//意见反馈
      path: '/my/my_html/feedback',
      name: 'feedback',
      // component:feedback
      component:resolve => require(['@/views/my/my_html/feedback'],resolve)
    },
    {//绑定手机号
      path: '/my/my_html/binding_phone',
      name: 'binding_phone',
      // component:binding_phone
      component:resolve => require(['@/views/my/my_html/binding_phone'],resolve)
    },
    {//修改密码
      path: '/my/my_html/modify_password',
      name: 'modify_password',
      // component:modify_password
      component:resolve => require(['@/views/my/my_html/modify_password'],resolve)
    },
    {//服务中心
      path: '/my/my_html/service',
      name: 'service',
      // component:service
      component:resolve => require(['@/views/my/my_html/service'],resolve)
    },
    {//消息中心
      path: '/my/my_html/message_center',
      name: 'message_center',
      // component:message_center
      component:resolve => require(['@/views/my/my_html/message_center'],resolve)
    },
    {//活动消息
      path: '/my/my_html/message_activity',
      name: 'message_activity',
      // component:message_activity
      component:resolve => require(['@/views/my/my_html/message_activity'],resolve)
    },
    {//服务消息
      path: '/my/my_html/message_service',
      name: 'message_service',
      // component:message_service
      component:resolve => require(['@/views/my/my_html/message_service'],resolve)
    },
    {//系统消息
      path: '/my/my_html/message_system',
      name: 'message_system',
      // component:message_system
      component:resolve => require(['@/views/my/my_html/message_system'],resolve)
    },
    {//账户与安全
      path: '/my/my_html/account_security',
      name: 'account_security',
      // component:account_security
      component:resolve => require(['@/views/my/my_html/account_security'],resolve)
    },
    {//我的收藏
      path: '/my/my_html/collection',
      name: 'collection',
      // component:collection
      component:resolve => require(['@/views/my/my_html/collection'],resolve)
    },
    {//优惠券
      path: '/my/my_html/coupon',
      name: 'coupon',
      // component:coupon
      component:resolve => require(['@/views/my/my_html/coupon'],resolve)
    },
    {//我的足迹
      path: '/my/my_html/footprint',
      name: 'footprint',
      // component:footprint
      component:resolve => require(['@/views/my/my_html/footprint'],resolve)
    },
    {//任务中心
      path: '/my/my_html/task_center',
      name: 'task_center',
      // component:task_center
      component:resolve => require(['@/views/my/my_html/task_center'],resolve)
    },
    {//邀请有礼
      path: '/my/my_html/Invitation',
      name: 'Invitation',
      // component:Invitation
      component:resolve => require(['@/views/my/my_html/Invitation'],resolve)
    },
    {//邀请明细
      path: '/my/my_html/reward_details',
      name: 'reward_details',
      // component:reward_details
      component:resolve => require(['@/views/my/my_html/reward_details'],resolve)
    },
    {//关于我们
      path: '/my/my_html/about_us',
      name: 'about_us',
      // component:about_us
      component:resolve => require(['@/views/my/my_html/about_us'],resolve)
    },



    {//订单
      path: '/my/my_html/order',
      name: 'order',
      // component:order
      component:resolve => require(['@/views/my/my_html/order'],resolve)
    },
    {//订单——收货详情
      path: '/my/my_html/order_details_collect',
      name: 'order_details_collect',
      // component:order_details_collect
      component:resolve => require(['@/views/my/my_html/order_details_collect'],resolve)
    },
    {//订单——评价
      path: '/my/my_html/order_details_evaluate',
      name: 'order_details_evaluate',
      // component:order_details_evaluate
      component:resolve => require(['@/views/my/my_html/order_details_evaluate'],resolve)
    },
    {//订单——订单已取消
      path: '/my/my_html/order_details_cancel',
      name: 'order_details_cancel',
      // component:order_details_cancel
      component:resolve => require(['@/views/my/my_html/order_details_cancel'],resolve)
    },



  //搜索
  { //地址搜索
    path: '/search/address_search',
    name: 'address_search',
    // component:address_search
    component:resolve => require(['@/views/search/address_search'],resolve)
  },
  { //搜索
    path: '/search/search',
    name: 'search',
    // component:search
    component:resolve => require(['@/views/search/search'],resolve)
  },


  // 公告详情
  { //
    path: '/detail/notice_details',
    name: 'notice_details',
    // component:notice_details
    component:resolve => require(['@/views/detail/notice_details'],resolve)
  },



  // 登录注册
  { 
    path: '/login_register/login',
    name: 'login',
    // component:login
    component:resolve => require(['@/views/login_register/login'],resolve)
  },
  { 
    path: '/login_register/register',
    name: 'register',
    // component:register
    component:resolve => require(['@/views/login_register/register'],resolve)
  },


  // 同一组件跳转
  {//Jump_refresh
    path: '/detail/Jump_refresh',
    name: 'Jump_refresh',
    // component:Jump_refresh
    component:resolve => require(['@/views/detail/Jump_refresh'],resolve)
  },


  ]
})


