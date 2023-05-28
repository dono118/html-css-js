/**
 * 封装一个函数 mineReadFile 读取文件内容
 * 参数：path 文件路径
 * 返回：promise 对象
 */
const fs = require('fs')

function mineReadFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(__dirname + path, 'utf-8', (err, data) => {
      // 读取失败
      if (err) reject(err)
      // 读取成功
      resolve(data)
    })
  })
}

mineReadFile('/resource/content.txt').then(
  value => {
    // 控制台输出文件内容
    console.log(value)
  },
  reason => {
    console.log(reason)
  }
)
