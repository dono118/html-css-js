function Compile(el, vm) {
  this.vm = vm
  this.el = document.querySelector(el)
  this.fragment = null
  this.init()
}

Compile.prototype = {
  init() {
    if (this.el) {
      this.fragment = this.nodeToFragment(this.el)
      this.compileElement(this.fragment)
      this.el.appendChild(this.fragment)
    } else {
      console.log('Dom元素不存在')
    }
  },
  nodeToFragment(el) {
    let fragment = document.createDocumentFragment()
    let child = el.firstChild
    while (child) {
      // 将Dom元素移入fragment中
      fragment.appendChild(child)
      child = el.firstChild
    }
    return fragment
  },
  compileElement(el) {
    let childNodes = el.childNodes
    ;[].slice.call(childNodes).forEach(node => {
      let reg = /\{\{(.*)\}\}/
      let text = node.textContent

      if (this.isElementNode(node)) {
        this.compile(node)
      } else if (this.isTextNode(node) && reg.test(text)) {
        this.compileText(node, reg.exec(text)[1])
      }

      if (node.childNodes && node.childNodes.length) {
        this.compileElement(node)
      }
    })
  },
  compile(node) {
    let nodeAttrs = node.attributes
    Array.prototype.forEach.call(nodeAttrs, attr => {
      let attrName = attr.name
      if (this.isDirective(attrName)) {
        let exp = attr.value
        let dir = attrName.substring(2)
        if (this.isEventDirective(dir)) {
          // 事件指令
          this.compileEvent(node, this.vm, exp, dir)
        } else {
          // v-model 指令
          this.compileModel(node, this.vm, exp, dir)
        }
        node.removeAttribute(attrName)
      }
    })
  },
  compileText(node, exp) {
    let initText = this.vm[exp]
    this.updateText(node, initText)
    new Watcher(this.vm, exp, value => this.updateText(node, value))
  },
  compileEvent(node, vm, exp, dir) {
    let eventType = dir.split(':')[1]
    let cb = vm.methods && vm.methods[exp]

    if (eventType && cb) {
      node.addEventListener(eventType, cb.bind(vm), false)
    }
  },
  compileModel(node, vm, exp, dir) {
    let val = this.vm[exp]
    this.modelUpdater(node, val)
    new Watcher(this.vm, exp, value => this.modelUpdater(node, value))

    node.addEventListener('input', e => {
      let newValue = e.target.value
      if (val === newValue) {
        return
      }
      this.vm[exp] = newValue
      val = newValue
    })
  },
  updateText(node, value) {
    node.textContent = typeof value == 'undefined' ? '' : value
  },
  modelUpdater(node, value, oldValue) {
    node.value = typeof value == 'undefined' ? '' : value
  },
  isDirective(attr) {
    return attr.indexOf('v-') == 0
  },
  isEventDirective(dir) {
    return dir.indexOf('on:') === 0
  },
  isElementNode(node) {
    return node.nodeType == 1
  },
  isTextNode(node) {
    return node.nodeType == 3
  }
}
