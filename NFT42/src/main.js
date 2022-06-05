import Vue from 'vue'
import App from './App.vue'
import "./assets/rem.js"


import { post } from './assets/axios.js'
Vue.prototype.$post = post


import { ajax } from './assets/ajax.js'
Vue.prototype.$ajax = ajax

Vue.config.productionTip = false

new Vue({
    render: h => h(App)
}).$mount('#app')
