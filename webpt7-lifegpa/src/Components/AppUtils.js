export const getScore = (arr) => {
  let points = 0
  let count = 0
  arr.map(item => {
    item.history.split('').map(day => {
      count++
      if (day === 'x') {
        points++
      }
    })
  })
  return Math.floor((points / count) * 100)
}