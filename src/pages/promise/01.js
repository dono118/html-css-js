const fs = require('fs')

// 异步读取文件
// 回调函数形式
// fs.readFile(__dirname + '/resource/content.txt', 'utf-8', (err, data) => {
//   if (err) throw err
//   console.log(data)
// })

// 用 Promise 进行封装
let p = new Promise((resolve, reject) => {
  fs.readFile(__dirname + '/resource/content.txt', 'utf-8', (err, data) => {
    // 读取失败
    if (err) reject(err)
    // 读取成功
    resolve(data)
  })
})

p.then(
  value => {
    console.log(value)
  },
  reason => {
    console.log(reason)
  }
)

console.log('你好！----')
