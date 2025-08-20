// 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target
// ，写一个函数搜索 nums 中的 target，如果 target 存在返回下标，否则返回 -1。
// 你必须编写一个具有 O(log n) 时间复杂度的算法。

var search = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    const number = Math.floor(l + (r - l) / 2);
    if (nums[number] === target) {
      return number;
    }
    if (nums[number] > target) {
      r = number - 1;
    } else {
      l = number + 1;
    }
  }
  return -1;
};
