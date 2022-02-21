function MyVue(options) {
  this.data = options.data
  this.methods = options.methods

  Object.keys(this.data).forEach(key => this.proxyKeys(key))

  observe(this.data)
  new Compile(options.el, this)
  options.mounted.call(this)
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
