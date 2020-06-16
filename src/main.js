import Vue from 'vue'
import App from './App.vue'
import vueSmoothScroll from 'vue2-smooth-scroll'
import VueCarousel from 'vue-carousel'
import VueGtag from "vue-gtag";

Vue.config.productionTip = false
Vue.use(vueSmoothScroll)
Vue.use(VueCarousel)

import router from './router'

Vue.use(VueGtag, {
  config: { id: "UA-169628464-1" }
}, router);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
