function Observer(data) {
  this.walk(data)
}
Observer.prototype = {
  walk(data) {
    Object.keys(data).forEach(key => this.defineReactive(data, key, data[key]))
  },
  defineReactive(data, key, val) {
    let dep = new Dep()
    observe(val)
    Object.defineProperty(data, key, {
      enumerable: true,
      configurable: true,
      get() {
        if (Dep.target) {
          dep.addSub(Dep.target)
        }
        return val
      },
      set(newVal) {
        if (newVal === val) return
        val = newVal
        dep.notify()
      }
    })
  }
}

function observe(value, vm) {
  if (!value || typeof value !== 'object') {
    return
  }
  return new Observer(value)
}

function Dep() {
  this.subs = []
}
Dep.prototype = {
  addSub(sub) {
    this.subs.push(sub)
  },
  notify() {
    this.subs.forEach(function (sub) {
      sub.update()
    })
  }
}
Dep.target = null
