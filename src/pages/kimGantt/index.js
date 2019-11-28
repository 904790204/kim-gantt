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
    this.backdrop = null
    this.progress = null
    this.init()
  }
  init() {
    let _this = this
    this.setParams()
    let drag = d3.drag()
                .on('start', function(){
                  return _this.$event.containerDragStart(this,_this.backdrop)
                })
                .on("drag", function(){
                  return _this.$event.containerDrag(this,_this.backdrop)
                })
                .on("end", function(){
                  return _this.$event.containerDragEnd(this,_this.backdrop)
                })
    let container = d3.select(this.$el).append('svg')
      .attr('id','kim-gantt')
      .attr('class','kim-gantt')
      .call(drag)
    this.setBackdrop(container)
    this.setProgress(container)
  }
  dragged(_this){
    
    // _this.containerDrag(this)
  }
  setParams() {
    this.$params.showType = 'day'
    this.$params.itemWidth = this.$params.showType === 'day' ? 30 : this.$params.showType === 'week' ? 60 : 90
    this.$params.itemHeight = 30
    this.$params.topHeight = 20
    // this.$params.firstDay = utils.dayjs()
    // this.$params.lastDay = utils.dayjs()
    // this.$params.startDay = utils.dayjs()
    // this.$params.endDay = utils.dayjs()
    this.$params.middle = utils.dayjs()
    this.$params.long = this.$data.length
    this.$params.boxWidth = this.$el.clientWidth
    this.$params.boxHeight = this.$el.clientHeight || this.$params.itemHeight * (this.$params.long + 2)
    this.$params.duration = this.$params.boxWidth / this.$params.itemWidth * 3
    // this.$params.firstDay = utils.getMaxAndMinDate(this.$data,1).start
    // this.$params.lastDay = utils.getMaxAndMinDate(this.$data,1).end
    this.$params.startDay = this.$params.middle.add(-this.$params.duration / 2, this.$params.showType)
    this.$params.endDay = this.$params.middle.add(this.$params.duration / 2, this.$params.showType)
  }
  setBackdrop(el) {
    this.backdrop = new Backdrop(el,this.$data,this.$params,this.callback)
  }
  setProgress(el) {
    this.progress = new Progress(el,this.$data,this.$params,this.callback)
  }
}

export default kimGantt