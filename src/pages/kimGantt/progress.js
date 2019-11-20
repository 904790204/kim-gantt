import utils from './utils'
import * as d3 from "d3"
class Progress {
  constructor(el,data,params,event) {
    this.$el = el
    this.$data = null
    this.$event = event
    this.list = []
    utils.proxyData(this,params)
    this.setTemplate(data)
  }
  setTemplate(data) {
    let container = document.createElementNS('http://www.w3.org/2000/svg','svg');
    container.setAttribute('id','kim-gantt-progress')
    container.setAttribute('class','kim-gantt-progress')
    container.style.height = this.boxHeight + 'px'
    let box = d3.select(container)
                .append('g')
                .attr('transform',`translate(${-this.boxWidth}, ${this.topHeight * 2})`)
                .attr('class','kim-gantt-progress-container')
    this.$data = this.toTree(data,box)
    this.$el.appendChild(container)
  }
  toTree(data,box,pid){
    let arr = []
    data.forEach((el,i) => {
      if(typeof pid === 'undefined' && !+el.pid || typeof pid !== 'undefined' && pid === el.pid){
        let left = utils.dayjs(el.start_date).diff(this.startDay,'day') + 1
        let long = utils.dayjs(el.end_date).diff(utils.dayjs(el.start_date),'day') + 1
        let index = box.selectAll('g').size()
        let g = box.append('g')
                .data([el])
                .attr('transform',`translate(${this.itemWidth * left}, ${index * this.itemHeight + 10})`)
                .attr('class','item')
                .on('click',this.onTaskSelected.bind(this))
                .on('drag',this.onTaskDrag)
        g.append('rect')
          .attr('width',this.itemWidth * long)
          .attr('height',this.itemHeight - 18)
        el.children = this.toTree(data, box, el.id)
        arr.push(el)
      }
    })
    return arr
  }
  onTaskSelected(el) {
    this.$event.onTaskSelected && this.$event.onTaskSelected(el)
  }
  onTaskDrag(el) {
    console.log(el)
  }
}
export default Progress