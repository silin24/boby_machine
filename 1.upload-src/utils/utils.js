export const entries = (obj, cb) => {
  Object.entries(obj).forEach(([key, val]) => {
    cb(key, val)
  })
}

export const noop = () => {}

export const toMatrix = (list, elementPerSubArray) => {
  const matrix = []
  let k = -1
  list.forEach((item, i) => {
    if(i % elementPerSubArray === 0) {
      k++
      matrix[k] =[]
    }
    matrix[k].push(item)
  })
  return matrix
}