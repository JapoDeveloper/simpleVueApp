// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

import Home from './components/home'
import Users from './components/users'

Vue.use(VueResource)
Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  mode:'history',
  base:__dirname,
  routes:[
    {path:'/',component:Home},
    {path:'/users',component:Users}
  ]
});

/* eslint-disable no-new */
new Vue({
  router,
  template: `
    <div id="app">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <ul class="nav navbar-nav">
          <li><a class="navbar-brand" href="/">JapoDeveloper Apps</a></li>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/users">Users</router-link></li>
        </ul>
      </div>
      </nav>
      <div class="container"
        <router-view></router-view>
      </div>
    </div>
  `
}).$mount("#app");
