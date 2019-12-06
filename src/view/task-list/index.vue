<template>
  <div class="task-list">
    <div class="task-grid" ref="task-grid">
    </div>
    <table>
      <tr>
        <td>123</td>
        <td>243</td>
      </tr>
    </table>
  </div>
</template>

<script>
import canvasDatagrid from 'canvas-datagrid'
import taskConf from './config'
export default {
  data() {
    return {
      grid: null,
      max:50,
      taskData:[
        {
          'task': '灵动',
          'subtask': '视频组件',
          'need': '需要添加视频组件',
          'level': 'p0',
          'profit': '需求收益',
          'timeInPond': '2010-10-10',
          'pm': '李',
          'status': '开发中',
          'fe': '金',
          'rd': '王',
          'qa': '刘',
          'longTime': '10',
          'startTime': '2019-10-20',
          'endTime': '2019-11-20',
          'testTime': '2019-11-21',
          'publishTime': '2019-11-30',
          'remarks': '无'
        }
      ],
      taskLabel:taskConf.taskLabel,
      // taskData:[]
    }
  },
  mounted() {
    this.gridInit()
  },
  methods: {
    gridInit(){
      this.grid = canvasDatagrid()
      this.$refs['task-grid'].appendChild(this.grid)
      this.grid.schema = this.taskLabel
      this.grid.data = this.taskList
    }
  },
  computed: {
    taskList: {
      get(){
        let last = this.taskData.length > this.max ? [] : new Array(this.max - this.taskData.length)
        let arr = [...this.taskData,...last]
        return arr
      }
    }
  },
}
</script>