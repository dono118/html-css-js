function MyVue(data, el, exp) {
  this.data = data
  Object.keys(data).forEach(key => this.proxyKeys(key))

  observe(data)
  el.innerHTML = this.data[exp] // 初始化模板数据的值
  new Watcher(this, exp, value => (el.innerHTML = value))
}

MyVue.prototype = {
  proxyKeys(key) {
    Object.defineProperty(this, key, {
      enumerable: false,
      configurable: true,
      get() {
        return this.data[key]
      },
      set(newVal) {
        this.data[key] = newVal
      }
    })
  }
}
