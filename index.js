// indexOf
const list = [1, 2, 3, 4, 5, 6, 7]
// Array.indexof(3)
//1. mid = i+(max-min)/2  2. 退出循环条件 min>max 3.
const fun = (i, list) => {
  let max = list.length - 1
  let min = 0
  let mid = Math.floor((max + min) / 2)
  let result = -1
  while (min <= max) {
    if (list[mid] > i) {
      max = mid - 1
      mid = Math.floor((max + min) / 2)
    } else if (list[mid] === i) {
      result = mid
      break
    } else {
      min = mid + 1
      mid = Math.floor((max + min) / 2)
    }
  }
  return result
}
console.log(fun(3, list))
