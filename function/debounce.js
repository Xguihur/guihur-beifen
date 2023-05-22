// 防抖函数
let num = 1
const content = document.getElementById('content')
// 功能函数
const count = () => {
  console.log('执行了一次timeout')
  this.innerHTML = num++
  // 因为作用域的原因所以指向window？
  console.log(this)
}

// 绑定事件
content.onclick = debounce(count, 1000)

// 定义防抖函数
function debounce(func, wait) {
  let timeout
  return function () {
    // 如果有定时器就清除定时器
    if (timeout) {
      console.log('清除定时器')
      clearTimeout(timeout)
    }

    timeout = setTimeout(() => {
      console.log('执行了一次timeout')
      this.innerHTML = num++
      // 因为作用域的原因所以指向window？
      console.log(this)
    }, wait)
  }
}
