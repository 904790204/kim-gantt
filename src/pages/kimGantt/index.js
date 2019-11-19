import Backdrop from './backdrop'
import Progress from './progress'
import utils from './utils'
import './index.css'
class kimGantt {
  constructor(el,options){
    this.$el = document.querySelector(el)
    this.$data = options.data
    this.$params = {}
    this.init()
  }
  init() {
    this.setParams()
    this.setBackdrop()
    this.setProgress()
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
  setBackdrop() {
    new Backdrop(this.$el,this.$data,this.$params)
  }
  setProgress() {
    new Progress(this.$el,this.$data,this.$params)
  }
}

export default kimGantt