import Vue from 'vue'
// eslint-disable-next-line
import App from './App.vue'
import router from './router/index'
// import Ui from '@/ui'
import '@/assets/icon/css/font-awesome.min.css'

// Vue.use(Ui)
new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
