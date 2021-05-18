import Vue from 'vue'
import { Icon,Button, } from 'vant'
import 'lib-flexible'
import App from './App.vue'
import router from './router'
import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts
// 注册全局组件
Vue.component(Icon.name, Icon)
Vue.component(Button.name, Button)

new Vue({
  render: h => h(App),
  router, // 所有组件都能看到 $router和$route  <router-link> 和 <router-view/>
}).$mount('#app')