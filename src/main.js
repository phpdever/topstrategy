// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import $ from 'jquery'
import echarts from 'echarts'

import './styles/reset.css'

// 引入font-awsome
import './styles/font-awesome-4.7.0/css/font-awesome.min.css'

import moment from 'moment'

//引入vant

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

//引入公共方法
import common from './commonFunction/common.js';
Vue.prototype.common = common;

Vue.use(ElementUI, $)
require('animate.css') // 引入css动画库
Vue.prototype.$http = axios
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false
Vue.prototype.$moment = moment

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});

export default{
  login:function(){
      //todo
  }
}
