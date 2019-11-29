<template>
  <div class="task-gantt">
    <div class="my-gantt" id="my-gantt"></div>
  </div>
</template>

<script>
import kimGantt from '../../components/kimGantt'
export default {
  props:['tasklist'],
  data() {
    return {
      myGantt: null
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init(){
      this.myGantt = new kimGantt('#my-gantt',{
        data:this.tasklist,
        callback:{
          onTaskSelected: this.onTaskSelected
        }
      })
    },
    onTaskSelected(d){
      console.log(d)
    }
  },
}
</script>

<style lang="less" scoped>
.task-gantt{
  flex: 1;
  height: 100%;
  .my-gantt{
    height: 100%;
  }
}
</style>