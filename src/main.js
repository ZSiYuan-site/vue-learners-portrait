import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
import router from './router/index'

// store对象
import store from './store/index'

// vee-validate
import './veeValidate'

// mock
import './mock/mockServer'

// ElemenUi
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// echarts
import * as echarts from 'echarts';
//需要挂载到Vue原型上
Vue.prototype.$echarts = echarts


// jQuery
// import $ from 'jquery'
// Vue.use($)

// antd
import { Button } from 'ant-design-vue';
Vue.component(Button.name, Button);

//工具集
import utils from './common/js/utils'
Vue.use(utils)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')