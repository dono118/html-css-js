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

// let obj = new MyStack()
// obj.push(1)
// obj.push(2)
// let e1 = obj.pop()
// console.log(e1, obj.queue)
// let e2 = obj.top()
// console.log(e2, obj.queue)
// let e3 = obj.pop()
// console.log(e3, obj.queue)
// let bool = obj.empty()
// console.log(bool, obj.queue)

/*
  各位相加
  给定一个非负整数 num，反复将各个位上的数字相加，直到结果为一位数。返回这个结果。
  示例 1：
    输入：num = 38
    输出：2
    解释：
      各位相加的过程为：
        38 --> 3 + 8 --> 11
        11 --> 1 + 1 --> 2
        由于 2 是一位数，所以返回 2。
  示例 2：
    输入：num = 0
    输出：0
 */

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  // function foo(s) {
  //   let myNum = s
  //     .toString()
  //     .split('')
  //     .reduce((a, b) => parseInt(a) + parseInt(b))
  //   let len = myNum.toString().length
  //   if (len > 1) {
  //     return foo(myNum)
  //   } else {
  //     return myNum
  //   }
  // }

  // if (num.toString().length > 1) {
  //   return foo(num)
  // } else {
  //   return num
  // }
  if (num === 0) return 0
  return ((num - 1) % 9) + 1
}

// console.log(addDigits(38))

/*
  丑数
  丑数 就是只包含质因数 2、3 和 5 的正整数。
  给你一个整数 n ，请你判断 n 是否为 丑数 。如果是，返回 true ；否则，返回 false 。
  示例 1：
    输入：n = 6
    输出：true
    解释：6 = 2 x 3
      
  示例 2：
    输入：n = 1
    输出：true
    解释：1 没有质因数，因此它的全部质因数是 {2, 3, 5} 的空集。习惯上将其视作第一个丑数。

  示例 3：
    输入：n = 14
    输出：fale
    解释：14 不是丑数，因为它包含了另外一个质因数 7 。
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
  while (n > 1) {
    if (n % 2 == 0) {
      n /= 2
    } else if (n % 3 == 0) {
      n /= 3
    } else if (n % 5 == 0) {
      n /= 5
    } else {
      return false
    }
  }
  return n == 1 ? true : false
}

// console.log(isUgly(8))

/*
  丢失的数字
  给定一个包含 [0, n] 中 n 个数的数组 nums ，找出 [0, n] 这个范围内没有出现在数组中的那个数。
  示例 1：
    输入：nums = [3,0,1]
    输出：2
    解释：n = 3，因为有 3 个数字，所以所有的数字都在范围 [0,3] 内。
        2 是丢失的数字，因为它没有出现在 nums 中。
      
  示例 2：
    输入：nums = [0,1]
    输出：2
    解释：n = 2，因为有 2 个数字，所以所有的数字都在范围 [0,2] 内。
        2 是丢失的数字，因为它没有出现在 nums 中。

  示例 3：
    输入：nums = [9,6,4,2,3,5,7,0,1]
    输出：8
    解释：n = 9，因为有 9 个数字，所以所有的数字都在范围 [0,9] 内。
        8 是丢失的数字，因为它没有出现在 nums 中。

  示例 4：
    输入：nums = [0]
    输出：1
    解释：n = 1，因为有 1 个数字，所以所有的数字都在范围 [0,1] 内。
        1 是丢失的数字，因为它没有出现在 nums 中。
 */

/**
 * @param {array} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  nums.sort((a, b) => a - b)
  let nLen = nums.length
  for (let i = 0; i < nLen; i++) {
    if (nums[i] != i) {
      return i
    }
  }
  return nLen
}

// console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]))

/*
  移动零
  给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
  请注意 ，必须在不复制数组的情况下原地对数组进行操作。
  示例 1:
    输入: nums = [0,1,0,3,12]
    输出: [1,3,12,0,0]
  示例 2:
    输入: nums = [0]
    输出: [0]
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var moveZeroes = function (nums) {
  for (let i = 0, j = -1, len = nums.length; i < len; i++) {
    if (nums[i] === 0) {
      if (j < 0) {
        j = i
      }
    }
    if (nums[i] !== 0 && j >= 0) {
      ;[nums[j], nums[i]] = [nums[i], nums[j]]
      j++
    }
  }
  return nums
}
// console.log(moveZeroes([0, 1, 0, 3, 12]))

/*
  单词规律
  给定一种规律 pattern 和一个字符串 s ，判断 s 是否遵循相同的规律。
  这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 s 中的
  每个非空单词之间存在着双向连接的对应规律。
  示例 1:
    输入: pattern = "abba", s = "dog cat cat dog"
    输出: true
  示例 2:
    输入: pattern = "abba", s = "dog cat cat fish"
    输出: false
  示例 3:
    输入: pattern = "aaaa", s = "dog cat cat dog"
    输出: false
 */
/**
 * @param {String} pattern
 * @param {String} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  let pArr = pattern.split(''),
    sArr = s.split(' ')
  if (pArr.length !== sArr.length) {
    return false
  }
  let map = new Map()
  for (let i = 0; i < sArr.length; i++) {
    // 如果存在值，但是对应的值跟哈希表中不一致，则规律不对
    if (map.get(sArr[i]) && map.get(sArr[i]) !== pArr[i]) {
      return false
    }
    // 如果不存在值，但是对应的值的索引不是当前索引，则规律不对
    if (map.get(sArr[i]) === undefined && pArr.indexOf(pArr[i]) !== i) {
      return false
    }
    map.set(sArr[i], pArr[i])
  }
  return true
}

// console.log(wordPattern('abba', 'dog cat cat dog'))

/*
  Nim 游戏
  你和你的朋友，两个人一起玩 Nim 游戏：
  桌子上有一堆石头。
  你们轮流进行自己的回合， 你作为先手 。
  每一回合，轮到的人拿掉 1 - 3 块石头。
  拿掉最后一块石头的人就是获胜者。
  假设你们每一步都是最优解。请编写一个函数，来判断你是否可以在给定石头数量为 n 
  的情况下赢得游戏。如果可以赢，返回 true；否则，返回 false 。
  示例 1:
    输入：n = 4
    输出：false 
    解释：以下是可能的结果:
      1. 移除1颗石头。你的朋友移走了3块石头，包括最后一块。你的朋友赢了。
      2. 移除2个石子。你的朋友移走2块石头，包括最后一块。你的朋友赢了。
      3.你移走3颗石子。你的朋友移走了最后一块石头。你的朋友赢了。
      在所有结果中，你的朋友是赢家。
  示例 2:
    输入: n = 1
    输出: true
  示例 3:
    输入: n = 2
    输出: true
 */
var canWinNim = function (n) {
  return n % 4 !== 0
}

// console.log(canWinNim(4))

/*
  2 的幂
  给定一个整数，请你判断该整数是否是 2 的幂次方。如果是，返回 true ；
  否则，返回 false 。
  如果存在一个整数 x 使得 n == 2^x ，则认为 n 是 2 的幂次方。
  示例 1:
    输入：n = 1
    输出：true
  示例 2:
    输入: n = 27
    输出: false
  示例 3:
    输入: n = 16
    输出: true
 */
var isPowerOfTwo = function (n) {
  if (n < 1) return false
  while (n % 2 === 0) {
    n /= 2
  }
  return n === 1
}

// console.log(isPowerOfTwo(16))

/*
  3 的幂
  给定一个整数，写一个函数来判断它是否是 3 的幂次方。如果是，返回 true ；
  否则，返回 false 。
  整数 n 是 3 的幂次方需满足：存在整数 x 使得 n == 3^x
  示例 1:
    输入：n = 27
    输出：true
  示例 2:
    输入: n = 0
    输出: false
  示例 3:
    输入: n = 9
    输出: true
 */
var isPowerOfThree = function (n) {
  if (n < 1) return false
  while (n % 3 === 0) {
    n /= 3
  }
  return n === 1
}

// console.log(isPowerOfThree(45))

/*
  比特位计数
  给你一个整数 n ，对于 0 <= i <= n 中的每个 i ，计算其二进制表示中 1 的个数 ，
  返回一个长度为 n + 1 的数组 ans 作为答案。
  示例 1:
    输入：n = 2
    输出：[0,1,1]
    解释：
      0 --> 0
      1 --> 1
      2 --> 10
  示例 2:
    输入: n = 5
    输出: [0,1,1,2,1,2]
    解释：
      0 --> 0
      1 --> 1
      2 --> 10
      3 --> 11
      4 --> 100
      5 --> 101
 */
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const stk = []
  for (let i = 0; i <= n; i++) {
    let b = 0
    let a = i.toString(2)
    for (let j = 0; j < a.length; j++) {
      if (a[j] == 1) {
        b++
      }
    }
    stk.push(b)
  }
  return stk
}

// console.log(countBits(5))

/*
  4 的幂
  给定一个整数，写一个函数来判断它是否是 4 的幂次方。如果是，返回 true ；
  否则，返回 false 。
  整数 n 是 4 的幂次方需满足：存在整数 x 使得 n == 4^x
  示例 1:
    输入：n = 16
    输出：true
  示例 2:
    输入: n = 5
    输出: false
  示例 3:
    输入: n = 1
    输出: true
 */
var isPowerOfFour = function (n) {
  return n > 0 && (n & (n - 1)) == 0 && n % 3 == 1
}

// console.log(isPowerOfFour(16))

/*
  反转字符串
  编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 s 的形式给出。
  不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 
  的额外空间解决这一问题。
  示例 1:
    输入：s = ["h","e","l","l","o"]
    输出：["o","l","l","e","h"]
  示例 2:
    输入: s = ["H","a","n","n","a","h"]
    输出: ["h","a","n","n","a","H"]
 */
/**
 *
 * @param {charactor[]} s
 * @return {void} Do not return anything,
 * modify s in-place instead.
 */
var reverseString = function (s) {
  // s.reverse()
  let left = 0,
    right = s.length - 1
  for (let i = 0; i < s.length / 2; i++) {
    let temp = s[right]
    s[right] = s[left]
    s[left] = temp
    left++
    right--
  }
}
// let s = ['h', 'e', 'l', 'l', 'o']
// reverseString(s)
// console.log(s)

/*
  反转字符串中的元音字母
  给你一个字符串 s ，仅反转字符串中的所有元音字母，并返回结果字符串。
  元音字母包括 'a'、'e'、'i'、'o'、'u'，且可能以大小写两种形式出现不止一次。
  的额外空间解决这一问题。
  示例 1:
    输入：s = "hello"
    输出："holle"
  示例 2:
    输入: s = "leetcode"
    输出: "leotcede"
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const arr = ['a', 'o', 'e', 'i', 'u', 'A', 'O', 'E', 'I', 'U']
  s = s.split('')
  let i = 0,
    j = s.length - 1
  while (i < j) {
    if (arr.indexOf(s[i]) === -1) {
      i++
      continue
    }
    if (arr.indexOf(s[j]) === -1) {
      j--
      continue
    }

    ;[s[i], s[j]] = [s[j], s[i]]
    i++
    j--
  }
  return s.join('')
}

// console.log(reverseVowels('hello'))

/*
  两个数组的交集
  给定两个数组 nums1 和 nums2 ，返回它们的交集 。
  输出结果中的每个元素一定是唯一的。我们可以不考虑输出结果的顺序 。
  示例 1:
    输入：nums1 = [1,2,2,1], nums2 = [2,2]
    输出：[2]
  示例 2:
    输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
    输出: [9,4]
    解释：[4,9] 也是可通过的
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  // let nums3 = nums1.filter(
  //   (v, i) => nums2.includes(v) && nums1.indexOf(v) === i
  // )
  let nums3 = [...new Set(nums1.filter(v => nums2.includes(v)))]
  return nums3
}

// console.log(intersection([1, 2, 2, 1], [2, 2]))

/*
  两个数组的交集 Ⅱ
  给你两个整数数组 nums1 和 nums2 ，请你以数组形式返回两数组的交集。
  返回结果中每个元素出现的次数，应与元素在两个数组中都出现的次数一致
  （如果出现次数不一致，则考虑取较小值）。可以不考虑输出结果的顺序 。
  示例 1:
    输入：nums1 = [1,2,2,1], nums2 = [2,2]
    输出：[2,2]
  示例 2:
    输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
    输出: [9,4]
    解释：[4,9] 也是可通过的
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let newArr = [],
    i = 0,
    j = 0,
    len1 = nums1.length,
    len2 = nums2.length

  if (len1 === 0 || len2 === 0) return newArr

  nums1.sort((a, b) => a - b)
  nums2.sort((a, b) => a - b)

  while (i < len1 && j < len2) {
    if (nums1[i] === nums2[j]) {
      newArr.push(nums1[i])
      i++
      j++
    } else if (nums1[i] > nums2[j]) {
      j++
    } else {
      i++
    }
  }
  return newArr
}

// console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]))

/*
  有效的完全平方数
  给你一个正整数 num 。如果 num 是一个完全平方数，则返回 true ，否则返回 false 。
  完全平方数 是一个可以写成某个整数的平方的整数。换句话说，它可以写成某个整数和自身的乘积。
  不能使用任何内置的库函数，如  sqrt 。
  示例 1：
    输入：num = 16
    输出：true
    解释：返回 true ，因为 4 * 4 = 16 且 4 是一个整数。
  示例 2：
    输入：num = 14
    输出：false
    解释：返回 false ，因为 3.742 * 3.742 = 14 但 3.742 不是一个整数。
 */
/**
 * @param {Number} num
 * @return {Boolean}
 */
var isPerfectSquare = function (num) {
  if (num === 1) return true
  let left = 1,
    right = num
  while (left <= right) {
    let mid = (left + right) >> 1
    if (mid * mid === num) return true
    else if (mid * mid > num) right = mid - 1
    else left = mid + 1
  }
  return false
}

// console.log(isPerfectSquare(14))

/*
  字符串中的第一个唯一字符
  给定一个字符串 s ，找到它的第一个不重复的字符，并返回它的索引 。如果不存在，则返回 -1 。
  示例 1：
    输入：s = "leetcode"
    输出：0
  示例 2：
    输入：s = "loveleetcode"
    输出：2
  示例 3：
    输入：s = "aabb"
    输出：-1
 */
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  for (let i = 0; i < s.length; i++) {
    if (s.lastIndexOf(s[i]) == s.indexOf(s[i])) {
      let a = s.indexOf(s[i])
      return a
    }
  }
  return -1
}

// console.log(firstUniqChar('loveleetcode'))

/*
  最长回文串
  给定一个包含大写字母和小写字母的字符串 s ，返回 通过这些字母构造成的 最长的回文串 。
  在构造过程中，请注意 区分大小写 。比如 "Aa" 不能当做一个回文字符串。
  示例 1：
    输入：s = "abccccdd"
    输出：7
    解释：我们可以构造的最长的回文串是"dccaccd", 它的长度是 7。
  示例 2：
    输入：s = "a"
    输出：1
  示例 3：
    输入：s = "aaaaaccc"
    输出：7
 */
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  s = s.split('')
  let map = new Map()
  let result = 0
  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === 1) {
      map.delete(s[i])
      result += 2
    } else {
      map.set(s[i], 1)
    }
  }
  return map.size ? result + 1 : result
}

// console.log(longestPalindrome('aaaaaccc'))

/*
  Fizz Buzz
  给你一个整数 n ，找出从 1 到 n 各个整数的 Fizz Buzz 表示，并用字符串数组 answer（下标从 1 开始）返回结果，其中：
  answer[i] == "FizzBuzz" 如果 i 同时是 3 和 5 的倍数。
  answer[i] == "Fizz" 如果 i 是 3 的倍数。
  answer[i] == "Buzz" 如果 i 是 5 的倍数。
  answer[i] == i （以字符串形式）如果上述条件全不满足。
  示例 1：
    输入：n = 3
    输出：["1","2","Fizz"]
  示例 2：
    输入：n = 5
    输出：["1","2","Fizz","4","Buzz"]
  示例 3：
    输入：n = 15
    输出：["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
 */
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  var arr = []
  for (var i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      arr.push('FizzBuzz')
    } else if (i % 3 == 0) {
      arr.push('Fizz')
    } else if (i % 5 == 0) {
      arr.push('Buzz')
    } else {
      arr.push(i.toString())
    }
  }
  return arr
}

// console.log(fizzBuzz(15))

/*
  第三大的数
  给你一个非空数组，返回此数组中 第三大的数 。如果不存在，则返回数组中最大的数。
  示例 1：
    输入：[3, 2, 1]
    输出：1
    解释：第三大的数是 1 。
  示例 2：
    输入：[1, 2]
    输出：2
    解释：第三大的数不存在, 所以返回最大的数 2 。
  示例 3：
    输入：[2, 2, 3, 1]
    输出：1
    解释：注意，要求返回第三大的数，是指在所有不同数字中排第三大的数。
         此例中存在两个值为 2 的数，它们都排第二。在所有不同数字中排第三大的数为 1 。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let arr = [...new Set(nums)].sort((a, b) => b - a)
  return arr.length >= 3 ? arr[2] : arr[0]
}

// console.log(thirdMax([1, 2, 3, 2, 5]))

/*
  字符串相加
  给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和并同样以字符串形式返回。
  你不能使用任何內建的用于处理大整数的库（比如 BigInteger）， 也不能直接将输入的字符串转换为整数形式。
  示例 1：
    输入：num1 = "11", num2 = "123"
    输出："134"
  示例 2：
    输入：num1 = "456", num2 = "77"
    输出："533"
  示例 3：
    输入：num1 = "0", num2 = "0"
    输出："0"
 */
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let l = num1.length - 1
  let r = num2.length - 1
  let carry = 0
  let ans = []
  while (l >= 0 || r >= 0 || carry !== 0) {
    let c1 = l >= 0 ? num1.charAt(l) - '0' : 0
    let c2 = r >= 0 ? num2.charAt(r) - '0' : 0
    let sum = c1 + c2 + carry
    ans.push(sum % 10)
    carry = Math.floor(sum / 10)
    l--
    r--
  }
  return ans.reverse().join('')
}

// console.log(addStrings('123', '45'))

/*
  字符串中的单词数
  统计字符串中的单词个数，这里的单词指的是连续的不是空格的字符。
  请注意，你可以假定字符串里不包括任何不可打印的字符。
  示例 1：
    输入："Hello, my name is John"
    输出：5
    解释：这里的单词是指连续的不是空格的字符，所以 "Hello," 算作 1 个单词。
 */
/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
  s = s + ' '
  let status = 0,
    count = 0,
    len = s.length

  for (let i = 0; i < len; i++) {
    if (s[i] != ' ') {
      if (s[i + 1] != ' ') i += 1
      status = 1
    } else {
      if (status == 1) count += 1
      status = 0
    }
  }

  return count
}

// console.log(countSegments('Hello, my name is John'))

/*
  找到所有数组中消失的数字
  给你一个含 n 个整数的数组 nums ，其中 nums[i] 在区间 [1, n] 内。请你找出所有
  在 [1, n] 范围内但没有出现在 nums 中的数字，并以数组的形式返回结果。
  示例 1：
    输入：nums = [4,3,2,7,8,2,3,1]
    输出：[5,6]
  示例 2：
    输入：nums = [1,1]
    输出：[2]
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let len = nums.length,
    res = []
  for (let i = 0; i < len; i++) {
    let val = Math.abs(nums[i]) - 1
    if (nums[val] > 0) {
      nums[val] = -nums[val]
    }
  }
  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) {
      res.push(i + 1)
    }
  }
  return res
}

// console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]))

/*
  重复的子字符串
  给定一个非空的字符串 s ，检查是否可以通过由它的一个子串重复多次构成。
  示例 1：
    输入：s = "abab"
    输出：true
    解释：可由子串 "ab" 重复两次构成。
  示例 2：
    输入：s = "aba"
    输出：false
  示例 3：
    输入：s = "abcabcabcabc"
    输出：true
    解释：可由子串 "abc" 重复四次构成。 (或子串 "abcabc" 重复两次构成。)
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  if (s.length < 2) return false
  let tmp = ''
  for (let i = 0; i < s.length / 2; i++) {
    tmp += s[i] // tmp记录0-i的子串
    if (!s.split(tmp).join('')) return true // 以tmp打散字符串 如果全部符合 那么应该被打散一个数组 每一项都是空字符串
  }
  return false
}

// console.log(repeatedSubstringPattern('abcabcabcabc'))

/*
  数字的补数
  对整数的二进制表示取反（0 变 1 ，1 变 0）后，再转换为十进制表示，可以得到这个整数的补数。
  例如，整数 5 的二进制表示是 "101" ，取反后得到 "010" ，再转回十进制表示得到补数 2 。
  给你一个整数 num ，输出它的补数。
  示例 1：
    输入：num = 5
    输出：2
    解释：5 的二进制表示为 101（没有前导零位），其补数为 010。所以你需要输出 2 。
  示例 2：
    输入：num = 1
    输出：0
    解释：1 的二进制表示为 1（没有前导零位），其补数为 0。所以你需要输出 0 。
 */
/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  let str = num.toString(2)
  let len = str.length,
    sum = 0
  for (let i = 0; i < len; i++) {
    if (str[i] === '0') {
      sum += 2 ** (len - i - 1)
    }
  }
  return sum
}

console.log(findComplement(4))
