import Vue from 'vue'
import App from './App.vue'
import vueSmoothScroll from 'vue2-smooth-scroll'

Vue.config.productionTip = false
Vue.use(vueSmoothScroll)

import router from './router'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
