// forEach 遍历数组，没有return返回值
// let arr = [68, 53, 12]

// arr.forEach((item, index) => {
//   console.log(`第${index + 1}个数是：${item}`)
// })
// 第1个数是：68
// 第2个数是：53
// 第3个数是：12

// let person = { name: '张三', age: 24 }

// console.log(Object.keys(person)) // ["name", "age"]

// Object.keys(person).forEach(item => {
//   console.log(item + ':', person[item])
// })
// name: 张三
// age: 24

// map 返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值
// let arr = [68, 53, 12, 98, 65]

// let arr1 = arr.map(function (item) {
//   if (item >= 60) {
//     return '及格'
//   } else {
//     return '不及格'
//   }
// })

// arr1用箭头函数可以简写为：
// let arr1 = arr.map(item => (item >= 60 ? '及格' : '不及格'))

// console.log(arr1) // ["及格", "不及格", "不及格", "及格", "及格"]

// reduce 有三个参数,数组中的每个值（从左到右）开始缩减，最终计算为一个值
// let arr = [68, 53, 12, 98, 65]

//从左到右累加
// let arr1 = arr.reduce(function (tmp, item, index) {
//   // reduce有三个参数  tmp：前两个数处理的结果
//   return tmp + item
// })
// console.log(arr1) // 296

//从左到右累减
// var arr2 = arr.reduce(function (tmp, item, index) {
//   return tmp - item
// })
// console.log(arr2) // -160

// 求平均值
// let arr3 = arr.reduce(function (tmp, item, index) {
//   if (index === arr.length - 1) {
//     return (tmp + item) / arr.length
//   } else {
//     return tmp + item
//   }
// })
// console.log(arr3) // 59.2

// filter 把传入的函数依次作用于每个元素，然后根据返回值是true还是false决定保留还是丢弃该元素。
// 过滤掉不符合条件的，只保留符合条件的
// let arr = [68, 53, 12, 98, 65]

// 保留及格分
// let arr1 = arr.filter(function (item) {
//   return item > 60
// })
// console.log(arr1) // [68, 98, 65]

// 保留偶数
// let arr2 = arr.filter(function (item) {
//   return item % 2 == 0
// })
// console.log(arr2) // [68, 12, 98]
//三个参数
// let arr = ['A', 'B', 'C']
// let r = arr.filter(function (item, index, self) {
//   console.log(item) // 依次打印'A', 'B', 'C'
//   console.log(index) // 依次打印0, 1, 2
//   console.log(self) // self就是变量arr  ['A', 'B', 'C']
// })

//利用filter数组去重
// let fruits = ['apple', 'orange', 'banana', 'pear', 'apple', 'orange']
// let f = fruits.filter(function (item, index, self) {
//   return self.indexOf(item) === index
// })
// console.log(f) // ["apple", "orange", "banana", "pear"]

// sort 排序
// var arr = [10, 20, 1, 2]

//从小到大排序
// arr.sort(function (x, y) {
//   if (x < y) {
//     return -1
//   }
//   if (x > y) {
//     return 1
//   }
//   return 0
// })
// console.log(arr) // [1, 2, 10, 20]

//从大到小排序
// arr.sort(function (x, y) {
//   if (x < y) {
//     return 1
//   }
//   if (x > y) {
//     return -1
//   }
//   return 0
// })
// console.log(arr) // [20, 10, 2, 1]

//注：sort()方法会直接对Array进行修改，它返回的结果仍是当前Array

// every 判断数组中每一项都是否满足条件，只有所有项都满足条件，才会返回true。
// var arr = [1, 2, 3, 4, 5]

// var arr2 = arr.every(function (item) {
//   return item < 10
// })
// console.log(arr2) // true

// var arr3 = arr.every(function (item) {
//   return item < 3
// })
// console.log(arr3) // false

// some 判断数组中是否存在满足条件的项，只要有一项满足条件，就会返回true。
// var arr = [1, 2, 3, 4, 5]

// var arr2 = arr.some(function (item) {
//   return item < 3
// })
// console.log(arr2) //true

// var arr3 = arr.some(function (item) {
//   return item < 1
// })
// console.log(arr3) // false

// find 方法返回通过测试（函数内判断）的数组的第一个元素的值
// var ages = [3, 10, 18, 20]

// function checkAdult(age) {
//   return age >= 18
// }
// var a1 = ages.find(checkAdult) // 18 (返回的是匹配到的第一个元素的值)

// // 或者用箭头函数
// var a2 = ages.find(ages => {
//   return ages > 3
// }) // 10 (返回的是匹配到的第一个元素的值)

// findIndex 方法返回传入一个测试条件（函数）符合条件的数组第一个元素位置
// var a1 = ages.findIndex(checkAdult) // 2 (返回的是匹配到的第一个元素的索引)

// // 或者用箭头函数
// var a2 = ages.findIndex(ages => {
//   return ages > 3
// }) // 1 (返回的是匹配到的第一个元素的索引)
// console.log(a1, a2)

// 扁平化 n 维数组
// Array.flat(n) 是 ES10 扁平化数组的 api， n 表示维度， n 值为 Infiniti 时维度为无限大。
// let arr1 = [1, [2, 3]].flat(2) // [1, 2, 3]
// let arr2 = [1, [2, 3, [4, 5]]].flat(3) // [1, 2, 3, 4, 5]
// console.log(arr1, arr2)

// 利用递归和数组合并方法 concat 实现扁平。
// function flatten(arr) {
//   while (arr.some(item => Array.isArray(item))) {
//     arr = [].concat(...arr)
//   }
//   return arr
// }
// let arr = flatten([1, [2, 3]])

// 数组
// let arr = Array.from(new Set([1, 2, 3, 2, 4])) // [1, 2, 3, 4]
// let arr = [...new Set([1, 2, 3, 3, 4, 4])] // [1, 2, 3, 4]

// 可以根据双层循环过滤掉重复项
// Array.prototype.distinct = function () {
//   var arr = this,
//     result = [],
//     i,
//     j,
//     len = arr.length
//   for (i = 0; i < len; i++) {
//     for (j = i + 1; j < len; j++) {
//       if (arr[i] === arr[j]) {
//         j = ++i
//       }
//     }
//     result.push(arr[i])
//   }
//   return result
// }
// let arr = [1, 2, 2, 3].distinct() // [1, 2, 3];

// let arr = [1, 2, 3, 4].sort()
// let arr = [1, 2, 3, 4].sort((a, b) => b - a)
// 冒泡排序
// Array.prototype.bubleSort = function () {
//   let arr = this,
//     len = arr.length
//   for (let i = 0; i < len; i++) {
//     for (let j = i + 1; j < len; j++) {
//       if (arr[j - 1] > arr[j]) {
//         ;[arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
//       }
//     }
//   }
//   return arr
// }
// let arr = [2, 1, 3].bubleSort() // [1, 2, 3]
// 选择排序
// Array.prototype.selectSort = function () {
//   let arr = this,
//     len = arr.length
//   for (let i = 0; i < len; i++) {
//     for (let j = i; j < len; j++) {
//       if (arr[i] > arr[j]) {
//         ;[arr[i], arr[j]] = [arr[j], arr[i]]
//       }
//     }
//   }
//   return arr
// }
// let arr = [1, 3, 2, 4].selectSort() // [1, 2, 3, 4]

// 最大值
// let maxVal = Math.max(...[1, 2, 3, 4]) // 4
// let maxVal = Math.max.apply(this, [1, 2, 3, 4]) // 4
// let maxVal = [1, 2, 3, 4].reduce((prev, cur, curIndex, arr) => {
//   return Math.max(prev, cur)
// }) // 4
// console.log(maxVal)

// 求和
// let sum = [1, 2, 3, 4].reduce((prev, cur, curIndex, arr) => {
//   return prev + cur
// }, 0) // 10
// console.log(sum)

// shift:删除原数组第一项，并返回删除元素的值；如果数组为空则返回undefined
// var a = [1, 2, 3, 4, 5]
// var b = a.shift() //a:[2,3,4,5] b:1

// unshift:将参数添加到原数组开头，并返回数组的长度
// var a = [1, 2, 3, 4, 5]
// var b = a.unshift(-2, -1) //a:[-2,-1,1,2,3,4,5] b:7
// （IE6.0下测试返回值总为undefined，FF2.0下测试返回值为7，所以这个方法的返回值不可靠，需要用返回值时可用splice代替本方法来使用。）

// pop:删除原数组最后一项，并返回删除元素的值；如果数组为空则返回undefined
// var a = [1, 2, 3, 4, 5]
// var b = a.pop() //a:[1,2,3,4] b:5

// push:将参数添加到原数组末尾，并返回数组的长度
// var a = [1, 2, 3, 4, 5]
// var b = a.push(6, 7) //a:[1,2,3,4,5,6,7] b:7

// concat()可以将两个数组合并在一起，如果是使用ES6语法也可以用扩展运算符…来代替
// let a = [1, 2, 3, 4, 5]
// let b = [6, 7, 8, 9]
// let c = a.concat(b)
// // 使用 ...
// let d = [...a, ...b]
// console.log(c)
// // [1,2,3,4,5,6,7,8,9]
// console.log(d)
// // [1,2,3,4,5,6,7,8,9]

// splice(start,deleteCount,val1,val2,…):从start位置开始删除deleteCount项，并从该位置起插入
// var a = [1, 2, 3, 4, 5]
// var b = a.splice(2, 2, 7, 8, 9) //a:[1,2,7,8,9,5] b:[3,4]
// var b = a.splice(0, 1) //同shift
// a.splice(0, 0, -2, -1)
// var b = a.length //同unshift
// var b = a.splice(a.length - 1, 1) //同pop
// a.splice(a.length, 0, 6, 7)
// var b = a.length //同push

// reverse:将数组反序
// var a = [1, 2, 3, 4, 5]
// var b = a.reverse() //a:[5,4,3,2,1] b:[5,4,3,2,1]

// sort(orderfunction):按指定的参数对数组进行排序
// var a = [1, 2, 3, 4, 5]
// var b = a.sort() //a:[1,2,3,4,5] b:[1,2,3,4,5]

// slice(start,end):可以截取出数组某部份的元素为一个新的数组，有两个必填的参数，
// 第一个是起始位置，第二个是结束位置( 操作时数字减1 )
// var a = [1, 2, 3, 4, 5]
// var b = a.slice(2, 5) //a:[1,2,3,4,5] b:[3,4,5]

// join(separator):将数组的元素组起一个字符串，以separator为分隔符，省略的话则用默认用逗号为分隔符
// var a = [1,2,3,4,5];
// var b = a.join("|"); //a:[1,2,3,4,5] b:"1|2|3|4|5"
// let a = [1, 2, 3, 4, 5, 6, 7, 8]
// console.log(a.join()) // 1,2,3,4,5,6,7,8
// console.log(a.join('')) // 12345678
// console.log(a.join('@@'))
// 1@@2@@3@@4@@5@@6@@7@@8

// filter()会将数组中的「每一个」元素带入指定的函数内做判断，如果元素符合判断条件则会返回，组成一个新的数组
// let a = [1, 2, 3, 4, 5, 6, 7, 8]
// console.log(a.filter(e => e > 3))
// // [4, 5, 6, 7, 8]
// console.log(a.filter(e => e % 2 == 0))
// // [2, 4, 6, 8]

// find()返回符合传入测试（函数）条件的数组元素
// find()会将数组中的「每一个」元素带入指定的函数内做判断，并会返回第一个符合判断条件的元素，
// 如果没有元素符合则会返回undefined。
// let a = [1, 2, 3, 4, 5, 6, 7, 8]
// console.log(a.find(e => e > 3)) // 4
// console.log(a.find(e => e < 0)) // undefined

// forEach()数组每个元素都执行一次回调函数
// forEach()会将数组中每个元素套用到指定的函数里进行运算，函数有三个参数，第一个参数表示每个元素的值( 必填)，
// 第二个参数为该元素的索引值( 选填)，第三个参数则表示原本的数组( 选填)。
// let a = [1, 2, 3, 4, 5]
// let b = 0
// a.forEach(item => {
//   b = b + item
// })
// console.log(b) // 15 ( 1+2+3+4+5 )

// 如果结合第二和第三个参数进行搭配使用，就能做到改变原本数组的效果。
// let a = [1, 2, 3, 4, 5]
// a.forEach((item, index, arr) => {
//   arr[index] = item * 10
// })
// console.log(a) // [10,20,30,40,50]

// includes()判断一个数组是否包含一个指定的值
// includes()会判断数组中是否包含某个值，如果有包含就返回true，否则返回false，
// 有两个参数，第一个参数表示要判断的值( 必填)，第二个参数表示从数组的哪个位置开始判断( 选填)。
// let a = [1, 2, 3, 4, 5, 6, 7, 8]
// console.log(a.includes(2))
// true
// console.log(a.includes(2, 2))
// false ( 在 3,4,5,6,7,8 查找有没有 2 )

// indexOf()lastIndexOf()搜索数组中的元素，并返回它所在的位置
// indexOf()会判断数组中是否包含某个值，判断的方式为「由左而右」，
// 如果有包含就返回这个值在数组中的索引值，如果没有就返回-1，有两个参数，
// 第一个参数表示要判断的值( 必填)，第二个参数表示从数组的哪个位置开始判断( 选填，预设为0 )。
// let a = [1, 2, 3, 4, 5, 6, 7, 8]
// console.log(a.indexOf(4)) // 3
// console.log(a.indexOf(4, 5))
// -1 ( 在6,7,8中搜索有沒有4 )

// lastIndexOf()会判断数组中是否包含某个值，判断的方式为「由右而左」，
// 如果有包含就返回这个值在数组中的索引值，如果没有就返回-1，这个方法有两个参数，
// 第一个参数表示要判断的值( 必填)，第二个参数表示判断从数组的哪个位置开始从右往左查找( 选填，默认为整个数组长度-1 )。
// let a = [1, 2, 3, 4, 5, 6, 7, 8]
// console.log(a.lastIndexOf(3)) // 2
// console.log(a.lastIndexOf(3, 1))
// -1 ( 只在1,2中判断，所以沒有 3 )

// map()会处理数组中每个元素，最后返回一个新的数组，里头有一个函数( 必填) 和一个返回函数里的this参数( 选填)，
// 函数内又包含三个参数，第一个是每个元素的值( 必填)，第二个是当前元素的索引值( 选填)，第三个是当前的数组( 选填)。
// let a = [1, 2, 3, 4, 5, 6, 7, 8]
// let b = a.map(e => {
//   return e + 10
// })
// console.log(b) // [11, 12, 13, 14, 15, 16, 17, 18]

// 使用第二个和第三个参数的示例:
// let a = [1, 2, 3, 4, 5, 6, 7, 8]
// let b = a.map((e, i, arr) => {
//   return `${e}${i}${arr.find(e => e % 5 == 1)}`
//   // 组合成「元素 + 索引值 + 除以五余数为1的第一个元素」
// })
// console.log(b)
// ['101', '211', '321', '431', '541', '651', '761', '871']

// 如果要使用回调函数里this的参数，则「不能使用」箭头函数，因为箭头函数的this指向和函数的this指向不同，所以要用一般的函数处理。
let a = [1, 2, 3, 4, 5, 6, 7, 8]
let b = a.map(function (e) {
  return e + this // 此处的 this为10
}, 10)
console.log(b) // [11, 12, 13, 14, 15, 16, 17, 18]
