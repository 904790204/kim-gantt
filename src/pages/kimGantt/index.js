import Backdrop from './backdrop'
import Progress from './progress'
import Event from './event'
import utils from './utils'
import * as d3 from "d3"
import './index.css'
class kimGantt {
  constructor(el,options){
    this.$el = document.querySelector(el)
    this.$data = options.data
    this.callback = options.callback
    this.$params = {}
    this.$event = new Event()
    this.init()
  }
  init() {
    let container = d3.select(this.$el).append('svg')
      .attr('id','kim-gantt')
      .attr('class','kim-gantt')
      .on('mousedown', this.$event.containerMouseDown)
      .call(d3.drag().on("drag", this.$event.containerDrag))

    this.setParams()
    this.setBackdrop(container)
    this.setProgress(container)
  }
  dragged(_this){
    
    // _this.containerDrag(this)
  }
  setParams() {
    this.$params.itemWidth = 30
    this.$params.itemHeight = 30
    this.$params.topHeight = 20
    this.$params.backType = 'day'
    this.$params.firstDay = utils.dayjs()
    this.$params.lastDay = utils.dayjs()
    this.$params.startDay = utils.dayjs()
    this.$params.endDay = utils.dayjs()
    this.$params.middle = utils.dayjs()
    this.$params.long = this.$data.length
    this.$params.boxWidth = this.$el.clientWidth
    this.$params.boxHeight = this.$el.clientHeight || this.$params.itemHeight * (this.$params.long + 2)
    this.$params.duration = this.$params.boxWidth / this.$params.itemWidth * 3
    this.$params.firstDay = utils.getMaxAndMinDate(this.$data,1).start
    this.$params.lastDay = utils.getMaxAndMinDate(this.$data,1).end
    this.$params.startDay = this.$params.middle.add(-this.$params.duration / 2, 'day')
    this.$params.endDay = this.$params.middle.add(this.$params.duration / 2, 'day')
  }
  setBackdrop(el) {
    new Backdrop(el,this.$data,this.$params,this.callback)
  }
  setProgress(el) {
    new Progress(el,this.$data,this.$params,this.callback)
  }
}

export default kimGantt