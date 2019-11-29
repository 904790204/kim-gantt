<template>
  <section class="container">
    <tree :tasklist="tasklist"></tree>
    <gantt :tasklist="tasklist"></gantt>
  </section>
</template>

<script>
import tree from './tree'
import gantt from './gantt'
export default {
  components:{
    tree,
    gantt
  },
  data() {
    return {
      tasklist:[ 
          {id: 1, text: "鹿鸣*灵动", start_date: '2019-11-11', end_date: '2019-11-26', duration: null, pid:0, progress: 0, status: true, person:[{position:'pm',name:'kim'}]},
          {id: 2, text: "v2.1.2 视频组件需求", start_date: '2019-11-11', end_date: '2019-11-23', duration: null, pid:1, progress: 1, status: true, person:[{position:'fe',name:'kim'},{position:'rd',name:'tom'}]},
          {id: 3, text: "v2.1.2 视频组件需求", start_date: '2019-11-14', end_date: '2019-11-26', duration: null, pid:1, progress: 1, status: true, person:[]}
        ]
    }
  },
}
</script>

<style scoped>
.container{
  display: flex;
  height:400px;
}
</style>