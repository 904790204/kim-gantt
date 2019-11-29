import utils from './utils'
import * as d3 from "d3"

class Event {
  constructor(el,data,params,event) {
    this.startX = 0
    this.startY = 0
    this.currentX = {head: 0, content: 0}
    this.$el = el
    this.$data = data
    this.callback = event
  }
  containerDragStart(t,d) {
    let current1 = d3.select(t.childNodes[0]).attr('transform').match(/[^\(\)]+(?=\))/g)
    let current2 = d3.select(t.childNodes[1]).attr('transform').match(/[^\(\)]+(?=\))/g)
    this.currentX.head = parseFloat(current1)
    this.currentX.content = parseFloat(current2)
    this.startX = d3.event.x
  }
  containerDrag(t,d) {
    let left1 = d3.event.x - this.startX + this.currentX.head
    let left2 = d3.event.x - this.startX + this.currentX.content
    d3.select(t.childNodes[0]).attr('transform', function(d,i){
      return 'translate('+ left1 +' 0)'
    })
    d3.select(t.childNodes[1]).datum(d).attr('transform', function(d,i){
      return 'translate('+ left2 +' '+ 2 * d.topHeight +')'
    })
  }
  containerDragEnd(t,d) {
    d.redrawTemplate(t)
  }
}

export default Event