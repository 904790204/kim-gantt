import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/myGantt'
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
    {
      path: '/sheet',
      component (resolve) {
        require(['../pages/sheet'], resolve)
      }
    },
    {
      path: '/task-gantt',
      component (resolve) {
        require(['../view/task-gantt/'], resolve)
      }
    },
    {
      path: '/task-list',
      component (resolve) {
        require(['../view/task-list/'], resolve)
      }
    },
    {
      path: '/hotTable',
      component (resolve) {
        require(['../view/task-list/hotTable'], resolve)
      }
    },
    {
      path: '/excel',
      component (resolve) {
        require(['../view/task-list/excel'], resolve)
      }
    },
    {
      path: '/task-sheet',
      component (resolve) {
        require(['../view/task-sheet'], resolve)
      }
    }
  ]
})