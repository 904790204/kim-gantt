import utils from './utils'
import * as d3 from "d3"

class Event {
  constructor() {
    this.startX = 0
    this.startY = 0
  }
  containerMouseDown(d) {
    this.startX = d3.event.offsetX
  }
  containerDrag(d) {
    let left = d3.event.x - this.startX
    d3.selectAll(this.childNodes).attr('transform', function(d,i){
      return 'translate('+(-600 + left)+' '+ i * 40 +')'
    })
  }
}

export default Event