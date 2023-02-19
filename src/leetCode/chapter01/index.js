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

// console.log(titleToNumber('ZY'))

/*
  快乐数
  编写一个算法来判断一个数 n 是不是快乐数。
  「快乐数」 定义为：
  对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
  然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。
  如果这个过程 结果为 1，那么这个数就是快乐数。
  如果 n 是 快乐数 就返回 true ；不是，则返回 false 。
  示例 1：
    输入：n = 19
    输出：true
    解释：
        1^2 + 9^2 = 82
        8^2 + 2^2 = 68
        6^2 + 8^2 = 100
        1^2 + 0^2 + 0^2 = 1
  示例 2：
    输入：n = 2
    输出：false
 */
var isHappy = function (n) {
  function getSum(i) {
    let sum = 0
    while (i > 0) {
      sum += Math.pow(i % 10, 2)
      i = Math.floor(i / 10)
    }
    return sum
  }
  while (1) {
    if (n <= 10) {
      if ([1, 7, 10].includes(n)) {
        return true
      } else {
        return false
      }
    }
    n = getSum(n)
  }
}

// console.log(isHappy(19))

/*
  同构字符串
  给定两个字符串 s 和 t ，判断它们是否是同构的。
  如果 s 中的字符可以按某种映射关系替换得到 t ，那么这两个字符串是同构的。
  每个出现的字符都应当映射到另一个字符，同时不改变字符的顺序。不同字符不能映射到
  同一个字符上，相同字符只能映射到同一个字符上，字符可以映射到自己本身。
  示例 1：
    输入：s = "egg", t = "add"
    输出：true
  示例 2：
    输入：s = "foo", t = "bar"
    输出：false
  示例 3：
    输入：s = "paper", t = "title"
    输出：true
 */
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) {
    return false
  }
  let map1 = new Map()
  let map2 = new Map()
  for (let i = 0; i < s.length; i++) {
    if (map1.has(s[i])) {
      if (map1.get(s[i]) !== t[i]) {
        return false
      }
    } else if (map2.has(t[i])) {
      if (map2.get(t[i]) !== s[i]) {
        return false
      }
    } else {
      map1.set(s[i], t[i])
      map2.set(t[i], s[i])
    }
  }
  return true
}

// console.log(isIsomorphic('paper', 'title'))

/*
  存在重复元素
  给你一个整数数组 nums 。如果任一值在数组中出现 至少两次 ，返回 true ；
  如果数组中每个元素互不相同，返回 false 。
  示例 1：
    输入：nums = [1,2,3,1]
    输出：true
  示例 2：
    输入：nums = [1,2,3,4]
    输出：false
  示例 3：
    输入：nums = [1,1,1,3,3,4,3,2,4,2]
    输出：true
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  // let flag = false
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = i + 1; j < nums.length; j++) {
  //     if (nums[i] == nums[j]) {
  //       flag = true
  //     }
  //   }
  // }
  // return flag
  nums.sort()
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      return true
    }
  }
  return false
}

// console.log(containsDuplicate([1, 2, 3, 1]))

/*
  存在重复元素 II
  给你一个整数数组 nums 和一个整数 k ，判断数组中是否存在两个 不同的索引 i 和 j ，
  满足 nums[i] == nums[j] 且 abs(i - j) <= k 。如果存在，返回 true ；否则，返回 false 。
  示例 1：
    输入：nums = [1,2,3,1], k = 3
    输出：true
  示例 2：
    输入：nums = [1,0,1,1], k = 1
    输出：true
  示例 3：
    输入：nums = [1,2,3,1,2,3], k = 2
    输出：fale
 */
var containsNearbyDuplicate = function (nums, k) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i]) && i - map.get(nums[i]) <= k) {
      return true
    } else {
      map.set(nums[i], i)
    }
  }
  return false
}

// let nums = [1, 2, 3, 1],
//   k = 3

// console.log(containsNearbyDuplicate(nums, k))

/*
  用队列实现栈
  请你仅使用两个队列实现一个后入先出（LIFO）的栈，并支持普通栈的全部四种操作（push、top、pop 和 empty）。
  实现 MyStack 类：
  void push(int x) 将元素 x 压入栈顶。
  int pop() 移除并返回栈顶元素。
  int top() 返回栈顶元素。
  boolean empty() 如果栈是空的，返回 true ；否则，返回 false 。
  示例：
    输入：
      ["MyStack", "push", "push", "top", "pop", "empty"]
      [[], [1], [2], [], [], []]
    输出：
      [null, null, null, 2, 2, false]
    解释：
      MyStack myStack = new MyStack();
      myStack.push(1);
      myStack.push(2);
      myStack.top(); // 返回 2
      myStack.pop(); // 返回 2
      myStack.empty(); // 返回 False

 */
/**
 * Initialize your data structure here.
 */
var MyStack = function () {
  this.queue = []
}

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  return this.queue.push(x)
}

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
  return this.queue.pop()
}

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this.queue[this.queue.length - 1]
}

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.queue.length === 0
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

let obj = new MyStack()
obj.push(1)
obj.push(2)
let e1 = obj.pop()
console.log(e1, obj.queue)
let e2 = obj.top()
console.log(e2, obj.queue)
let e3 = obj.pop()
console.log(e3, obj.queue)
let bool = obj.empty()
console.log(bool, obj.queue)
