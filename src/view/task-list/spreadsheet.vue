<template>
  <div id="x-spreadsheet-demo"></div>
</template>

<script>
import Spreadsheet from "x-data-spreadsheet";
import zhCN from 'x-data-spreadsheet/dist/locale/zh-cn';
export default {
  data() {
    return {
      spread: null
    }
  },
  mounted() {
    Spreadsheet.locale('zh-cn', zhCN);
    this.spread = new Spreadsheet("#x-spreadsheet-demo",
    {
      showToolbar: true,
      showGrid: true,
      showContextmenu: true,
      view: {
        height: () => document.documentElement.clientHeight,
        width: () => document.documentElement.clientWidth,
      },
      row: {
        len: 100,
        height: 25,
      },
      col: {
        len: 26,
        width: 100,
        indexWidth: 60,
        minWidth: 60,
      },
      style: {
        bgcolor: '#ffffff',
        align: 'left',
        valign: 'middle',
        textwrap: false,
        strike: false,
        underline: false,
        color: '#0a0a0a',
        font: {
          name: 'Helvetica',
          size: 10,
          bold: false,
          italic: false,
        },
      },
    })
    .loadData({
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
    }) // load data
    .change(data => {
      // console.log(JSON.stringify(data))
      // save data to db
    });
    setTimeout(()=>{
      let data = this.spread.getData()
      console.log(data)
    },10000)
  },
}
</script>

<style>

</style>