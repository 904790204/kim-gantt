<template>
  <div class="d3">
      <p>d3</p>
  </div>
</template>

<script>
export default {
  mounted(){
    d3.selectAll("p")
    .data([42, 18, 15, 16, 23, 42])
    .style("font-size", function(d,b) { return b + "px"; });
  }
}
</script>

<style>

</style>