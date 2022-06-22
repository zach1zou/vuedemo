import Vue from 'vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from '/router/index'
import axios from 'axios'
// import VueAxios from 'vue-axios'

// Vue.use(VueAxios, axios)


Vue.use(ElementUI)
//配置请求根路径
axios.defaults.baseURL='http://big-event-api-t.itheima.net'
Vue.prototype.$http=axios


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
