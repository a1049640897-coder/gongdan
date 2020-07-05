import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import https from "./api/https";
import apis from "./api/apis";
import "./assets/fonts/iconfont/iconfont.scss"
Vue.config.productionTip = false;
Vue.prototype.$http = https;
Vue.prototype.$api = apis;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
