export default {
  // 转树形
  toTree(data,pid){
    let arr = []
    data.forEach(el => {
      if(typeof pid === 'undefined' && !+el.pid || typeof pid !== 'undefined' && pid === el.pid){
        el.children = utils.toTree(data, el.id)
        arr.push(el)
      }
    })
    return arr
  }
}