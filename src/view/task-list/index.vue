<template>
  <div class="task-list">
    <div class="task-grid" ref="task-grid">
      <!-- <canvas-datagrid :data.prop="taskList" :selectionmode='taskLabel'></canvas-datagrid> -->
    </div>
  </div>
</template>

<script>
import canvasDatagrid from 'canvas-datagrid'
export default {
  data() {
    return {
      grid: null,
      taskList:[
        ['灵动落地页','视频组件','唤起']
      ],
      taskLabel:[
        {
          name:'task',
          title:'所属项目',
          width: 140
        },
        {
          name:'subtask',
          title:'子任务',
          width: 200
        },
        {
          name:'need',
          title:'需求',
          width: 200
        },
        {
          name:'level',
          title:'优先级',
          width: 70
        },
        {
          name:'profit',
          title:'收益预估',
          width: 200
        },
        {
          name:'timeInPond',
          title:'进入需求池时间',
          width: 140
        },
        {
          name:'pm',
          title:'负责人',
          width: 80
        },
        {
          name:'status',
          title:'需求状态',
          width: 80
        },
        {
          name:'fe',
          title:'前端',
          width: 140
        },
        {
          name:'rd',
          title:'后端',
          width: 140
        },
        {
          name:'qa',
          title:'测试负责人',
          width: 140
        },
        {
          name:'longTime',
          title:'开发工期',
          width: 70
        },
        {
          name:'startTime',
          title:'开始时间',
          width: 120
        },
        {
          name:'endTime',
          title:'提测时间',
          width: 120
        },
        {
          name:'testTime',
          title:'测试时间',
          width: 120
        },
        {
          name:'publishTime',
          title:'预计上线时间',
          width: 120
        },
        {
          name:'remarks',
          title:'备注',
          width: 120
        }
      ]
    }
  },
  mounted() {
    this.grid = canvasDatagrid()
    this.$refs['task-grid'].appendChild(this.grid)
    this.grid.schema = this.taskLabel
    console.log(this.taskLabel)
    this.grid.data = [
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
    ];
  },
}
</script>