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
    let head = '', content = ''
    if(this.showType === 'day') {
      head = this.setHeaderIsDay()
      content = this.setContentIsDay()
    }
    if(this.showType === 'week') {
      head = this.setHeaderIsWeek()
      // content = this.setContentIsDay()
    }
    let boxg = this.$el.append('g').attr('transform',`translate(${-this.boxWidth}, 0)`).attr('class','kim-gantt-background-container')
    boxg.append('g').attr('transform',`translate(0, 0)`).attr('class','kim-gantt-background-header').html(head)
    boxg.append('g').attr('transform',`translate(0, ${this.topHeight * 2})`).attr('class','kim-gantt-content-subaxis').html(content)
  }
  redrawTemplate(t) {
    let head = '', content = ''
    let container = this.$el.select('.kim-gantt-background-container')
    let left = utils.getTranslateX(container.attr('transform'))
    let boxOffsetX = 0
    if(this.showType === 'day') {
      let offsetX = (left + this.boxWidth) / this.itemWidth
      let num = 0
      if(offsetX > 0){
        num = Math.floor(offsetX)
      }else{
        num = Math.ceil(offsetX)
      }
      boxOffsetX = (left + this.boxWidth) % this.itemWidth
      this.startDay = this.startDay.add(-num, 'day')
      head = this.setHeaderIsDay()
      content = this.setContentIsDay()
    }
    container.attr('transform',`translate(${-this.boxWidth + boxOffsetX}, 0)`)
    this.$el.select('.kim-gantt-background-header').attr('transform',`translate(0, 0)`).html(head)
    this.$el.select('.kim-gantt-content-subaxis').attr('transform',`translate(0, ${this.topHeight * 2})`).html(content)
  }
  setHeaderIsDay() {
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
  setContentIsDay() {
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
  setHeaderIsWeek() {
    let arr = []
    let start = this.startDay.add(1-this.startDay.day(), 'day')
    for(let i = 0; i < this.duration; i++) {
      let current = start.add(i, 'week') //daysInMonth
      let left = this.itemWidth  * i
      let text = Math.ceil(current.diff(utils.dayjs(current.year()+'-1-1'), 'day') / 7) + '周'
      let dx = text >= 10 ? 14 : 18
      if(current.date() <= 7){
        let m = current.format('YYYY-MM')
        let w = this.itemWidth / 7 * current.daysInMonth()
        let l = left + ((1 - ((current.date()-1) / 7)) * this.itemWidth)
        arr.push(`
          <g transform="translate(${l}, 0)" class="o" >
            <rect width="${w}" height="${this.topHeight}"></rect>
            <text dx="${w / 2 - 22}" dy="14">${m}</text>
          </g>
        `)
      }
      arr.push(`
        <g transform="translate(${left}, ${this.topHeight})">
          <rect width="${this.itemWidth}" height="${this.topHeight}"></rect>
          <text dx="${dx}" dy="14">${text}</text>
        </g>
      `)
    }
    return arr.join('')
  }
}

export default Backdrop