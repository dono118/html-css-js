/*
  Excel表列名称
  给你一个整数 columnNumber ，返回它在 Excel 表中相对应的列名称。
  例如：
  A -> 1 B -> 2 C -> 3 ... Z -> 26 AA -> 27 AB -> 28 ... 
  示例 1：
    输入: columnNumber = 1 
    输出："A"
  示例 2：
    输入：columnNumber = 28
    输出："AB"
  示例 3：
    输入：columnNumber = 701 
    输出："ZY" 
  */
var convertToTitle = function (columnNumber) {
  let n = columnNumber
  let s = ''

  while (n > 0) {
    let m = n % 26
    if (m == 0) m = 26
    s = String.fromCharCode(m + 64) + s
    n = (n - m) / 26
  }
  return s
}
// let columnNumber = 100
// console.log(convertToTitle(columnNumber)) // CV

/*
  多数元素
  给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
  你可以假设数组是非空的，并且给定的数组总是存在多数元素。
  示例 1：
    输入: nums = [3,2,3]
    输出：3
  示例 2：
    输入：nums = [2,2,1,1,1,2,2]
    输出：2
  */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    let count = map.get(nums[i]) || 0
    count++
    if (count > nums.length / 2) return nums[i]
    map.set(nums[i], count)
  }
}
// let nums = [2, 2, 1, 1, 1, 2, 2]
// console.log(majorityElement(nums))

/*
  Excel表列序号
  给你一个字符串 columnTitle ，表示 Excel 表格中的列名称。返回 该列名称对应的列序号 。
  例如：
  A -> 1 B -> 2 C -> 3 ... Z -> 26 AA -> 27 AB -> 28 ... 
  示例 1：
    输入: columnTitle = "A"
    输出：1
  示例 2：
    输入：columnTitle = "AB"
    输出：28
  示例 3：
    输入：columnTitle = "ZY"
    输出：701
  */
var titleToNumber = function (columnTitle) {
  let num = 0,
    arr = columnTitle.split(''),
    len = arr.length - 1
  for (let i = 0; i <= len; i++) {
    num += Math.pow(26, len - i) * (arr[i].charCodeAt() - 64)
  }
  return num
}

console.log(titleToNumber('ZY'))
