import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import '@babel/polyfill'
import axios from 'axios';


Vue.config.productionTip = false

router.beforeEach((to, from, next) => {

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.state.isUserLoggedIn) {
      next({ name: 'login' })
    } else {
      next()
    }

  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.state.isUserLoggedIn) {
      next({ name: 'panel' })
    } else {
      next()
    }

  } else {
    next()
  }


  if (to.matched.some(record => record.meta.requiresanyactivity)) {
    if (!store.state.isUserLoggedIn) {
      next({ name: 'loginparent' })
    } else {
      next()
    }
  } else {
    next()
  }

})


new Vue({
  router,
  store,
  vuetify,
  axios,
  render: h => h(App)
}).$mount('#app')
