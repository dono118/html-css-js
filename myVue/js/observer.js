function defineReactive(target, key, val) {
  observe(val) // 递归遍历所有子属性
  Object.defineProperty(target, key, {
    enumerable: true,
    configurable: true,
    get() {
      return val
    },
    set(newVal) {
      if (newVal === val) return
      renderView()
      val = newVal
    }
  })
}

function observe(target) {
  if (!target || typeof target !== 'object') {
    return target
  }
  Object.keys(target).forEach(key => defineReactive(target, key, target[key]))
}

function renderView() {
  // 更新视图的方法
  console.log('视图更新')
}
