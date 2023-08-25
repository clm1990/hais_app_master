import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import './assets/icon/font_style_a/iconfont.css'
import App from './App.vue'
import router from './router'
import * as echarts from 'echarts'
import store from './store'

Vue.use(ElementUI)

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
