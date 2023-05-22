// 节流函数
const box = document.getElementById('throttle')

// 绑定事件
box.onclick = throttle(() => {
  console.log('节流函数执行')
}, 1000)

// 定义节流函数
function throttle(func, wait) {
  let timeout

  return function () {
    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null
        func()
      }, wait)
    }
  }
}
