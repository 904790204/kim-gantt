import utils from './utils'
class Backdrop {
  constructor(el,data) {
    this.$el = el
    this.$data = data
    this.backType = 'day'
    this.duration = 0
    this.firstDay = null
    this.lastDay = null
    this.startDay = null
    this.endDay = null
    this.boxWidth = null
    this.boxHeight = null
    this.middle = null
    this.itemWidth = 30
    this.itemHeight = 26
    this.init()
  }
  init() {
    this.firstDay = utils.dayjs()
    this.lastDay = utils.dayjs()
    this.startDay = utils.dayjs()
    this.endDay = utils.dayjs()
    this.middle = utils.dayjs()
    this.boxWidth = this.$el.clientWidth
    this.boxHeight = this.$el.clientHeight || this.itemHeight * (this.$data.length + 2) + 'px'
    this.setData()
    this.setTemplate()
  }
  setData() {
    this.duration = this.boxWidth / this.itemWidth * 3
    this.firstDay = utils.getMaxAndMinDate(this.$data,1).start
    this.lastDay = utils.getMaxAndMinDate(this.$data,1).end
    this.startDay = this.middle.add(-this.duration / 2, 'day')
    this.endDay = this.middle.add(this.duration / 2, 'day')
    
  }
  setTemplate() {
    let head = this.setHeader()
    let content = this.setContent()
    let svgHeadBox = document.createElementNS('http://www.w3.org/2000/svg','svg');
    svgHeadBox.setAttribute('id','kim-gantt-background')
    svgHeadBox.setAttribute('class','kim-gantt-background')
    svgHeadBox.style.height = this.boxHeight
    svgHeadBox.innerHTML = `
                            <g transform="translate(${-this.boxWidth}, 0)" class="kim-gantt-background-container">
                              <g transform="translate(0, 0)" class="kim-gantt-background-header">${head}</g>
                              <g transform="translate(0, ${this.itemHeight * 2})" class="kim-gantt-content-subaxis">${content}</g>
                            </g>
                            `
    this.$el.appendChild(svgHeadBox)
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
            <rect width="${w}" height="${this.itemHeight}"></rect>
            <text dx="${w / 2 - 22}" dy="18">${m}</text>
          </g>
        `)
      }
      arr.push(`
        <g transform="translate(${left}, ${this.itemHeight})" class="${weekClass}" >
          <rect width="${this.itemWidth}" height="${this.itemHeight}"></rect>
          <text dx="${dx}" dy="18">${text}</text>
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