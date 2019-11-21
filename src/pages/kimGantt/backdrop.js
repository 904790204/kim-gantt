import utils from './utils'
import * as d3 from "d3"
class Backdrop {
  constructor(el,data,params) {
    this.$el = el
    this.$data = data
    utils.proxyData(this,params)
    this.setTemplate()
  }
  setTemplate() {
    let head = this.setHeader()
    let content = this.setContent()
    // let container = document.createElementNS('http://www.w3.org/2000/svg','svg');
    // container.setAttribute('id','kim-gantt-background')
    // container.setAttribute('class','kim-gantt-background')
    // container.style.height = this.boxHeight + 'px'
    let boxg = this.$el.append('g').attr('transform',`translate(${-this.boxWidth}, 0)`).attr('class','kim-gantt-background-container')
    boxg.append('g').attr('transform',`translate(0, 0)`).attr('class','kim-gantt-background-header').html(head)
    boxg.append('g').attr('transform',`translate(0, ${this.topHeight * 2})`).attr('class','kim-gantt-content-subaxis').html(content)
    // container.innerHTML = `
    //                         <g transform="translate(${-this.boxWidth}, 0)" class="kim-gantt-background-container">
    //                           <g transform="translate(0, 0)" class="kim-gantt-background-header">${head}</g>
    //                           <g transform="translate(0, ${this.topHeight * 2})" class="kim-gantt-content-subaxis">${content}</g>
    //                         </g>
    //                         `
    // this.$el.appendChild(container)
  }
  setHeader() {
    let arr = []
    for(let i = 0; i < this.duration; i++) {
      let today = this.startDay.add(i, 'day') //daysInMonth
      let left = this.itemWidth * i
      let text = today.date()
      let dx = text >= 10 ? 8 : 12
      let weekClass = utils.isWeek(this.startDay.add(i,'day')) ? 'w' : ''
      if(text === 1 || i === 0) {
        let m = today.format('YYYY-MM') 
        let w = this.itemWidth * today.daysInMonth()
        let l = (1 - text) * this.itemWidth + left
        arr.push(`
          <g transform="translate(${l}, 0)" class="o" >
            <rect width="${w}" height="${this.topHeight}"></rect>
            <text dx="${w / 2 - 22}" dy="14">${m}</text>
          </g>
        `)
      }
      arr.push(`
        <g transform="translate(${left}, ${this.topHeight})" class="${weekClass}" >
          <rect width="${this.itemWidth}" height="${this.topHeight}"></rect>
          <text dx="${dx}" dy="14">${text}</text>
        </g>
      `)
    }
    return arr.join('')
  }
  setContent() {
    let arr = []
    for(let i = 0; i < this.duration; i++) {
      let left = this.itemWidth * i
      if(utils.isWeek(this.startDay.add(i,'day'))){
        arr.push(`<rect fill="#f4f9ff" transform="translate(${left}, 0)" width="${this.itemWidth}" height="${this.boxHeight}"></rect>`)
      }
      if(this.startDay.add(i,'day').isSame(utils.dayjs(), 'day')){
        arr.push(`<line x1="${left}" y1="0" x2="${left}" y2="${this.boxHeight}" stroke="red" stroke-width="1"></line>`)
      }
    }
    for(let i = 0; i < this.$data.length; i++) {
      arr.push(`<line x1="0" y1="${this.itemHeight * (i + 1)}" x2="${this.duration * this.itemWidth}" y2="${this.itemHeight * (i + 1)}" stroke="#D2D1D1" stroke-width="1"></line>`)
    }
    return arr.join('')
  }
}

export default Backdrop