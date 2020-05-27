// Dependencies
import Vue from 'vue'
import App from './App.vue'
import router from './plugins/router'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = true

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app')
