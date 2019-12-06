<template>
  <div id="hotTable">
    <!-- <hot-table :data="data" rowHeaders="true" colHeaders="true"></hot-table> -->
  </div>
</template>

<script>
import Handsontable from 'handsontable';
import 'handsontable/dist/handsontable.full.css'
export default {
  data: function() {
    return {
      data: [
        ["", "Ford", "Volvo", "Toyota", "Honda"],
        ["2016", 10, 11, 12, 13],
        ["2017", 20, 11, 14, 13],
        ["2018", 30, 15, 12, 13]
      ],
    };
  },
  mounted() {
    console.log(Handsontable)
    new Handsontable(document.getElementById('hotTable'), {
      data: this.data,
      mergeCells: [
        {row: 0, col: 3, rowspan: 3, colspan: 3},
        {row: 2, col: 6, rowspan: 2, colspan: 2},
        {row: 4, col: 8, rowspan: 3, colspan: 3}
      ],
    })
  },
  // components: {
  //   HotTable
  // }
}
</script>

<style>

</style>