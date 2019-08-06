import Vue from 'Vue'
import cell from './cell.vue'
import '@/style/index.css'
/* eslint-disable no-new */
new Vue({
  el: '#app', // 这里参考cell.html和cell.vue的根节点id，保持三者一致
  render: h => h(cell)
})
