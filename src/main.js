// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import '@/assets/css/main.scss'
import store from './store';
import { getInfo } from './api';
import { SET_INFO } from 'types';


Vue.config.productionTip = false

Vue.use(elementUI);
/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

const initInfo = (data) => {
  if (data.data.code === 200) {
    app.$store.commit(SET_INFO, data.data.data);
  }
}

getInfo().then(initInfo, initInfo);
