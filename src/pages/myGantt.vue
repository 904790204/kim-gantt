<template>
<div class="gantt">
  <button>日</button>
  <button>周</button>
  <button>月</button>
  <div class="my-gantt" id="my-gantt">

  </div>
</div>
</template>

<script>
import kimGantt from '../components/kimGantt'
import * as d3 from "d3"
export default {
  data() {
    return {
      myGantt: null,
      options: {
        data: [
          {id: 1, text: "鹿鸣*灵动", start_date: '2019-11-11', end_date: '2019-11-26', duration: null, pid:0, progress: 0, status: true, person:[{position:'pm',name:'kim'}]},
          {id: 2, text: "v2.1.2 视频组件需求", start_date: '2019-11-11', end_date: '2019-11-23', duration: null, pid:1, progress: 1, status: true, person:[{position:'fe',name:'kim'},{position:'rd',name:'tom'}]},
          {id: 3, text: "v2.1.2 视频组件需求", start_date: '2019-11-14', end_date: '2019-11-26', duration: null, pid:1, progress: 1, status: true, person:[]}
        ],
        callback: {
          onTaskSelected: this.onTaskSelected
        }
      }
    }
  },
  mounted() {
    this.myGantt = new kimGantt('#my-gantt',this.options)
  },
  methods: {
    onTaskSelected(el) {
      console.log(el)
    }
  }
}
</script>

<style>
.my-gantt{
  width: 600px;
  height: 400px;
  margin: 0 auto;
  position: relative;
}
</style>