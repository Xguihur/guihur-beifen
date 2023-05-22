const obj = {
  name: 'guihur'
}

const arr = [1, 2, 3]
const func = () => {
  console.log(1)
}

const type1 = Object.prototype.toString.call(obj)
const type2 = Object.prototype.toString.call(arr)
const type3 = Object.prototype.toString.call(func)
const type4 = arr.toString()

console.log(type1)
console.log(type2)
console.log(type3)
console.log(type4)
console.log(Object.prototype.toString === Function.prototype)
console.log(Function.prototype.toString)
