function MyVue(options) {
  this.vm = this
  this.data = options.data
  Object.keys(this.data).forEach(key => this.proxyKeys(key))

  observe(this.data)
  new Compile(options.el, this.vm)
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
