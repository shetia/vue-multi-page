import Vue from 'Vue'
import App from './other.vue'
import router from './router'
import '@/style/index.css'
/* eslint-disable no-new */
new Vue({
  el: '#other', // 这里参考other.html和other.vue的根节点id，保持三者一致
  router,
  render: h => h(App)
  // components: { App },
  // template: '<App/>'
})
