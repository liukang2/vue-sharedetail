import Vue from 'vue'
import vueRouter from 'vue-router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
Vue.use(MintUI)
Vue.use(vueRouter)
import product  from './components/goodsdetail.vue'
const router = new vueRouter({
	 mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
   routes: [
     { path: '/product/:id',component: product },
  ]
})
/* eslint-disable no-new */
new Vue({
	router,
  el: '#app',
  template: '<App/>',
  components: { App },
  render: h => h(App)
})
