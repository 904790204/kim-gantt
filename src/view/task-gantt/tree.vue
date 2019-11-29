<template>
  <div class="task-tree">
    <tree-item :data="list"></tree-item>
  </div>
</template>

<script>
import utils from '../../assets/utils'
import treeItem from './tree-item'
export default {
  props:['tasklist'],
  components:{
    treeItem
  },
  computed: {
    list(){
      return utils.toTree(this.tasklist)
    }
  },
}
</script>

<style scoped>
.task-tree{
  width: 40%;
}
</style>