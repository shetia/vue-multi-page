
import Vue from 'vue'
import Router from 'vue-router'
import Other from '../components/index.vue'
import Two from '../components/two.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Other',
      component: Other
    },
    {
      path: '/two',
      name: 'Two',
      component: Two
    }

  ]
})
