<template>
  <div id="x-spreadsheet-demo"></div>
</template>

<script>
import Spreadsheet from "x-data-spreadsheet"
import zhCN from 'x-data-spreadsheet/dist/locale/zh-cn'
import config from './config'
export default {
  data() {
    return {
      Sheet: null,
      sheetList: {
        "name": "sheet1",
        "freeze": "A1",
        "styles": [],
        "merges": [],
        "rows": {
          "0": {
            "cells": {
              "0": {
                "text": "111"
              }
            }
          },
          "len": 100
        },
        "cols": {
          "len": 26
        },
        "validations": [],
        "autofilter": {}
      },
    }
  },
  mounted() {
    this.spreadSheetInit()
    console.log(this.Sheet)
  },
  methods: {
    // 初始化sheet
    spreadSheetInit(){
      Spreadsheet.locale('zh-cn', zhCN)
      this.Sheet = new Spreadsheet("#x-spreadsheet-demo")
        .loadData(this.sheetList)
        .change(this.sheetChange)
    },
    // 数据改变
    sheetChange(data){
      console.log(data)
    },
    // 获取数据
    getData(){
      return this.Sheet.getData()
    }
  },
}
</script>