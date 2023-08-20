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
var arr = [1, 2, 3, 4, 5]

var arr2 = arr.some(function (item) {
  return item < 3
})
console.log(arr2) //true

var arr3 = arr.some(function (item) {
  return item < 1
})
console.log(arr3) // false
