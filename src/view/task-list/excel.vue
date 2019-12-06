<template>
  <div class="task-excel">
  
  </div>
</template>

<script>
import Excel from 'exceljs'
export default {
  mounted() {
    const workbook = new Excel.Workbook()
    workbook.creator = 'test'
    workbook.lastModifiedBy = 'test'
    workbook.created = new Date()
    workbook.modified = new Date()
    let sheet = workbook.addWorksheet('2018-10报表')


    sheet.columns = [
      {header: '创建日期', key: 'create_time', width: 15},
      {header: '单号', key: 'id', width: 15},
      {header: '电话号码', key: 'phone', width: 15},
      {header: '地址', key: 'address', width: 15}
    ]
    const data = [{
      create_time: '2018-10-01',
      id: '787818992109210',
      phone: '11111111111',
      address: '深圳市'
    }]

    sheet.addRows(data)
  },
}
</script>
