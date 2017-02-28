// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import * as filters from './filters'
import Axios from 'axios'
import VueLazyload from 'vue-lazyload'

import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'assets/theme.less'

Vue.use(MuseUI);
Vue.use(VueLazyload)
Vue.prototype.$http = Axios;

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
