// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import vuex from 'vuex'

Vue.prototype.axios = axios;
import store from './store/store.js'
//全局过滤器
import filter from '../static/filter.js'
Vue.config.productionTip = false

//接口集合
import InterFace from '../static/interface.js'
Vue.prototype.InterFace = InterFace;

//自定义全局函数
import fn from '../static/public.js'
Vue.prototype.fn = fn();

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
