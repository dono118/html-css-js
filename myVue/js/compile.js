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
      let reg = /\{\{\s*(.*?)\s*\}\}/
      let text = node.textContent
      if (this.isTextNode(node) && reg.test(text)) {
        // 判断是否是符合这种形式{{}}的指令
        this.compileText(node, reg.exec(text)[1])
      }

      if (node.childNodes && node.childNodes.length) {
        this.compileElement(node) // 继续递归遍历子节点
      }
    })
  },
  compileText(node, exp) {
    let initText = this.vm[exp]
    this.updateText(node, initText) // 将初始化的数据初始化到视图中
    new Watcher(
      this.vm,
      exp,
      value => this.updateText(node, value) // 生成订阅器并绑定更新函数
    )
  },
  updateText(node, value) {
    node.textContent = typeof value == 'undefined' ? '' : value
  },
  isTextNode(node) {
    return node.nodeType == 3
  }
}
