import dayjs from 'dayjs'
export default {
  // 获取所有项目最早开始时间，最晚结束时间
  getMaxAndMinDate(arr,offset) {
    let start = dayjs()
    let end = dayjs()
    arr.forEach(el => {
      let s = el.start_date
      let e = el.end_date
      if(typeof s == 'string' && start > dayjs(s)){
        start = dayjs(s)
      }
      if(typeof e == 'string' && end < dayjs(e)){
        end = dayjs(e)
      }
    })
    offset = offset || 0
    start = start.add(-offset, 'day')
    end = end.add(offset, 'day')
    return {start, end}
  },
  // 判断是否是周末
  isWeek(day) {
    return day.day() === 0 || day.day() === 6
  },
  dayjs
}