import Backdrop from './backdrop'
import './index.css'
class kimGantt {
  constructor(el,options){
    this.$el = document.querySelector(el)
    this.$data = options.data
    this.init()
  }
  init() {
    this.setBackdrop()
  }
  setBackdrop() {
    new Backdrop(this.$el,this.$data)
  }
}

export default kimGantt