import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/jqueryGantt'
    },
    {
      path: '/dhtmlxGantt',
      component (resolve) {
        require(['../pages/dhtmlxGantt.vue'], resolve)
      }
    },
    {
      path: '/jqueryGantt',
      component (resolve) {
        require(['../pages/jqueryGantt.vue'], resolve)
      }
    },
    {
      path: '/d3Gantt',
      component (resolve) {
        require(['../pages/d3Gantt.vue'], resolve)
      }
    },
    {
      path: '/myGantt',
      component (resolve) {
        require(['../pages/myGantt.vue'], resolve)
      }
    },
  ]
})