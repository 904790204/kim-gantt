import utils from './utils'
class Progress {
  constructor(el,data,params) {
    this.$el = el
    this.list = []
    utils.proxyData(this,params)
    this.$data = this.toTree(data)
    // this.$data = data
    this.setTemplate()
  }
  setTemplate() {
    // let {arr, html} = this.toTree(this.$data)
    let svgHeadBox = document.createElementNS('http://www.w3.org/2000/svg','svg');
    svgHeadBox.setAttribute('id','kim-gantt-progress')
    svgHeadBox.setAttribute('class','kim-gantt-progress')
    svgHeadBox.style.height = this.boxHeight + 'px'
    svgHeadBox.innerHTML = `
                            <g transform="translate(${-this.boxWidth}, ${this.topHeight * 2})" class="kim-gantt-progress-container">
                              ${this.list.join()}
                            </g>
                            `
    this.$el.appendChild(svgHeadBox)
  }
  toTree(data,pid){
    let arr = []
    data.forEach((el,i) => {
      if(typeof pid === 'undefined' && !+el.pid || typeof pid !== 'undefined' && pid === el.pid){
        let left = utils.dayjs(el.start_date).diff(this.startDay,'day') + 1
        let long = utils.dayjs(el.end_date).diff(utils.dayjs(el.start_date),'day') + 1
        let content = `
                      <g transform="translate(${this.itemWidth * left}, ${this.list.length * this.itemHeight + 10})" class="item">
                      <rect width="${this.itemWidth * long}" height="${this.itemHeight - 18}"></rect>
                      <path d="M 0 0 L 6 0 L 0 10 Z">
                      </g>
                      `
        this.list.push(content)
        el.children = this.toTree(data, el.id)
        arr.push(el)
      }
    })
    return arr
  }
}
export default Progress