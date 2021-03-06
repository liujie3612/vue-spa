// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App'
import Vue from 'vue'
import VueRouter from 'vue-router'

import Foo from './components/Foo'
import Bar from './components/Bar'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Foo },
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

const router = new VueRouter({
  routes
})


/* eslint-disable no-new */
const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


// another Express
/*new Vue({
    el: '#app',
    router,
    render: h => h(App)
});*/
